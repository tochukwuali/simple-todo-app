import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { TodosProvider } from "../todoContext";

const TodoContainer = () => {

  return (
    <TodosProvider>
    <div className="container">
      <Header />
      <InputTodo />
      <TodosList />
    </div>
    </TodosProvider>
  );
}

export default TodoContainer;
