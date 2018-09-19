import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomecompComponent } from './homecomp/homecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomecompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: HomecompComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
