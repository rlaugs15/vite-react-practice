import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoList, toDoSelector } from "../atoms";
import ToDoBox from "../toDoComponents/ToDoBox";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const setToDos = useSetRecoilState(toDoList);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onToDoValue = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      ...oldToDos,
      { id: Date.now(), category: "TODO", text: toDo },
    ]);
    setValue("toDo", "");
  };
  return (
    <div className="flex flex-col items-center w-screen mx-10 space-y-8">
      <form onSubmit={handleSubmit(onToDoValue)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          required
          className="border-2 border-black rounded-sm"
        />
        <button className="p-1 ml-2 text-xs border-2 border-black rounded-sm">
          toDo생성
        </button>
      </form>
      <main className="flex justify-center w-full mt-7 space-x-7">
        <ToDoBox category="TODO" />
        <ToDoBox category="DOING" />
        <ToDoBox category="DONE" />
      </main>
    </div>
  );
}

export default ToDoList;
