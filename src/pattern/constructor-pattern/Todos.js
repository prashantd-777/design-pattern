
// class Todos {
//     todos = [];
//     constructor() {

//     }

//     getTodos() {
//         return this.todos;
//     }

//     addTodo(todo) {
//         this.todos.push(todo)
//     }
// }

function Todos() {
    this.todos = [];

    this.getTodos = function () {
        return this.todos;
    }

    this.addTodo = function(todoText) {
        this.todos.push(todoText)
    }

}

export default Todos;