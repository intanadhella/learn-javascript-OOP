let mulai,berhenti

let stopwatch = {
    start : () => {
        mulai = new Date ()
        return mulai
    },
    stop : () => {
        berhenti = new Date ()
        return berhenti
    },
    duration : () => {
        console.log(`${berhenti - mulai} ms` )
    }
}
console.log (stopwatch.start())

// start copy paste dari challenge project
class Car {
    constructor(owner = 'Unknown Owner', name = 'Unknown Name') {
        this.owner = owner
        this.name = name
    }

    drive() {
        console.log(
            `The ${this.name} car owned by ${this.owner} drives on the road`
        )
    }

    getOwner() {
        return this.owner
    }

    getOwner() {
        return this.name
    }
}
const myCar = new Car('Elon', 'Tesla Model S')

console.log(myCar)

myCar.drive()

console.log(myCar.getOwner())
class SportsCar extends Car {
    constructor({
        owner,
        name,
        color,
        price,
        engine
    }) {
        super(owner, name)
        this.color = color
        this.price = price
        this.engine = engine
    }

    getColor() {
        return this.color
    }

    getPrice() {
        const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(this.price)

        return formattedPrice
    }

    getEngine() {
        return this.engine
    }
}
const coolCar = new SportsCar({
    owner: 'Starman',
    name: 'Tesla Roadster',
    color: 'Red',
    price: '200000', 
    engine: 'Electric'
})

console.log(coolCar)

coolCar.drive()

console.log(coolCar.getColor())

console.log(coolCar.getPrice())
// end copy paste dari challenge project

console.log (stopwatch.stop())
stopwatch.duration()
