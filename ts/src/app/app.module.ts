import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ResumoComponent } from './resumo/resumo.component';
import { DiscussoesComponent } from './discussoes/discussoes.component';
import { TopicoComponent } from './topico/topico.component';
import { PrincipalComponent } from './conteudo-principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    BarraSuperiorComponent,
    ResumoComponent,
    DiscussoesComponent,
    TopicoComponent,
    PrincipalComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
