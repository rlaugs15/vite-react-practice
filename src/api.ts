export interface ICoin {
    id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface Tag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

export interface ICoinDetail {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
    tags: Tag[];
    description: string
    started_at: string
}

export function fetchCoins() {
    return fetch('https://api.coinpaprika.com/v1/coins').then((res) => res.json())
}

export function fetchCoin(coinId: string) {
    return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((res) => res.json())
}
export interface IHistorical {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

//차트용
export function fetchCoinHistory(coinId: string) {
  //const endDate = Math.floor(Date.now() / 1000);
  //const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
    //`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}`
  ).then((res) => res.json());
}