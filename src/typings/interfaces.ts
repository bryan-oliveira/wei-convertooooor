import { EDenomination } from './enums';
import BigNumber from 'bignumber.js';

export interface IUnit {
  denomination: EDenomination;
  value: BigNumber;
}
