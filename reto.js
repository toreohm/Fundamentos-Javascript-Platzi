/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
    {
    username: "oscar",
    password: "999",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

let resultado = document.getElementById("resultado");

function procesar() {
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;

  for(let i = 0; i < usersDatabase.length; i++) {
    if((usuario.toLowerCase()===usersDatabase[i].username.toLowerCase()) && (password === usersDatabase[i].password)) {
      mostrarBienvenida(usuario);
      return;
    }
  }
  mostrarError();
}

function mostrarError() {
 resultado.innerHTML="Usuario y/o password incorrectos";
 resultado.style.color="red";
 resultado.style.fontSize="40px";
}

function mostrarBienvenida(usuario) {
   let timeline = usersTimeline.find(info => info.username.toLowerCase() === usuario);
   resultado.innerHTML= `Bienvenido ${usuario} <br> <q>${timeline.timeline}</q>`;
   resultado.style.color="green";
   resultado.style.fontSize="40px";
}