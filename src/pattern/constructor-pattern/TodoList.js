import { useState } from "react"
import Todos from "./Todos"


export default function TodoList() {
    const [store] = useState(new Todos())
    const [list, setList] = useState([...store.getTodos()])

    function handleClick() {
        store.addTodo(`Test todo ${(Math.random() * 30).toFixed()}`);
        setList([...store.getTodos()])
    }

    console.log("list", list)

    return (
        <div>
            <h4>Todo List</h4>
            <button onClick={handleClick}>
                Add Todos
            </button>
            <ul>
                {list.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
         
            </ul>
        </div>
    )
}