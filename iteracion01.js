/*
juego de la vida

1 Cualquier célula viva con menos de dos vecinos vivos muere, como si fuera causada por la subpoblación.
2 Cualquier celda viva con más de tres vecinos vivos muere, como por hacinamiento.
3 Cualquier célula viva con dos o tres vecinos vivos vive para la próxima generación.
4 Cualquier celda muerta con exactamente tres vecinos vivos se convierte en una celda viva.
*/

console.log("Buenas tardes")



//funcion input para ancho y alto de las celdas
const readline = require('readline').createInterface({ 
    input: process.stdin,
    output: process.stdout
  })
   
    /*Funcion creo que no necesaria*/readline.question('Dame un numero: ', num => {  
    readline.question('Dime lo alto de tu numero: ', alto => {
    readline.question('Dime lo ancho de tu numero: ', ancho => {
    readline.close()

    //conversor de int a array, no se si sea necesario en esta
    var myInt = num;
    let myFunc = num => Number(num)
    var intArr = Array.from(String(myInt), myFunc)  

    //aqui va la funcion en la cual se formaran las columas y filas
    conversor(alto,ancho,intArr)
  })})})


//Ejemplo de poner co-autores
// Co-authored-by: xManuel007 <maanuu.009@gmail.com>
// Co-authored-by: Dylanson25 <dvillarreal0@ucol.mx>
// Co-authored-by: xFerchoVJ <fer_elsword@hotmail.com>
// Co-authored-by: adrianagh13 <gomezhinojosa.adriana@gmail.com> 

