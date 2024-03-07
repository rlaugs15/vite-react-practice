import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { ICoinDetail, fetchCoin } from "../api"

function Coin() {
    const {coinId} = useParams<{coinId: string}>()
    const {data:coinData, isLoading} = useQuery<ICoinDetail>(['coin'], ()=>fetchCoin(coinId!))
    return (
        <div className="flex items-center justify-center">
            {isLoading ? <div className="font-semibold">로딩 중...</div> : (
                <div className="w-4/6 p-4 rounded-lg bg-slate-300 my-14">
                    <header className="py-3 text-5xl font-semibold text-center rounded-lg bg-slate-400">{coinData?.name}</header>
                    <main className="p-4">
                        <div className="text-xl">
                            <span className="text-2xl font-bold">설명:</span> {coinData?.description}</div>
                    </main>
                </div>
            )}
        </div>
    )
}

export default Coin