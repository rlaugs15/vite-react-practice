import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { ICoin, fetchCoins } from "../api"

function Coins() {
    const {data, isLoading} = useQuery<ICoin[]>(['allCoins'], fetchCoins)
    return (
        <div className="flex justify-center mt-7">
            {isLoading ? <div>데이터를 불러오는 중...</div> : (
                <div className="flex flex-col w-4/6 p-3 space-y-4 rounded-lg bg-slate-300 dark:bg-slate-600">
                    {data?.slice(0, 100).map((coin) => (
                            <Link to={coin.id} key={coin.id} state={{coinName: coin.name}}>
                                <div className="flex items-center p-3 rounded-lg bg-slate-400 dark:bg-slate-800">
                                    <img
                                        className="w-16 h-16 mr-5 bg-cover"
                                        src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                    />
                                    <div className="text-3xl font-semibold">{coin.name}</div>
                                </div>
                            </Link>
                    ))}
                </div>
        )}
        </div>
    )
}

export default Coins