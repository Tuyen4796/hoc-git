import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestthoiComponent } from './testthoi/testthoi.component';
import { OzakiComponent } from './ozaki/ozaki.component';

@NgModule({
  declarations: [
    AppComponent,
    TestthoiComponent,
    OzakiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
