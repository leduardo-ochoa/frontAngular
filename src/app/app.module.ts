import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DivComponent } from './div/div.component';

import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    DivComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
