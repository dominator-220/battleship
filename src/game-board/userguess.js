import {compship,compGrid} from './computer-grid';
import {find} from './compguess';

let userguess=()=>{
    for (let child=0;child<compGrid.children.length;child++){
        compGrid.children[child].addEventListener('click',check);
    }
}

function check(){
    if (this.style.backgroundColor=="grey"){
        let cell=this.value;
        
        for(let i=0;i<5;i++){
            if (compship.ships[i].belongs(cell)!=-1){
                compship.ships[i].delete(compship.ships[i].belongs(cell));
                console.log(compship.ships[i].color)
                
                this.style.backgroundColor=compship.ships[i].color;
                find();
                if(compship.lost()){
                    alert("WINNER user")
                }
                return;
            }

        }
        
        this.style.backgroundColor="black";
        find();


    }

}

export default userguess;