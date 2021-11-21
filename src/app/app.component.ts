import { Component } from '@angular/core';
import { IUnit } from './../typings/interfaces';
import { EDenomination } from './../typings/enums';
import { getDenominationList } from '../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wei Convertooooor';
  denominationsInWei: IUnit[] = getDenominationList();
  displayUnits: IUnit[] = getDenominationList();
  amountToConvert = 1;
  showDenominations = true;
  selectedDenomination = EDenomination.Ether;

  constructor() {
    this.updateValues();
  }

  updateAmountAndDenomination(denomination: EDenomination, amount: number) {
    this.selectedDenomination = denomination;
    this.amountToConvert = amount;
    this.updateValues();
  }

  updateValues() {
    const amountToConvertInWei = this.toWei(this.selectedDenomination, this.amountToConvert);
    for (let i = 0; i < this.displayUnits.length; i++) {
      this.displayUnits[i].value = amountToConvertInWei.dividedBy(this.denominationsInWei[i].value);
    }
  }

  toWei(origDenomination: EDenomination, amount: number) {
    const origDenominationInWei = this.denominationsInWei.find(item => item.denomination === origDenomination).value;
    return origDenominationInWei.times(amount);
  }
}
