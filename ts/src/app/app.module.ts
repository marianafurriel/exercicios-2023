import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

@NgModule({
  declarations: [AppComponent, BarraLateralComponent, BarraSuperiorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
