import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ResumoComponent } from './resumo/resumo.component';
import { DiscussoesComponent } from './discussoes/discussoes.component';
import { TopicoComponent } from './topico/topico.component';
import { PrincipalComponent } from './conteudo-principal/principal.component';
import { AsideComponent } from './aside/aside.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CriarComponent } from './criar-topico/criarTopico.component';
import { EnviadoComponent } from './topico-enviado/enviado.component';
import { FeedbackComponent } from './topico-feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    BarraSuperiorComponent,
    ResumoComponent,
    DiscussoesComponent,
    TopicoComponent,
    PrincipalComponent,
    AsideComponent,
    RodapeComponent,
    FormularioComponent,
    CriarComponent,
    EnviadoComponent,
    FeedbackComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
