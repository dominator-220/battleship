import Usership from "../ship/usership";
import ship from "../ship/ships"
import placeShip from "../game-board/ship-place"

let arr=[["Carrier",5,"orange"],["Battleship",4,"red"],["Cruiser",3,"Blue"],["Submarine",3,"green"],["Destroyer",2,"pink"]];

let game=document.querySelector('#game');
let usership=new Usership();
const createGameboard=()=>{
   
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
                let newChild=document.createElement('div');
                
                newChild.value=[i+1,j+1];
                newChild.addEventListener('click',value);
                game.appendChild(newChild);
            }
        }
    }

function value(){
    console.log(this.value);
    alert(this.value);
    console.log(usership);
    if (usership.full()){
        pass
    }
    else{
        let length=usership.length;
        let direction=parseInt(prompt("Enter direction"));
        console.log(direction);
        let cells= placeShip(this.value,arr[length][1],direction,game.children,arr[length][2]);
    
        if (cells!=-1){
            let newShip=new ship(arr[length][0],arr[length][1],cells,arr[length][2]);
            usership.add(newShip);
        }

        


        
    }
    
    
}
export default createGameboard;
