// EN MI COMPU, SE VE TODO BIEN AL 80% DEL ZOOM, cualquier cosa es ajustar las posiciones para que lo vean bien los demas

// me traigo el form
let form = document.querySelector("form");
// me traigo el div mensaje
let mensaje = document.querySelector("#mensaje");

// hago un escuchador para cuando se intenta hacer submit
form.addEventListener("submit", (e) => {
  // preveo que NO se envie el formlario automatcamente
  e.preventDefault();

  // creo variables
  let mensajeError = "";

  let usuario = document.getElementById("login__username");
  let contrasenia = document.getElementById("login__password");

  //---------------------------------------------------------------------------------------------------------------------------------------
  //----------------------- guardo el nombre en un localStorage----------------------------------------------------------------------------

  //para el setItem necesito una key y un valor, de key podes usar lo que quieras, es para identificarla mas facil
  //por eso, para identificarla mas facil, le puse el mismo nombre que el id de donde recibo el nombre ("login__username").
  // Y por ultimo de valor uso la variable del usuario que obtuve por el id "login__username".
  // Basicamente, con el setItem es como decirle al localStorage: guardame una variable local que se llame: "login__username" y ponele
  // este valor: "usuario.value", entonces se crea una variable asi: (no asi pero es a modo ilustrativo) login__username = usuario.value;
  localStorage.setItem("login__username", usuario.value);
  //---------------------------------------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------------------------------------

  let errorUsuario = false;
  let errorContrasenia = false;

  let expresionRegularDeCampoVacio = /^\s*$/;

  // si el usuario esta vacio hago esto
  if (expresionRegularDeCampoVacio.test(usuario.value)) {
    // le agrego un mensaje con la etiqueta <p>
    mensajeError +=
      "<label for='login__username'>* Introduce un NOMBRE</label>";
    usuario.focus();
    errorUsuario = true;
  }

  // si la contraseña esta vacia hago esto
  if (expresionRegularDeCampoVacio.test(contrasenia.value)) {
    // le agrego un mensaje con la etiqueta <p>
    mensajeError +=
      "<label for='login__password'>* Introduce una CONTRASEÑA</label>";
    contrasenia.focus();
    errorContrasenia = true;
  }

  // si alguno de los campos anteriores estan vacios, entro
  if (errorUsuario || errorContrasenia) {
    // si los dos estan vacios, hago foco en el usuario, sino, queda enfocada la contraseña del if anterior
    if (errorUsuario && errorContrasenia) {
      usuario.focus();
    }

    // al div mensaje le inserto los mensajes de error
    mensaje.innerHTML = mensajeError;
  } else {
    // si los campos anteriores estan COMPLETOS, envio el formulario
    form.submit();
  }
});
