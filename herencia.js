/* En este lenguaje, las funciones y las clases constructoras son las que generan la propiedad denominada prototipo.
De este modo, garantizamos que las instancias u otras clases que se extiendan/hereden de nuestra clase principal puedan acceder 
a esos métodos y propiedades. */
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido");
    }
}
/**¿Cómo se implementa la herencia en JavaScript?
 * JavaScript permite que una clase extienda otra, permitiendo heredar propiedades y métodos. Para ilustrarlo, 
 * crearemos una clase Perro que extiende de Animal:
 */
class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); //Accedemos al constructor de la clase padre (Animal)
        this.raza = raza;
    }
    emitirSonido() {
        console.log("El perro ladra");
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`);
    }
}

/**Aquí, Perro hereda de Animal. Gracias al uso de extends y super, Perro puede usar el constructor de Animal para inicializar
 * las propiedades de nombre y tipo. Además, Perro tiene su propio método emitirSonido, que sobreescribe el de Animal, 
 * mostrando flexibilidad y personalización en la herencia. */

const perro1 = new Perro("Bobby", "perro", "pug");
console.log(perro1);
perro1.emitirSonido();
perro1.correr();
console.log(Perro.prototype);

// poner en la consola del navegador Perro.prototype y Animal.prototype

/**Al trabajar con instancias específicas de una clase en JavaScript, a veces necesitamos métodos únicos que no fueron 
 * definidos en la clase constructora original. Para abordar esta necesidad, es posible agregar nuevos métodos directamente 
 * a una instancia.  */
perro1.nuevoMetodo = function () {
    console.log("Esto es un nuevo método");
};

/**¿Qué es el prototype y cómo se utiliza para agregar métodos?
 * El prototype en JavaScript es una herramienta fundamental para compartir métodos y propiedades a través de múltiples 
 * instancias de una clase constructora. Si buscamos que un método esté disponible para cada instancia de una clase, 
 * se debe añadir directamente al prototipo de esa clase.
 */
Perro.prototype.segundoMetodo = function() {
  console.log("Este es otro nuevo método.");
};
/**Con este enfoque, cualquier instancia de Perro, ya existente o creada en el futuro, podrá acceder a segundoMetodo. 
 * Esta técnica es esencial para la economía de memoria y eficiencia, ya que las funciones compartidas se almacenan en 
 * un solo lugar en la memoria. */
