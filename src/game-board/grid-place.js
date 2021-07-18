import Createship from "../ship/createship";
import ship from "../ship/ships";
import placeShip from "../game-board/ship-place";
import {createComputerboard} from "../game-board/computer-grid";
import userguess from "../game-board/userguess";
import {compguess} from'./compguess';

let arr=[["Carrier",5,"orange"],["Battleship",4,"red"],["Cruiser",3,"Blue"],["Submarine",3,"green"],["Destroyer",2,"pink"]];

let userGrid=document.querySelector('#user');
let usership=new Createship();
const createGameboard=()=>{
   
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
                let newChild=document.createElement('div');
                
                newChild.value=[i+1,j+1];
                newChild.addEventListener('click',place);
                userGrid.appendChild(newChild);
            }
        }
    }

function place(){
    

  
    if (usership.full()){
        createComputerboard();
        
    }
    else{
       
        let length=usership.length;
        //let direction=parseInt(prompt("Enter direction"));
        let direction=0;
     
        let cells= placeShip(this.value,arr[length][1],direction,userGrid.children,arr[length][2]);
    
        if (cells!=-1){
            let newShip=new ship(arr[length][0],arr[length][1],cells,arr[length][2]);
            usership.add(newShip);
        }

        if (usership.full()){
            createComputerboard();
            for (let child=0;child<userGrid.children.length;child++){
                userGrid.children[child].removeEventListener('click',place);
            }
            userguess();
            compguess();

            
        }

        


        
    }
    
    
}
export {createGameboard,usership,userGrid};
