import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  category: "TODO" | "DOING" | "DONE";
  text: string;
}

export const toDoList = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoList);
    return [
      toDos.filter((toDo) => toDo.category === "TODO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});

export const movieScroll = atom({
  key: "movieScroll",
  default: false,
});
