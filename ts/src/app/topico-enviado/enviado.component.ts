import { Component } from '@angular/core';

@Component({
  selector: 'app-enviado',
  templateUrl: './enviado.component.html',
  styleUrls: ['./enviado.scss'],
})
export class EnviadoComponent {
  criarTopico() {
    const componentEnviado = document.querySelector(
      'app-enviado'
    ) as HTMLElement;
    const componentFormulario = document.querySelector(
      'app-formulario'
    ) as HTMLElement;
    if (componentFormulario != undefined) {
      componentFormulario.style.display = 'block';
      componentEnviado.style.display = 'none';
    }
  }
}
