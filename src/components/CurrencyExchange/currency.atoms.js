import { atom, selector } from 'recoil';

const exchangeRate = 0.9;

export const usdAtom = atom({
  key: 'usd',
  default: 1,
});

export const eurSelector = selector({
  key: 'eur',
  get: ({ get }) => {
    let usd = get(usdAtom);
    const isCommisionEnabled = get(isComissionEnabledAtom);

    if (isCommisionEnabled) {
      const commission = get(comissionAtom);
      usd = removeCommission(usd, commission);
    }

    return (usd * exchangeRate).toFixed(2);
  },
  set: ({ set, get }, newValue) => {
    let newUsdValue = newValue / exchangeRate;

    const isCommisionEnabled = get(isComissionEnabledAtom);

    if (isCommisionEnabled) {
      const commission = get(comissionAtom);
      newUsdValue = addCommission(newUsdValue, commission);
    }

    set(usdAtom, newUsdValue.toFixed(2));
  },
});

export const isComissionEnabledAtom = atom({
  key: 'isComissionEnabled',
  default: false,
});

export const comissionAtom = atom({
  key: 'comission',
  default: 5,
});

const addCommission = (amount, commission) => {
  return amount / (1 - commission / 100);
};

const removeCommission = (amount, commission) => {
  return amount * (1 - commission / 100);
};
