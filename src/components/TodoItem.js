import React, { useState } from "react";

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps, addCommentProps }) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { completed, id, title, assignedUsers, comment } = todo;

  const [commentText, setCommentText] = useState('')
  const [openCommentInput, setOpenCommentInput] = useState(false)

  const handleAddComment = () => {
    addCommentProps(id, commentText);
    setCommentText('')
  }

  return (
    <li>
      <div className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />

        <button onClick={() => deleteTodoProps(id)}>Delete</button>
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
