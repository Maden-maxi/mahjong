import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahjongGridComponent } from './mahjong-grid.component';

describe('MahjongGridComponent', () => {
  let component: MahjongGridComponent;
  let fixture: ComponentFixture<MahjongGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahjongGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahjongGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
