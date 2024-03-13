import { Link } from "react-router-dom";
import DarkBtn from "./DarkBtn";
import Button from "./Button";

function Header() {
  return (
    <div className="p-1 space-x-5 drop-shadow-md bg-slate-100">
      <DarkBtn />
      <Link to="todoList">
        <Button bgColor="bg-green-500" text="toDo 리스트" />
      </Link>
      <Link to="dnd">
        <Button bgColor="bg-blue-400" text="DnD" />
      </Link>
      <Link to="ani">
        <Button bgColor="bg-red-400" text="Ani" />
      </Link>
    </div>
  );
}

export default Header;
