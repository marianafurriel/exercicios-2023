import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.scss'],
})
export class TopicoComponent {
  @Output() index!: string;
  @Output() public comentarios = [
    { nome: 'Adriano da Silva', cargo: 'Autor', comentario: 'Comentariooooo' },
    {
      nome: 'Carlos Henrique Santos',
      cargo: false,
      comentario: 'Comentariooooo',
    },
    {
      nome: 'Carmila Ferreira Andrade',
      cargo: 'Coautor',
      comentario: 'Comentariooooo',
    },
    { nome: 'Ana Carolina', cargo: 'Coautor', comentario: 'Comentariooooo' },
  ];

  divVisivel = false;
  clickTopico() {
    console.log(this.divVisivel);
    this.divVisivel = !this.divVisivel;
    console.log(this.divVisivel);
  }
}
