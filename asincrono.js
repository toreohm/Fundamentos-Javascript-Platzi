/**¿Qué son las Web APIs? 
 * Las Web APIs son herramientas que permiten que JavaScript ejecute tareas de manera asíncrona, proporcionando simultaneidad.
 * 
 * ¿Qué es el Event Loop?
 * El Event Loop interroga constantemente al Call Stack para verificar si está vacío. Cuando lo está, extrae una tarea 
 * del Queue y la transfiere al Call Stack para ejecutar. De este modo, tareas asincrónicas se integran ordenadamente 
 * en el flujo de ejecución.
 * 
 * Ejemplo de setTimeout en programación asíncrona:
*/
function varFunc() {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  console.log(3);
}
varFunc();

/**La secuencia de ejecución sería: 
 * 1) console.log(1) se ejecuta primero.
   2) setTimeout() transfiere el console de 2 al Queue.
   3) console.log(3) se ejecuta.
   4) Una vez que el Call Stack está vacío, el event loop mueve el console de 2 del Queue al Call Stack.

   El resultado en consola sería: 1, 3 y 2. Aunque setTimeout parece ser instantáneo, su resultado aparece 
   solo cuando el Stack está vacío.
*/
