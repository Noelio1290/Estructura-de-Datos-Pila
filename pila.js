class Auto {
    constructor(marca){
    this.marca = marca
    this.prev = null
    };
    setPrev(auto){
        this.prev = auto;
      }
}

class Pila{
    constructor(){
        this.head = null
        this.tail = null
    };

    addCar(auto){
        if(!this.head){
            this.head = auto
            this.tail = this.head
        } else {
            const prevCar = this.tail
            this.tail = auto
            this.tail.setPrev(prevCar)
        }
    };
}

const estacionamiento = new Pila()
console.log(estacionamiento)
estacionamiento.addCar(new Auto({marca:"Chevy"}))
estacionamiento.addCar(new Auto({marca:"Bocho"}))
estacionamiento.addCar(new Auto({marca:"Cheyenne"}))
console.log(estacionamiento)
console.log(estacionamiento.head)