import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'persist-isDark-atom-key',
  storage: localStorage,
})

export const isDarkAtom = atom({
    key: 'isDark',
    default: false,
    effects_UNSTABLE: [persistAtom],
})