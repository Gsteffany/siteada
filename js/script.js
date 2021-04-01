document.getElementById("botãoEnviar").addEventListener("click", ValidaFormulario)

function ValidaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("numero").value != ""){
  alert("Prontinho! Você receberá as novidades por email.")
  }else{
  alert("Por favor, preencha os campos nome e email!")
  }
}