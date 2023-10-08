import { Component } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.scss'],
})
export class ResumoComponent {
  verMais() {
    const mais = document.getElementById('mais');
    const verMais = document.getElementById('ver-mais');
    const verMenos = document.getElementById('ver-menos');

    if (mais != undefined) {
      mais.style.display = 'inline';
    }
    if (verMais != undefined) {
      verMais.style.display = 'none';
    }
    if (verMenos != undefined) {
      verMenos.style.display = 'inline';
    }
  }
  verMenos() {
    const mais = document.getElementById('mais');
    const verMais = document.getElementById('ver-mais');
    const verMenos = document.getElementById('ver-menos');
    if (mais != undefined) {
      mais.style.display = 'none';
    }
    if (verMais != undefined) {
      verMais.style.display = 'inline';
    }
    if (verMenos != undefined) {
      verMenos.style.display = 'none';
    }
  }
}
