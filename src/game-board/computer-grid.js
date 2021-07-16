import Createship from "../ship/createship";
import ship from "../ship/ships";
import placeShip from "../game-board/ship-place";

let arr=[["Carrier",5,"orange"],["Battleship",4,"red"],["Cruiser",3,"Blue"],["Submarine",3,"green"],["Destroyer",2,"pink"]];

let compGrid=document.querySelector('#computer');
let compship=new Createship();
const createComputerboard=()=>{
   
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
                let newChild=document.createElement('div');
                
                newChild.value=[i+1,j+1];
                compGrid.appendChild(newChild);
        }
    }
    fillValues()
}

function fillValues(){
  
    while(!compship.full()){
        let ind=Math.floor(Math.random()*(100));
        let curr=compGrid.children[ind];

        let length=compship.length;
        let direction=Math.floor(Math.random()*(2));
        let cells= placeShip(curr.value,arr[length][1],direction,compGrid.children,arr[length][2]);
    
        if (cells!=-1){
            let newShip=new ship(arr[length][0],arr[length][1],cells,arr[length][2]);
            compship.add(newShip);
        }

    }
    for (let child=0;child<compGrid.children.length;child++){
        compGrid.children[child].style.backgroundColor="grey";
        
    }

  
    
    
}


export {createComputerboard,compship,compGrid};
