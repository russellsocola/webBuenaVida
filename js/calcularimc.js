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


    var pesovalido= true;
    var alturavalida= true;
    
    if ((peso<=0) || (peso>= 300)){
            console.log("peso incorrecto");
            pesovalido=false;
            infoimc.textContent= "peso incorrecto";
            paciente.classList.add("paciente-maluco");
    }
    if ((altura<=0) || (altura>= 5)){
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