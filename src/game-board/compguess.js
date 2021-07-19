import {usership,userGrid} from './grid-place';
let poss=[];
let stack=[];
let map={};
let vis={};
let dir=[[1,0],[-1,0],[0,1],[0,-1]];
let canbe=[];
let result=document.querySelector('#result');
let playAgain=document.querySelector('#reload');


function playmiss() {
    let audio = document.getElementById("miss");
    audio.play();
}
function playhit() {
    let audio = document.getElementById("hit");
    audio.play();
}
function playfire() {
    let audio = document.getElementById("fire");
    audio.play();
}


let compguess=()=>{
    for (let child=0;child<userGrid.children.length;child++){
        
        map[userGrid.children[child].value]=child;
        vis[child]=0;
        poss.push(child);
    }

}

let find=()=>{
    let curr=-1;
    let len=stack.length;
    let add=0;
   
    if (len==0){
        if (canbe.length!=0){
            stack=[canbe[canbe.length-1]]
            canbe.pop();
        }
    }
    len=stack.length;
    if (len==0){
        let ind=Math.floor(Math.random()*(poss.length));
        curr=userGrid.children[poss[ind]];

        stack.push(curr.value);
        add=1;
    }
    else{
        if (len==1){
            for(let d=0;d<4;d++){
                let cellx=stack[0][0]+dir[d][0];
                let celly=stack[0][1]+dir[d][1];
                let ind=map[[Math.max(1,Math.min(10,cellx)),Math.max(1,Math.min(10,celly))]];
                if (vis[ind]==0){
                    curr=userGrid.children[[ind]];
                    stack.push(curr.value);
                    add=1;
                    break

                }
            }
        }
        else{
            
            let D=1;
            if (stack[0][0]==stack[1][0]){
                D=0;
            }
            if (D==1){
                let candidate=[Math.min(10,stack[len-1][0]+1),stack[len-1][1]];
             
                let e=vis[map[[Math.min(10,stack[len-1][0]+1),stack[len-1][1]]]];
               
                if (e==1){
                    for(let j=0;j<len;j++){
                        candidate=[Math.max(1,stack[j][0]-1),stack[j][1]];
                        if(vis[map[candidate]]==0){
                            stack.push(candidate);
                            add=1;
                           
                            curr=userGrid.children[map[candidate]];
                            break;
                        }

                    }

                }
                else{
                
                    stack.push(candidate);
                    add=1;
                    curr=userGrid.children[map[candidate]];
                }
            }

            else{
                let candidate=[stack[len-1][0],Math.min(10,stack[len-1][1]+1)];
                
                let e=vis[map[[stack[len-1][0],Math.min(10,stack[len-1][1]+1)]]];
                if (e==1){
                    for(let j=0;j<len;j++){
                        candidate=[stack[j][0],Math.max(1,stack[j][1]-1)];
                       
                        if(vis[map[candidate]]==0){
                            stack.push(candidate);
                            add=1;
                            curr=userGrid.children[map[candidate]];
                            break;
                        }

                    }

                }
                else{
                   
                    stack.push(candidate);
                    add=1;
                    curr=userGrid.children[map[candidate]];
                }
            }

        
         
        }
    }
    if (add==0){
        canbe=[];
        for(let j=0;j<stack.length;j++){
            canbe.push(stack[j]);
        }
        stack=[canbe[canbe.length-1]];
        canbe.pop();
        for(let d=0;d<4;d++){
            let cellx=stack[0][0]+dir[d][0];
            let celly=stack[0][1]+dir[d][1];
            let ind=map[[Math.max(1,Math.min(10,cellx)),Math.max(1,Math.min(10,celly))]];
            if (vis[ind]==0){
                curr=userGrid.children[[ind]];
                stack.push(curr.value);
                add=1;
                break

            }
        }

    }
   
    check(curr);




}

function check(Child){

    if (Child.value!="" & (!usership.lost())){
        let cell=Child.value;
        let ind=map[cell];
        vis[ind]=1;
    
   
        
        for(let i=0;i<5;i++){

            if (usership.ships[i].belongs(cell)!=-1){
                usership.ships[i].delete(usership.ships[i].belongs(cell));
               
                if (usership.ships[i].length==0){
                    for(let j=0;j<stack.length;j++){
                        let temp=poss.indexOf(map[stack[j]]);
                        if (temp!=-1){
                        poss.splice(temp,1);
                        }

                    }
                    stack=[];
                   
                    Child.value="";
                    let img=document.createElement('img');
                    img.classList.add("answer");
                    img.src="images/check.ico"
                    Child.appendChild(img);
                    result.innerHTML=`The enemy fires a shot into your waters  and they sunk your  ${usership.ships[i].type}`;
                    playhit();
                    if(usership.lost()){
                        alert("WINNER Computer");
                        result.innerHTML='Computer Won Try Again';
                        playAgain.style.display="block";

                        
                        return;
                    }
                    return;
                }
              
                Child.value="";
                let img=document.createElement('img');
                img.classList.add("answer");
                img.src="images/check.ico"
                Child.appendChild(img);
                
                result.innerHTML="The enemy fires a shot into your waters ...... it's a hit!";
                playhit();
               
               
                
                if(usership.lost()){
                    alert("WINNER Computer");
                    playAgain.style.display="block";
                }
                return;
            }

        }
        Child.style.backgroundColor="black";
        let img=document.createElement('img');
        img.classList.add("answer");
        img.src="images/wrong.jpg"
        Child.appendChild(img);
        Child.value="";
     
        result.innerHTML="The enemy fires a shot into your waters ...... and misses.";
        playmiss();
        let temp=poss.indexOf(map[stack[stack.length-1]]);
        poss.splice(temp,1);
       

        stack.pop();
        
        
        



    }

}

export {compguess,find};