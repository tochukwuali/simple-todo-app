import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const users = ['Thomas', 'Adam', 'Tochukwu']
const todos = [
    {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
        assignedUsers: "",
        comment: []
    },
    {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
        assignedUsers: "",
        comment: []
    },
    {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
        assignedUsers: "",
        comment: []
    },
]

export const TodosContext = createContext(todos)

export const TodosProvider = ({ children }) => {
   
    const [state, setState] = useState(todos)

    const handleChange = (id) => {
        setState(state.map((todo) => todo.id === id ? { ...todo, completed: todo.completed = !todo.completed } : todo));
    };

    const deleteTodo = (id) => {
        setState(state.filter((todo) => {
            return todo.id !== id;
        }),
        );
    };

    const addTodoItem = (title, user) => {
        const newTodo = {
            // id: uuid.v4(),
            id: uuidv4(),
            title: title,
            completed: false,
            assignedUsers: user
        };
        setState((prev) => [...prev, newTodo],
        );
    };

    const addComments = (id, comment) => {
        setState((prev) => state.map((st) => (st.id === id ? { ...st, comment: [...st.comment, comment] } : st)))
    }
    return (
        <TodosContext value={{ users, state, handleChange, addTodoItem, deleteTodo, addComments }}>
            {children}
        </TodosContext>
    )
}
