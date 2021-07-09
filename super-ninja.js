/*

Extiende la clase Ninja y crea la clase Sensei. 
Un Sensei debería tener 200 de salud, 10 de velocidad y 10 de fuerza por defecto.

Además, un Sensei debería tener un nuevo atributo llamado sabiduría , y el valor predeterminado debería ser 10. 

Finalmente, agrega el métodospeakWisdom(). speakWisdom() debería llamar al métododrinkSake() desde la clase Ninja, antes de console.logging, un mensaje inteligente.

*/

class Ninja {
    constructor(nombre, salud, velocidad,fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName(){
        this.nombre='Pedro';
    }
    showStats(){
        this.nombre ='Alex';
        this.salud;
        this.velocidad;
        this.fuerza;
    }
    drinkSake(){
        this.salud+=10;
    }
}

// crear una clase Sensei que hereda de la clase Ninja
class Sensei extends Ninja {

    constructor(nombre, salud, velocidad,fuerza,sabiduria) {
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    //crear un método: speakWisdom ()
    speakWisdom(){
        this.drinkSake();
        console.log(
            `Salida de speakWisdom`
        );
    }

    showStats() {
        const { sabiduria } = this;
        // "Metodo" para traer el metodo de la clase padre
        return { ...super.showStats(), sabiduria };
    }
}

const ninja2 = new Sensei('Ninja2',200,10,10,10);
console.table(ninja2);
console.log({ stats: ninja2.showStats() });





