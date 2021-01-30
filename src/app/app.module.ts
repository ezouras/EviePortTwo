import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PfolioComponent } from './pfolio/pfolio.component';
import { ByebyeComponent } from './byebye/byebye.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PfolioComponent,
    ByebyeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
