import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

export interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: "Learn React TypeScript",
      isComplete: false,
    },
    {
      id: 2,
      title: "Learn NextJS",
      isComplete: true,
    },
    {
      id: 3,
      title: "Read JavaScript documentation",
      isComplete: false,
    },
    {
      id: 4,
      title: "Complete coding challenge",
      isComplete: true,
    },
  ];

  const [listTodo, setListTodo] = useState<ITodo[]>(todos);

  const addNewTodo = (todo: ITodo) => {
    setListTodo([...listTodo, todo]);
  };

   const deleteTodo = (id: number) => {
     const newTodo = listTodo.filter((item) => item.id !== id);
     setListTodo(newTodo);
   };

  return (
    <div>
      <div>List:</div>
      <TodoInput addNewTodo={addNewTodo} />
      <br />
      <TodoData todos={listTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoList;
