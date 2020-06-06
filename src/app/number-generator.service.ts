import { Injectable } from '@angular/core';
import { MahjongNumber } from './mahjong-number';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService {

  constructor() { }

  private primeRange(): number[] {
    const array = [2, 3];
    for (let i = 5; i <= 50; i += 2) {
        if (array.every(p => i % p)) {
            array.push(i);
        }
    }
    return array;
  }

  private shuffle(array: number[]): number[] {
    return array.sort(() => Math.random() - 0.5);
  }

  generate(): MahjongNumber[] {
    const numbers = this.primeRange().concat(this.primeRange());
    return this.shuffle(numbers)
      .map((n, index) => ({index, value: n, visible: true, matched: false}));
  }


}
