class Stack {
    constructor(){
        this.stack = {}
        this.count = ""
    };
    agregarCarros(nombre){
        this.stack[this.count] = new Auto(nombre)
        this.count += this.stack[this.count]
    };
    sacarUltimoCarro(){
        let elemento = this.stack[this.count]
        delete this.stack[this.count]
        this.count -= this.stack[this.count]
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
//console.log(estacionamiento.contenido())
console.log(estacionamiento.agregarCarros("Chevy"))
console.log(estacionamiento.agregarCarros("Mustang"))
console.log(estacionamiento.agregarCarros("Tsuru"))
console.log(estacionamiento.agregarCarros("Ferrari"))
estacionamiento.contenido()
console.log(estacionamiento.sacarUltimoCarro())
estacionamiento.contenido()