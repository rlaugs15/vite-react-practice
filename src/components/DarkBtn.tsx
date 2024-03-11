import { useSetRecoilState } from "recoil"
import { isDarkAtom } from "../thems/thems"

function DarkBtn() {
    const setIsDark = useSetRecoilState(isDarkAtom)
    const onDarkClick = () => {
        setIsDark((isDark: boolean) => !isDark)
    }
    return (
            <button onClick={onDarkClick} className="p-2 bg-blue-400 rounded-md">다크모드</button>
    )
}

export default DarkBtn