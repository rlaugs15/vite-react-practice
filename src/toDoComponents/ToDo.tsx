import { useSetRecoilState } from "recoil";
import { IToDo, toDoList } from "../atoms";
import CategoryBtn from "./CategoryBtn";

function ToDo({ id, text, category }: IToDo) {
  const setToDoList = useSetRecoilState(toDoList);
  const ondeleteClick = () => {
    setToDoList((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <div className="grid w-full grid-cols-3">
      <div className="col-span-2 text-center">{text}</div>
      <div className="flex p-1 mr-3 space-x-2">
        <CategoryBtn
          id={id}
          category={category}
          categoryName="TODO"
          text={text}
        />
        <CategoryBtn
          id={id}
          category={category}
          categoryName="DOING"
          text={text}
        />
        <CategoryBtn
          id={id}
          category={category}
          categoryName="DONE"
          text={text}
        />
        {category === "DONE" ? (
          <button onClick={ondeleteClick}>x</button>
        ) : null}
      </div>
    </div>
  );
}

export default ToDo;
