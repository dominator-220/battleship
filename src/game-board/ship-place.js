
let placeShip=(start,length,direction,grid,color,link)=>
{   
    if (check(start,length,direction,grid)){
    
        let cells=putShip(start,length,direction,grid,color,link)
        return cells
        

    }
    return -1;
}

function putShip(start,length,direction,grid,color,link){
    let total=length;
    let curr=(start[0]-1)*10+(start[1]-1);
    let cells=[];
    if (direction==0){
        while(total>0){
            grid[curr].style.backgroundColor=color;
            let img=document.createElement('img');
            img.classList.add("imgstyle");
            img.src=link;
            grid[curr].appendChild(img);
           
            cells.push([Math.floor(curr/10)+1,(curr%10)+1]);
            total+=-1;
            curr+=1;
           



        }
        
    }
    else{
        while(total>0){
            grid[curr].style.backgroundColor=color;
            
            let img=document.createElement('img');
            img.classList.add("imgstyle");
            img.src=link;

            grid[curr].appendChild(img);
            cells.push([Math.floor(curr/10)+1,(curr%10)+1]);
            total+=-1;
            curr+=10;
            
            

        }
    
        
    }
    return cells
}

function check(start,length,direction,grid){
    let total=length;
    let curr=(start[0]-1)*10+(start[1]-1)
    if (direction==0){
        if (length>11-start[1]){
            return 0;
        }
        while(total>0){
            if (grid[curr].style.backgroundColor!=""){
                return 0
            }
            total+=-1
            curr+=1


        }
        
    }
    else{
        if (length>11-start[0]){
            return 0;
        }
        while(total>0){
            if (grid[curr].style.backgroundColor!=""){
                return 0
            }
            total+=-1
            curr+=10


        }
        
    }
    return 1
}

export default placeShip;