

function procesarFormulario(){
  var name = document.getElementById("nombre").value
  var surname = document.getElementById("apellido").value
  document.getElementById("salida").innerHTML =
  "Gracias "+ name +", pronto me pondre en contacto.";
}