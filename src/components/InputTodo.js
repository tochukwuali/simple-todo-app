import React, { useState } from "react";

const InputTodo = ({ addTodoProps, usersProps }) => {

  const [state, setState] = useState({
    title: '',
    user: ''
  })

  const onChange = e => {
    setState({
      [e.target.name]: e.target.value
    });
  };

  const handleChangeOption = (e) => {
    setState((prev) => ({
      ...prev,
      user: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    addTodoProps(state.title, state.user);
    setState({
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={state.title}
        name="title"
        onChange={onChange}
      />
      <select id="users" name="users" value={state.user} onChange={handleChangeOption} className="users-list">
        <option value="" disabled>Select an option</option>
        {usersProps.map((user, i) => (
          <option key={i}>{user}</option>
        ))}
      </select>
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );

}
export default InputTodo;
