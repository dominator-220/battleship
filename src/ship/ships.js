function ship(type,length,cells,color){
    this.type=type;
    this.length=length;
    this.cells=cells;
    this.color=color;
    this.Sunk=()=>{
        if (this.length==0){
            return 1
        }
        return 0


    }
    this.belongs=(pos)=>{
        if (this.cells.indexOf(pos)!=-1){
            return 1
        }
        else{
            return 0
        }
    }

    this.delete=(pos)=>{
        ind=this.cells.indexOf(pos);
        this.cells.splice(ind,1);


    }

}

export default ship;