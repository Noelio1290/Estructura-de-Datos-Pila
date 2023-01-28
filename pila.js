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
    };

    addCar(auto){
        if(!this.head){
            this.head = auto
        } else {
            const prevCar = this.head
            this.head = auto
            this.head.setPrev(prevCar)
        }
    };

    removeCar(){
        if(!this.head){
            return null
        };
        
        const valorRetorno = this.head.marca;
        
        if(!this.head.prev){
            this.head = null
        } else {
            this.head = this.head.prev
        }
        return valorRetorno
    }
}

const estacionamiento = new Pila()
console.log(estacionamiento)
estacionamiento.addCar(new Auto({marca:"Chevy"}))
estacionamiento.addCar(new Auto({marca:"Bocho"}))
estacionamiento.addCar(new Auto({marca:"Cheyenne"}))
console.log(estacionamiento)
estacionamiento.removeCar()
estacionamiento.removeCar()
console.log(estacionamiento)

