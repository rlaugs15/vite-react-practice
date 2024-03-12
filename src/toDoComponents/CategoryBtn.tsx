import { useSetRecoilState } from "recoil";
import { toDoList } from "../atoms";

type categoryList = "TODO" | "DOING" | "DONE";

interface CategoryBtn {
  id: number;
  category: categoryList;
  categoryName: categoryList;
  text: string;
}

function CategoryBtn({ id, category, categoryName, text }: CategoryBtn) {
  const setCategory = useSetRecoilState(toDoList);
  const handleList = (categoryName: categoryList) => {
    setCategory((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        { id, category: categoryName, text },
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      {category !== categoryName ? (
        <button
          onClick={() => handleList(categoryName)}
          className="px-1 border-2 border-black rounded-md shadow-md"
        >
          {categoryName}
        </button>
      ) : null}
    </>
  );
}

export default CategoryBtn;
