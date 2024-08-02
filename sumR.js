
function CalcsumAbs( w, x, y, z){
    
   // const total= Math.abs(w + x +y + z);//si se coloca así no se lee a Math.abs
   const total = ((Math.abs(w)) + (Math.abs(x)) + (Math.abs(y)) + (Math.abs(z))); //Forma correcta de aplicar
   

    return total;
}
function makeSum(total){
    console.log ("La sumatoria de resistencias es: "  + total +  " ohmios" );
}
//Math.abs retorna el valor absoluto de un número dado
const sum1=CalcsumAbs(-1, 5, 6, 3);
makeSum(sum1); 
const sum2=CalcsumAbs(14, 3.5, 6 );//Marca error por que z está indefinido 
makeSum(sum2);
const sum3=CalcsumAbs(8, 15, 100 );//si agrego un cero me realiza correctamente la operación.
makeSum(sum3);
//Reescribir la parte de z