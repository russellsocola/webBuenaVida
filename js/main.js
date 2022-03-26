var button = document.querySelector("#adicionar-paciente");
button.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");

    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var talba = document.querySelector("#tabla-pacientes");    
    
    console.log(nombre);
    console.log(peso);
    console.log(altura);
    console.log(gordura);

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    nombreTd.textContent= nombre;
    pesoTd.textContent= peso;
    alturaTd.textContent= altura;
    gorduraTd.textContent= gordura;

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    talba.appendChild(pacienteTr);
    
});

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
        var imc = peso/(altura*altura);
        infoimc.textContent= imc.toFixed(2);
    }
}
