import { useNavigate } from "react-router-dom"

function Coins() {
    const navigate = useNavigate()
    const onCoinClick = () => {
        navigate('1')
    }
    return (
        <>
        <button onClick={onCoinClick}>코인으로 이동</button>
        <div className="dark:text-red-300">Coins</div>
        </>
    )
}

export default Coins