class Parents {
  constructor(father, mother) {
    this.fatherName = "Sarowar Khan";
    this.motherName = "Mabia Begum";
  }
}

class Child extends Parents {
  constructor(name) {
    super();
    this.sonName = name;
  }
}
const baby = new Child("Rakib");
const baby2 = new Child("Sakib");
console.log(baby, baby2);
