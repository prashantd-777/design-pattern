
const Person = {
    name: "John",
    start: function () {
        console.log(`${this.name} application is started`);
    },
    update: function () {
        console.log(`${this.name} application is updated`)
    }
}

Object.freeze(Person);


Person.start()