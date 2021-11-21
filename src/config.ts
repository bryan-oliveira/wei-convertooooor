import BigNumber from 'bignumber.js';
import { EDenomination } from './typings/enums';
import { IUnit } from './typings/interfaces';

BigNumber.config({ EXPONENTIAL_AT: 30 });

export const Denominations: IUnit[] = [
  { denomination: EDenomination.Wei, value: new BigNumber(1) },
  { denomination: EDenomination.Kwei, value: new BigNumber(10 ** 3) },
  { denomination: EDenomination.Mwei, value: new BigNumber(10 ** 6) },
  { denomination: EDenomination.Gwei, value: new BigNumber(10 ** 9) },
  { denomination: EDenomination.microether, value: new BigNumber(10 ** 12) },
  { denomination: EDenomination.milliether, value: new BigNumber(10 ** 15) },
  { denomination: EDenomination.Ether, value: new BigNumber(10 ** 18) },
];

export function getDenominationList(): IUnit[] {
  return Denominations.map(item => ({...item}));
}
