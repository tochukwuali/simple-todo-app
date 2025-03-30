import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
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
    setState((prev) => state.map((st) => (st.id === id ? {...st, comment: [...st.comment, comment]} : st)))
  }

  return (
    <div className="container">
      <Header />
      <InputTodo usersProps={users} addTodoProps={addTodoItem} />
      <TodosList
        todos={state}
        handleChangeProps={handleChange}
        deleteTodoProps={deleteTodo}
        addCommentsProps={addComments}
      />
    </div>
  );
}

export default TodoContainer;
