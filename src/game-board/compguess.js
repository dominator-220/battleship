import {usership,userGrid} from './grid-place';
let visited={};

let userguess=()=>{
    for (let child=0;child<userGrid.children.length;child++){
        userGrid.children[child].addEventListener('click',check);
    }
}

function check(){
    if (this.value!=-1){
        let cell=this.value;
        
        for(let i=0;i<5;i++){
            if (usership.ships[i].belongs(cell)!=-1){
                usership.ships[i].delete(usership.ships[i].belongs(cell));
                console.log(usership.ships[i].color)
                this.style.backgroundColor=usership.ships[i].color;
                this.innerHTML="R";
                this.value=-1;
                return;
            }

        }
        this.style.backgroundColor="black";
        this.innerHTML="W";
        this.value=-1;



    }

}

export default userguess;