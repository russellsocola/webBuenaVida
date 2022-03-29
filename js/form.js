var button = document.querySelector("#adicionar-paciente");

button.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);
    console.log(errores)

    if( errores.length>0){
        exhibirMensajesErrores(errores);
        return;
    }
    //validar paciente
    var talba = document.querySelector("#tabla-pacientes");
    talba.appendChild(pacienteTr);
    form.reset();
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
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){
    var errores=[];
    if(!validarpeso(paciente.peso)){
        errores.push("El peso es incorecto");
    }if(!validaraltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores){

    var ul = document.querySelector("#mensajesError");

    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li); 
    });
}