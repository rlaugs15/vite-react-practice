import { useRecoilState, useSetRecoilState } from "recoil";
import { toDoList } from "../atoms";

type categoryList = "TODO" | "DOING" | "DONE";

interface CategoryBtn {
  id: number;
  category: categoryList;
  categoryName: categoryList;
  text: string;
}

function CategoryBtn({ id, category, categoryName, text }: CategoryBtn) {
  const [categorylist, setCategory] = useRecoilState(toDoList);
  const handleList = (categoryName: categoryList) => {
    setCategory((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      //카테고리 작업 마저 하기
      return [...oldToDos.slice(0, targetIndex)];

      return oldToDos;
    });
  };
  return (
    <>
      {category !== categoryName ? (
        <button
          onClick={() => handleList(categoryName)}
          className="p-1 bg-orange-400 border border-black rounded-md"
        >
          {categoryName}
        </button>
      ) : null}
    </>
  );
}

export default CategoryBtn;
