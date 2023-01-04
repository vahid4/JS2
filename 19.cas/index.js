class Car {
  constructor(carName, carType) {
    this.name = carName;
    this.carType = carType;
  }
  showAttr() {
    console.log(this.name, this.carType);
  }
}

const newCar = new Car("audi", "limo");
newCar.showAttr();
