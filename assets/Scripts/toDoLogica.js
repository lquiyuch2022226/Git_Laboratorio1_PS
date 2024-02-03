var botonNuevo = document.getElementById("agregar");
var formularioNuevo = document.querySelector(".nuevo");

var contenidoNuevo = document.querySelector(".nuevo");
var mostrarPendientes = document.querySelector(".mostrar");


botonNuevo.addEventListener("click", function() {
    if (contenidoNuevo.style.display === "none") {
        contenidoNuevo.style.display = "flex";
        mostrarPendientes.style.display = "none";
    } else {
        contenidoNuevo.style.display = "none";
        mostrarPendientes.style.display = "flex";
    }
});

document.getElementById("nuevo").addEventListener("click", function(event) {
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var hora = document.getElementById("hora").value;
    var prioridad = document.getElementById("prioridad").value;
    
    /*Se obtiene el formulario apra clonarlo*/
    var formularioMostrar = document.querySelector(".mostrar");
    
    /*Se clona el formulario*/
    var nuevoFormularioMostrar = formularioMostrar.cloneNode(true);
    
    /*Se asignan los valores que se obtuvieron anteriormente y se asignan al formulario clonado*/
    nuevoFormularioMostrar.querySelector("input[placeholder='Título']").value = titulo;
    nuevoFormularioMostrar.querySelector("textarea[name='descripcion']").value = descripcion;
    nuevoFormularioMostrar.querySelector("input[name='hora']").value = hora;
    nuevoFormularioMostrar.querySelector("select[id='tipo_prioridad']").value = prioridad;
    
    /*Se muestra el formulario*/
    nuevoFormularioMostrar.style.display = "block";
    formularioMostrar.parentNode.appendChild(nuevoFormularioMostrar);
    document.querySelector(".nuevo").reset();
    contenidoNuevo.style.display = "none";
});