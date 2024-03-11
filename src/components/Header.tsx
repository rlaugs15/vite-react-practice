import { Link } from "react-router-dom"
import DarkBtn from "./DarkBtn"
import Button from "./Button"

function Header() {
    return (
        <div className="p-1 space-x-5 drop-shadow-md bg-slate-100">
            <DarkBtn />
            <Link to='todoList'>
                <Button bgColor="bg-green-500" text="toDo 리스트" />
            </Link>
        </div>
    )
}

export default Header