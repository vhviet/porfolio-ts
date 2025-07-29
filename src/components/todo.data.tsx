interface IProps {
  todos: {
    id: number,
    title: string,
    isComplete: boolean
  }[];
  owner?: string;
  age?: number;
  isDeveloper?: boolean;
  deleteTodo: (id: number) => void;
}

const TodoData = (props: IProps) => {
  const { todos, deleteTodo } = props;
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div>
              {item.id} - {item.title}
              {"     "}
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoData