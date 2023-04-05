class Staff {
    _name: string;
    _email: string;
    _age: number;

    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(email: string) {
        this._email = email;
    }

    getAge(): number {
        return this._age;
    }

    setAge(age: number) {
        this._age = age;
    }
}

let staff = new Staff('Staff 1', 'staff@gmail.com', 20);

console.log(staff.getName());

staff.setName('Staff 2');
console.log(staff.getName());