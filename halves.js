function numHal (x)  {

    const mitad= ( x / 2 );
    return [mitad, mitad];
}
/*let x = 4;
let mitads= numHal(x);
console.log(mitads, mitads); */
/*Al aplicar lo anterior que está a modo de comentario solo me marca correcto el procedimiento
de x=4 (recordatorio a futuro no aplicar así, no es funcional)*/
console.log(numHal(4)); 
console.log(numHal(10));
console.log(numHal(9)); //con este verifique la fincionalidad, es funcional, sin embargo también sale el divisor