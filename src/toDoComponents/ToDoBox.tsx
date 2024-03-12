import { useRecoilValue } from "recoil";
import { toDoList } from "../atoms";
import ToDo from "./ToDo";

interface ToDoBoxProps {
  category: "TODO" | "DOING" | "DONE";
}

function ToDoBox({ category }: ToDoBoxProps) {
  const toDos = useRecoilValue(toDoList);
  return (
    <div className="p-5 border-black rounded-md shadow-xl w-96">
      {toDos
        .filter((toDo) => toDo.category === category)
        .map((toDo) => (
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
