import { useQuery } from "react-query"
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { ICoinDetail, fetchCoin } from "../api"
import { useEffect } from "react";

function Coin() {
    const { coinId } = useParams<{ coinId: string }>()
    const location = useLocation()
    const navigate = useNavigate()
    
    const { data: coinData, isLoading } = useQuery<ICoinDetail>(['coin', coinId], () => fetchCoin(coinId!))
    useEffect(() => {
        if (!location?.state?.coinName) {
            if (location?.pathname === `/${coinId}/chart` || location?.pathname === `/${coinId}/price`) {
            return
            } else {
            navigate('/')
        }
        }
    }, [navigate, location])
    return (
        <div className="flex items-baseline justify-center h-screen">
            {isLoading ? <div className="font-semibold">로딩 중...</div> : (
                <div className="w-4/6 p-4 rounded-lg bg-slate-300 my-14">
                    <header className="py-3 text-5xl font-semibold text-center rounded-lg bg-slate-400">{location?.state?.coinName ?? coinData?.name}</header>
                    <main className="p-4">
                        <div className="text-x">
                            <span className="text-2xl font-bold">설명:</span> <br /> {coinData?.description}
                        </div>
                        <figure>
                            <div className="grid grid-cols-2 gap-3">
                                <Link to='chart'
                                    state={{coinId}}
                                    className="py-3 font-semibold text-center rounded-lg bg-slate-400 focus:ring-4 ring-slate-500">
                                    차트
                                </Link>
                                <Link to='price'
                                    state={{coinId}}
                                    className="py-3 font-semibold text-center rounded-lg bg-slate-400 focus:ring-4 ring-slate-500">
                                    가격
                                </Link>
                            </div>
                            <Outlet />
                        </figure>
                    </main>
                </div>
            )}
        </div>
    )
}

export default Coin