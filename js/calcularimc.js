// console.log(titulo);
// console.log(titulo.textContent);
// titulo.textContent="Buena Vida Nutricion"
// console.log("Estoy imprimiendo de un archivo externo main.js")}

var pacientes = document.querySelectorAll(".paciente");

for(var i =0;i< pacientes.length ; i++){
    var paciente= pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    var tdaltura = paciente.querySelector(".info-altura"); 
    var altura= tdaltura.textContent
    var infoimc = paciente.querySelector(".info-imc");


    var pesovalido= validarpeso(peso);
    var alturavalida= validaraltura(altura);
    
    if (!pesovalido){
            console.log("peso incorrecto");
            pesovalido=false;
            infoimc.textContent= "peso incorrecto";
            paciente.classList.add("paciente-maluco");
    }
    if (!alturavalida){
            console.log("peso incorrecto");
            alturavalida=false;
            infoimc.textContent= "altura incorrecto";
            paciente.classList.add("paciente-maluco");
        }
    if (pesovalido && alturavalida){
            
            infoimc.textContent= calcularIMC(peso,altura);
    }
    
    function calcularIMC(peso,altura){
        var imc = peso/(altura*altura);
        return imc.toFixed(2);
    }
}

function validarpeso(peso){
    if (peso>=0 && peso <500){
        return true;
    }else{
        return false;
    }
}
function validaraltura(altura){
    if (altura>=0 && altura <3.00){
        return true;
    }else{
        return false;
    }
}