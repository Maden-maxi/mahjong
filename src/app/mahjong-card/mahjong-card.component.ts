import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fade, matched } from '../animations';

@Component({
  selector: 'app-mahjong-card',
  templateUrl: './mahjong-card.component.html',
  styleUrls: ['./mahjong-card.component.scss'],
  animations: [fade, matched]
})
export class MahjongCardComponent implements OnInit {
  @Input() number: number;
  @Input() isNumberVisible = false;
  @Input() isActive = false;
  @Output() flip = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onFlip() {
    this.flip.emit({
      number: this.number,
      isActive: this.isActive,
      isNumberVisible: this.isNumberVisible,
    });
  }
}
