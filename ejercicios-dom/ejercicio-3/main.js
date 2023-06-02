const boton = document.getElementById('calcular');
const selector = document.getElementById('operador');

let resultado = document.getElementById('resultado');

boton.addEventListener('click', operaciones);

function operaciones(){

    let x = parseFloat(document.getElementById('valor1').value);
    let y = parseFloat(document.getElementById('valor2').value);

  
   

    switch(selector.value){
        case 'suma': resultado.innerText= x + y
         break;
        case 'resta': resultado.innerText= x - y
         break;
        case 'multiplicacion': resultado.innerText= x * y 
        break;
        case 'division': 
        if(y!=0){
            resultado.innerText = (x/y).toFixed(2);
        }
        else{
            resultado.innerText = 'No se puede dividir por cero.';
            
        }
        break;
        default: resultado.innerText='sintax error';
       }    
    }






        
   
