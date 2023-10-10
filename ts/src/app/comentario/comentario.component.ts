import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
})
export class ComentarioComponent {
  @Input() nome!: string;
  @Input() cargo!: string | boolean;
  @Input() comentario!: string;
  // public comentarios = [
  //   { nome: 'Adriano da Silva', cargo: 'Autor' },
  //   { nome: 'Carlos Henrique Santos', cargo: false },
  //   { nome: 'Carmila Ferreira Andrade', cargo: 'Coautor' },
  //   { nome: 'Ana Carolina', cargo: 'Coautor' },
  // ];
}
