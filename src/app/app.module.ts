import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MahjongGridComponent } from './mahjong-grid/mahjong-grid.component';
import { MahjongCardComponent } from './mahjong-card/mahjong-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MahjongGridComponent,
    MahjongCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
