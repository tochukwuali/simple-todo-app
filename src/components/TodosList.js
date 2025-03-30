import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({handleChangeProps, deleteTodoProps, addCommentsProps, todos}) => {
    return (
      <div>
        {todos?.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            addCommentProps={addCommentsProps}
          />
        ))}
      </div>
    );
  
}

export default TodosList;
