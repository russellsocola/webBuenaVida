var filtro = document.querySelector("#filtrar-tabla");
filtro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0 ){
        for(var i = 0 ; i < pacientes.length; i++ ){
            var paciente = pacientes[i];
            var tdNombre =paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            
            if(nombre != this.value){
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }
        }
    }else{
        for (var i= 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
    
    
});