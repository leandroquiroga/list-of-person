class Person{
    constructor(name,lastName){
        this._name = name;
        this._lastName = lastName;
    }

    get name(){
        return this._name
    }

    set name(name){
        this._name = name;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(last){
        this._lastName = last;
    }
}

