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