import { useState } from "react";
import { toast } from "react-toastify";
import { FaFileMedical } from "react-icons/fa6";

const FormTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  console.log(title);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.info(`Iltimos ,nimadir yozing`);
      return;
    }
    addTodo(
      {
        id: Math.random(),
        title: title,
        completed: false,
      },
      setTitle("")
    );
  };

  return (
    <form
      className=" mx-auto w-full flex justify-center items-center gap-3 m-10"
      onSubmit={handleSubmit}
    >
      <label>
        <input
          value={title}
          type="text"
          className="input input-bordered input-primary w-full max-w-xs border-2 rounded-3xl"
          id="input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button className="btn btn-outline btn-info border-2 rounded-3xl">
        <FaFileMedical />
      </button>
    </form>
  );
};

export default FormTodo;
