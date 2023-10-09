import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.scss'],
})
export class FormularioComponent {
  enviar(event: Event) {
    event.preventDefault();
    const componentEnviado = document.querySelector(
      'app-enviado'
    ) as HTMLElement;
    const componentFormulario = document.querySelector(
      'app-formulario'
    ) as HTMLElement;
    if (componentFormulario != undefined) {
      componentFormulario.style.display = 'none';
      componentEnviado.style.display = 'block';
    }
  }
}
