function Createship(){
    this.length=0;
    this.ships=[];
    this.lost=()=>{
        for(let i=0;i<5;i++){
            if ((this.ships[i].Sunk())==0){
            return 0;
            }


        }
        return 1;
    }
    this.full=()=>{
        return (this.length==5);
    }
    this.add=(ship)=>{
        this.ships.push(ship);
        this.length+=1;

    }
}

export default Createship;