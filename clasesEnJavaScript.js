
/*Una clase en JavaScript actúa como un blueprint o plano para crear objetos. Imagínalo como un molde, a partir del cual
 se pueden construir múltiples instancias o copias de un objeto. La definición de clase facilita la estructuración y 
 organización de codificaciones, ya que permite separar claramente las propiedades y los métodos que lo caracterizan. */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Mariana", 23);
persona1.saludar();
