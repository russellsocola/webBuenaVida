var button = document.querySelector("#adicionar-paciente");

button.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);

    if( errores.length>0){
        exhibirMensajesErrores(errores);
        return;
    }
    //validar paciente
    var talba = document.querySelector("#tabla-pacientes");
    talba.appendChild(pacienteTr);
    form.reset();
    var mensajesErrorres= document.querySelector("#mensajesError");
    mensajesErrorres.innerHTML="";

});

function capturarDatosPaciente(form){
    //capturando datos del formulario
    var paciente = {
        nombre :  form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}
function construirTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function construirTd(dato,clase){
    //creo una etiqueta html desde js
    var td = document.createElement("td");
    //creo una clase para mi etiqueta
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){
    var errores=[];
    if(paciente.nombre.length == 0){
        errores.push("El nombren no puede estar vacio");
    }if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacia");
    }if(paciente.gordura.length == 0){
        errores.push("El %gordura no puede estar vacia");

    }if(!validarpeso(paciente.peso)){
        errores.push("El peso es incorecto");
    }if(!validaraltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores){

    var ul = document.querySelector("#mensajesError");
    ul.innerHTML=""
//el forEach es un loop que recorre automaticamente un array
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li); 
    });
}