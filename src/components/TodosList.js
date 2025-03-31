import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../todoContext";

const TodosList = () => {
  const {state} = useContext(TodosContext)
    return (
      <div>
        {state?.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    );
  
}

export default TodosList;
