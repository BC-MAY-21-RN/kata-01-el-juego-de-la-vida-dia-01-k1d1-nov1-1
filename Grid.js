import Display from "./Display";

export default class Grid extends Display {
  constructor(height, width) {
   super(height, width)
    this.grid = [];
  }

  //Crear Grid para las celulas
  create_grid() {
    for(let i = 0; i < this.height; i++){
      this.grid.push([]);
      for(let j = 0; j < this.width; j++){
        this.grid[i][j].push(this.sample());
      }        
    }
    return console.log(this.grid);
  } 
  
  //Generacion de celulas random en el grid
  sample() {
    let line = ['.', '*']
    return line[Math.floor ( Math.random() * line.length )];
  }

  getGrid(){
    return this.grid;
  }
}
var prueba = new Grid(4,8);

prueba.create_grid()
