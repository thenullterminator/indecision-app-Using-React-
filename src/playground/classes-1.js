
class Person{

    constructor(name="Anonymous",age=0)
    {
        this.name=name;
        this.age=age;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }

}

class Traveller extends Person{

    constructor(name,age,home)
    {
        super(name,age);
        this.home=home;
    }

    getDescription(){
        let des=super.getDescription();

        if(this.home)
        {
            des+=` And lives in ${this.home}`;
        }

        return des;
    }
}

const me=new Traveller('Dj',19,'India');
console.log(me.getDescription());