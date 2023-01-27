class Stack {
    constructor(){
        this.stack = {}
        this.count = 1
    };
    agregarCarros(nombre){
        this.stack[this.count] = nombre
        this.count++
    };
    sacarUltimoCarro(){
        this.count--
        let elemento = this.stack[this.count]
        delete this.stack[this.count]
        return elemento
    };

    contenido(){
        console.log(this.stack)
    };

    cantidad(){
        console.log(this.count)
    };
};

class Auto{
    constructor(nombre){
        this.nombre = nombre
    };
};

const estacionamiento = new Stack()
estacionamiento.contenido()
estacionamiento.agregarCarros("Chevy")
estacionamiento.agregarCarros("Mustang")
estacionamiento.agregarCarros("Tsuru")
estacionamiento.agregarCarros("Ferrari")
estacionamiento.contenido()
console.log(estacionamiento.sacarUltimoCarro())
estacionamiento.contenido()
console.log(estacionamiento.sacarUltimoCarro())
console.log(estacionamiento.sacarUltimoCarro())
console.log(estacionamiento.sacarUltimoCarro())
estacionamiento.contenido()
