function validacion() {
    var usuario = document.getElementById("username").value
    var pass = document.getElementById("password").value
    if( usuario == null || usuario.length == 0 || pass == null || pass.length==0 ) {
        alert('[ERROR] Alguno de los campos pedidos está vacío');
        return false;
    }
    if (isNaN(usuario) ) {
      alert('[ERROR] No ingresó un número de DNI en el primer campo');
      return false;
    }
    else if (pass.length<4) {
      alert('[ERROR] La contraseña es demasiado corta. Ingrese al menos 4 caracteres');
      return false;
    }
    window.location.href = "paginaPrin.html";
    return true;
}