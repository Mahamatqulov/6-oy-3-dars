import { MdDelete } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";
import { FaFileCircleXmark } from "react-icons/fa6";
const TodoItem = ({ todo, setTodos }) => {
  const changeState = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };

  return (
    <div className="flex justify-center items-center  m-3">
      <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
        <div className="gap-32 flex justify-between items-center border-2 border-blue-400  rounded-3xl ">
          <h3 className="fond-bold text-2xl pl-5">{todo.title}</h3>

          <div className="flex justify-end gap-2 p-3">
            {!todo.completed && (
              <button
                className="rounded-2xl"
                onClick={() => changeState(todo.id)}
              >
                <FaFileCircleCheck />
              </button>
            )}
            {todo.completed && (
              <button
                className="rounded-2xl"
                onClick={() => changeState(todo.id)}
              >
                <FaFileCircleXmark />
              </button>
            )}

            <button className="rounded-2xl" onClick={() => deleteTodo(todo.id)}>
              <MdDelete />
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
