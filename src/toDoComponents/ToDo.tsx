import { IToDo } from "../atoms";
import CategoryBtn from "./CategoryBtn";

function ToDo({ id, text, category }: IToDo) {
  return (
    <div className="flex justify-between">
      <div key={id} className="text-center border border-black border-1">
        {text}
      </div>
      <div className="space-x-2">
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
      </div>
    </div>
  );
}

export default ToDo;
