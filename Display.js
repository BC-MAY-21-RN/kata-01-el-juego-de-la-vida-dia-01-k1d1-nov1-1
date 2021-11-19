export default class Display{
  constructor(matriz, width, height, generation){
    this.matriz = matriz;
    this.width = width;
    this.height = height;
    this.generation = generation;
  }

  printGrid(){
    console.log(`Generation ${this.generation}`);
    const alto = this.height - 1;
    const ancho = this.width - 1;
    for(let i in alto){
      let cadena = '';
      for(let x in ancho){
        cadena += this.matriz[i][x]
      }
    }
    console.log(cadena) 
  }
}