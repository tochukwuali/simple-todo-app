import React, { useContext, useState } from "react";
import { TodosContext } from "../todoContext";

const TodoItem = ({todo}) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { handleChange, deleteTodo, addComments } = useContext(TodosContext)
 
  const { completed, id, title, assignedUsers, comment } = todo;

  const [commentText, setCommentText] = useState('')
  const [openCommentInput, setOpenCommentInput] = useState(false)

  const handleAddComment = () => {
    addComments(id, commentText);
    setCommentText('')
  }

  return (
    <li>
      <div className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChange(id)}
        />

        <button onClick={() => deleteTodo(id)}>Delete</button>
        <button className="comment-btn" onClick={() => setOpenCommentInput(!openCommentInput)}>{openCommentInput === true ? 'Close' : 'Add Comment' }</button>
        <span style={completed ? completedStyle : null}>{title}</span>
        {assignedUsers && <span className="user-item" >{assignedUsers}</span>}
      </div>
      <div>
        {openCommentInput ?
          <div>
            <input type="text" className="comment-input" name="commentText" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
            <button className="add-comment-btn" onClick={handleAddComment}>Add Comment</button>
            {
              comment && <div>
                {comment.map((com, i) => (
                  <div className="comment-container" key={i}>
                    <span className="comment-text">{com}</span>
                  </div>

                ))}
              </div>
            }
          </div>
          : null}
      </div>

    </li>
  );
}

export default TodoItem;
