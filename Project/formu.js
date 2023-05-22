function SendEmail(){
  var params= {
    from_name :  document.getElementById("from_name").value,
    email :  document.getElementById("from_name").value,
    solicitud :  document.getElementById("from_name").value,
  }

  emailjs.send("service_054332", "template_nxvx0xd", params).then(function(res) {
    alert("Enviado!" + res.status );
  })  
}