

function validaCampo(){
    var formulario;
    formulario=document.formUser;
    //valida el campo usuario// 
    if (formulario.user.value==""){
      //valida si el campo esta vacido//
     document.getElementById("validaUser").innerHTML="favor escriba el usuario"
     //se posiciona en el campo user//
     formulario.user.focus(); //focus=significa el cursor se colocara en el campo de usuario//
     return false;
}else{
    document.getElementById("validaUser").innerHTML="";
}
//valida el campo email//
if (formulario.email.value==""){
    //valida si el campo esta vacido//
   document.getElementById("validaEmail").innerHTML="favor escriba su correo"
   //se posiciona en el campo email//
   formulario.email.focus();
   return false;
}else{
    document.getElementById("validaEmail").innerHTML="";
}
//valida el campo password//
if (formulario.password.value==""){
    //valida si el campo esta vacido//
   document.getElementById("validapassword").innerHTML="favor escriba su password"
   //se posiciona en el campo password//
   formulario.password.focus();
   return false;
}else{
    document.getElementById("validapassword").innerHTML="";
}
//valida el campo comfirma passwordc//
if (formulario.passwordC.value==""){
    //valida si el campo esta vacido//
   document.getElementById("validapasswordC").innerHTML="favor escriba su passwordc"
   //se posiciona en el campo comfirma passwordc//
   formulario.passwordC.focus();
   return false;
}else{
    document.getElementById("validapasswordC").innerHTML="";
}

formulario.submit();




}