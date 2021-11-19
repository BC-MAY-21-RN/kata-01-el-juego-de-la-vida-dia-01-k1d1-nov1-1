class Main {
  constructor(nombre) {
    this.nombre = nombre;
    this.altura = null;
    this.ancho = null;
  }
  
  obtenerValores() {
    const readline = require("readline").createInterface({
      //input de numero
      input: process.stdin,
      output: process.stdout,
    });
    
    readline.question("Dame la altura que necesitas: ", (altura) => {
      readline.question("Dame la ancho que necesitas: ", (ancho) => {
        readline.close();

        var height = parseInt(altura);
        var width = parseInt(ancho);
        
        console.log(`Hola ${height}, ${width}`);
      });
    });
  }
}

var main = new Main('grid_1');

main.obtenerValores();


/*height = prompt('Alto');
        height=numb(height);*/