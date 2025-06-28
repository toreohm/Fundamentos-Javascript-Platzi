/** "this" hace referencia directamente al objeto o clase que se está construyendo. En programación orientada a objetos, 
 * las clases actúan como plantillas para crear múltiples instancias de objetos, y "this" permite acceder a los parámetros 
 * definidos dentro del constructor de una clase para definir propiedades de las instancias.
 *  */
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
/**En este ejemplo, this.nombre y this.edad indican que cada instancia de Persona tendrá propiedades nombre y edad, 
cuyas valores serán los que se pasen al crear las instancias.
¿Cómo crear instancias y utilizar "this"? */
let persona1 = new Persona("Alice", 25);
/**Aquí, al emplear new Persona("Alice", 25), se inyectan "Alice" y 25 como nombre y edad respectivamente, a los parámetros 
 * del constructor, asignándolos a las propiedades nombre y edad del objeto persona1. */
/**Además de establecer propiedades, "this" se utiliza frecuentemente en métodos de una clase para trabajar 
 * con las propiedades de instancia. */
Persona.prototype.nuevoMetodo = function() {
  console.log(`Mi nombre es ${this.nombre}`);
};
/**Este método, al ser llamado, accederá a la propiedad nombre de la instancia a través de this y permitirá imprimir el 
 * nombre almacenado: */
persona1.nuevoMetodo(); // Salida: Mi nombre es Alice7
/**El uso de this.nombre en el método nuevoMetodo asegura que siempre haga referencia a la propiedad nombre de la 
 * instancia actual, encapsulando así correctamente la funcionalidad dentro de la clase. */