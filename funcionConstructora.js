/*Las funciones constructoras nos permiten definir una plantilla para un objeto, facilitando la creación de múltiples instancias.
Una función constructora es una forma de crear múltiples objetos con estructura similar sin necesidad de duplicar código.
Iniciamos el nombre de la función constructora con una letra mayúscula para indicar que esta función se utilizará para crear objetos.
*/

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

// Para crear instancias de un objeto utilizando una función constructora, utilizamos la palabra clave new
const hector = new Persona("Hector", "Maluy", 40);

/*Para añadir una propiedad a una instancia particular sin afectar a las demás, simplemente accedemos al objeto y añadimos la nueva propiedad:

Ejemplo:*/
hector.nacionalidad = 'Mexicano'; 

/*Si deseamos agregar una propiedad o método a todas las instancias, lo hacemos a través del prototype.

Ejemplo:*/
Persona.prototype.telefono = '555-555-5555';

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

hector.saludar();

/*Un prototipo en JavaScript es un objeto del cual otros objetos heredan propiedades y métodos. Al crear una función 
constructora (o clase constructora), JavaScript automáticamente genera un prototipo asociado a esa función, que se usa 
como un "molde" para crear instancias de objetos.
La herencia en JavaScript se refiere a la capacidad de un objeto para acceder a propiedades y métodos de otro objeto. 
Este mecanismo se realiza mediante el uso de prototipos. En el caso anterior, la instancia hector hereda el método saludar 
del prototipo de Persona. */
