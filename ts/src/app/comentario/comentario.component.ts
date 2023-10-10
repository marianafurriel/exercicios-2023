import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
})
export class ComentarioComponent {
  @Input() index!: string;
  public comentarios = [
    { nome: 'Adriano da Silva', cargo: 'Autor' },
    { nome: 'Carlos Henrique Santos', cargo: 'op' },
    { nome: 'Carmila Ferreira Andrade', cargo: 'Coautor' },
  ];
}
