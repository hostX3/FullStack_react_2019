let age = 4

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
  showAge: function () {
    console.log(`Hello my age is ${this.age}`);
  },
};

arto.showAge();

const referenceToAddition = arto.showAge;
referenceToAddition();

const arta = {
  age : 12,
  referenceToAddition: arto.showAge,
};

arta.referenceToAddition()