import { Component } from '@angular/core';

@Component({
  selector: 'app-criar',
  templateUrl: './criarTopico.component.html',
  styleUrls: ['./criarTopico.scss'],
})
export class CriarComponent {
  criarTopico() {
    const componentCriar = document.querySelector('app-criar') as HTMLElement;
    const componentFormulario = document.querySelector(
      'app-formulario'
    ) as HTMLElement;
    if (componentFormulario != undefined) {
      componentFormulario.style.display = 'block';
      componentCriar.style.display = 'none';
    }
  }
}
