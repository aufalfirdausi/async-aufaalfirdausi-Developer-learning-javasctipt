// class adalah blueprint 
//komponen class sendiri terdiri dari 

// constructor : method khusus yang dipanggil ketika membuat objek baru
// properties : variable yang dimiliki oleh objek(dalam kasus ini ada name dan age)
//methods : fungsi yang dimiliki oleh objek (dalam kasus ini greet())

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    halo () {
      console.log(`Halo, nama saya ${this.name} dan saya ${this.age} tahun.`);
    }
  }
  
  // Membuat objek dari class
  const person1 = new Person("aufa", 17);
  person1.halo();
  
  class student extends Person {
    constructor (name, age, grade) {
        super(name, age)
        this.grade = grade
    }
    study(){
        console.log(`${this.grade}, sedang belajar.`)
    }
  }

  const study1 = new student("aufa", 17, "SMK")
  study1.study();