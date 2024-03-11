import { useRecoilValue } from "recoil";
import { toDoList } from "../atoms";
import ToDo from "./ToDo";

function ToDoBox() {
  const toDos = useRecoilValue(toDoList);
  console.log(toDos);

  return (
    <div className="bg-green-300 border-2 border-black w-60">
      {toDos.map((toDo) => (
        <ToDo
          key={toDo.id}
          id={toDo.id}
          text={toDo.text}
          category={toDo.category}
        />
      ))}
    </div>
  );
}

export default ToDoBox;
