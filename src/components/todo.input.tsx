import React, { useState } from "react";
import { ITodo } from "./todo.list";

interface IProps {
  name?: string;
  addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
  const [todo, setTodo] = useState<string>("");

  const { addNewTodo } = props;
   
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  function randomInteger(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClickAdd = () => {
    if (!todo) {
      alert("Name of todo cannot be empty!");
      return;
    }
    addNewTodo({
      id: randomInteger(1, 100000),
      title: todo,
      isComplete: false,
    });
    setTodo("");
  }

  return (
    <div>
      <input type="text" value={todo} onChange={handleTextChange}/>
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
