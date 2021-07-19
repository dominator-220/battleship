function ship(type,length,cells,color,src){
    this.type=type;
    this.length=length;
    this.cells=cells;
    this.grids=[];
    this.color=color;
    this.src=src;
    this.Sunk=()=>{
        if (this.length==0){
            return 1
        }
        return 0


    }
    this.belongs=(pos)=>{
      
        for(let i=0;i<this.length;i++){
            if(pos[0]==this.cells[i][0] & (pos[1]==this.cells[i][1])){
                return i;
            }
        }
        
        return -1;
        
    }

    this.delete=(pos)=>{
        this.grids.push(this.cells[pos]);
        this.cells.splice(pos,1);
        this.length+=-1;


    }

}

export default ship;