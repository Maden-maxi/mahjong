import { Component, OnInit } from '@angular/core';
import { MahjongNumber } from '../mahjong-number';
import { NumberGeneratorService } from '../number-generator.service';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-mahjong-grid',
  templateUrl: './mahjong-grid.component.html',
  styleUrls: ['./mahjong-grid.component.scss'],
})
export class MahjongGridComponent implements OnInit {
  cards: MahjongNumber[] = this.numberGenerator.generate();
  lastOpened: MahjongNumber = null;
  mistakes = 0;
  private mismatches = new BehaviorSubject<any>([]);
  mismatches$ = this.mismatches.asObservable().pipe(delay(1000));
  get matchedCards(): MahjongNumber[] {
    return this.cards.filter(card => card.matched);
  }
  get openedCard(): MahjongNumber {
    return this.cards.find(card => card.visible);
  }
  constructor(private numberGenerator: NumberGeneratorService) { }

  ngOnInit(): void {
    this.hideCardNumbers();
    this.mismatches$.subscribe((mismatches) => {
      this.cards = this.cards.map(card => !card.matched && mismatches.includes(card.index) ? {...card, visible: false} : card);
    });
  }

  hideCardNumbers() {
    setTimeout(() => {
      this.cards = this.cards.map(card => ({...card, visible: false}));
    }, 3000);
  }

  restart() {
    this.cards = this.numberGenerator.generate();
    this.mistakes = 0;
    this.hideCardNumbers();
  }

  isCardVisible(clickedCard: MahjongNumber) {
    return this.cards.find(card => card.index === clickedCard.index).visible;
  }

  showClickedCard(clickedCard: MahjongNumber) {
    this.cards = this.cards.map((card) => card.index === clickedCard.index ? {...card, visible: true} : card);
  }

  hideMismatchedCards(lastOpened, lastMismatched) {
    this.mismatches.next([lastOpened.index, lastMismatched.index]);
    this.mistakes = this.mistakes + 1;
  }

  matchCards(matchedIndexes: number[]) {
    this.cards = this.cards.map(card => matchedIndexes.includes(card.index) ? {...card, matched: true} : card);
  }

  openNumber(mahjongNumber: MahjongNumber) {
    if (!mahjongNumber.matched) {
      if (!this.isCardVisible(mahjongNumber)) {
        this.showClickedCard(mahjongNumber);
        if (!this.lastOpened) {
          this.lastOpened = mahjongNumber;
        } else if (this.lastOpened.index !== mahjongNumber.index) {
          if (this.lastOpened.value === mahjongNumber.value) {
            const matchedIndexes = [this.lastOpened.index, mahjongNumber.index];
            this.matchCards(matchedIndexes);
          } else {
            this.hideMismatchedCards(this.lastOpened, mahjongNumber);
          }
          this.lastOpened = null;
        }
      }
    }
  }

}
