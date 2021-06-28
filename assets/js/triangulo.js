

const calcularArea = () =>{
    
    const ladoA  = parseInt(document.getElementById('inputLado1').value);
    const ladoB  = parseInt(document.getElementById('inputLado2').value);
    
   if(ladoA !== ladoB){
       alert('No son iguales los lados, por tanto no es isosceles')
   }
   else {
    let calcularAreaTriangulo = (ladoA) => (ladoA * Math.sqrt((ladoA*ladoA) - ((ladoA*ladoA)/4)))/2;
    alert('El área del triángulo isosceles es: ' + calcularAreaTriangulo(ladoA).toFixed(3) + ' cm2');

   }
    
}


 
 