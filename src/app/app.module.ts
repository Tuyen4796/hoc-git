import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TestconfigComponent } from './testconfig/testconfig.component';
=======
import { TestthoiComponent } from './testthoi/testthoi.component';
import { OzakiComponent } from './ozaki/ozaki.component';
>>>>>>> e7b334a21ab94d61568c5881af49cc38d907e336

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TestconfigComponent
=======
    TestthoiComponent,
    OzakiComponent
>>>>>>> e7b334a21ab94d61568c5881af49cc38d907e336
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
