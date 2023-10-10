import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.scss'],
})
export class TopicoComponent {
  @Output() index!: string;
  @Output() public comentarios = [
    { nome: 'Adriano da Silva', cargo: 'Autor' },
    { nome: 'Carlos Henrique Santos', cargo: false },
    { nome: 'Carmila Ferreira Andrade', cargo: 'Coautor' },
    { nome: 'Ana Carolina', cargo: 'Coautor' },
  ];

  divVisivel = false;
  clickTopico() {
    console.log(this.divVisivel);
    this.divVisivel = !this.divVisivel;
    console.log(this.divVisivel);
  }
}
