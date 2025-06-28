/** HTTP (Hypertext Transfer Protocol) es el protocolo que permite realizar solicitudes de datos y enviar información entre 
 * clientes y servidores. En la práctica, se emplean métodos HTTP mediante la función fetch en JavaScript para interactuar 
 * con APIs. */
/**¿Cómo funcionan las peticiones con fetch?
 * Cuando utilizamos fetch, estamos solicitando a un servidor que nos proporcione información que luego podemos manejar y 
 * mostrar en el DOM. Mediante fetch, hacemos un pedido a una API, que a menudo nos devuelve datos en formato JSON. Usar 
 * fetch es una manera de realizar peticiones HTTP de forma asíncrona, lo que nos permite mejorar la experiencia del usuario 
 * al cargar datos sin interrumpir el flujo de la aplicación.
 */

//Este código realiza una solicitud GET a una API de ejemplo que devuelve información ficticia.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => 
      data.forEach(post => {
        console.log(post.title);
      })
      );
  
  