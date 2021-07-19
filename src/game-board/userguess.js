import {compship,compGrid} from './computer-grid';
import {find} from './compguess';
import { usership } from './grid-place';

let map={};

let result=document.querySelector('#result');
let playAgain=document.querySelector('#reload');

let userguess=()=>{
    for (let child=0;child<compGrid.children.length;child++){
        compGrid.children[child].addEventListener('click',check);
        map[compGrid.children[child].value]=child;
    }
}

function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

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

async function check(){
    
    if (this.style.backgroundColor=="grey" & (!compship.lost()) &(!usership.lost())){
        playfire();

        let delayres = await delay(600);
        let cell=this.value;
        
        for(let i=0;i<5;i++){
            if (compship.ships[i].belongs(cell)!=-1){
                compship.ships[i].delete(compship.ships[i].belongs(cell));
                
                if (compship.ships[i].length==0){
                    this.style.backgroundColor="black";
                    console.log(compship.ships[i].grids);
                    for (let j=0;j<compship.ships[i].grids.length;j++){
                        let curr=compGrid.children[map[compship.ships[i].grids[j]]];
                        if(curr.children.length==1){
                            let Child=curr.children[0];
                            curr.removeChild(Child);
                        }
                        let img=document.createElement('img');
                        img.classList.add("imgstyle");
                        img.src=compship.ships[i].src;
                        curr.appendChild(img);
                 
                    }
                    result.innerHTML=`You fire a shot into enemy waters and you sunk your opponent ${compship.ships[i].type}`;
                    if(compship.lost()){
                        alert("WINNER USER");
                        result.innerHTML='You WON hurray!🥳 ';
                        
                        playAgain.style.display="block";
                    
                        return;
                    }
               
                    playhit();
                    delayres = await delay(1500);
                 
                    result.innerHTML='Your opponent is aiming...';
                    playfire();
                    
                    delayres = await delay(1000);
                    find();
                    return;
                }
                this.style.backgroundColor="black";
                result.innerHTML=`You fire a shot into enemy waters ...... it's a hit!`;
                let img1=document.createElement('img');
                img1.classList.add("answer");
                img1.src="images/check.ico"
                this.appendChild(img1);

                
               
                playhit();
                delayres = await delay(1500);
                result.innerHTML='Your opponent is aiming...';
                playfire();
              
               
                delayres = await delay(1000);
                find();
                if(compship.lost()){
                    alert("WINNER USER");
                    result.innerHTML='You WON hurray!🥳 ';
                    playAgain.style.display="block";

                }
                return;
            }

        }
        
        this.style.backgroundColor="black";
        let img=document.createElement('img');
        img.classList.add("answer");
        img.src="images/wrong.jpg"
        this.appendChild(img);
    
        playmiss();
        result.innerHTML="You fire a shot into enemy waters ...... and miss.";

      
        delayres = await delay(1900);
      
        result.innerHTML='Your opponent is aiming...';
        playfire();
        
   
        delayres = await delay(1000);
        find();


    }

}

export default userguess;