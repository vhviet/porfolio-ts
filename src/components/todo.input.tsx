interface IProps {
  name?: string;
}
const TodoInput = (props: IProps) => {
  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default TodoInput;
