import TodoData from "./todo.data";
import TodoInput from "./todo.input";

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

  return (
    <div>
      <div>List:</div>
      <TodoInput />
      <br />
      <TodoData todos={todos} owner={"VietVH18"} />
    </div>
  );
};

export default TodoList;
