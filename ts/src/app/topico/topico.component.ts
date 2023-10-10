import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.scss'],
})
export class TopicoComponent {
  @Output() index!: string;
  @Output() public comentarios = [
    {
      nome: 'Adriano da Silva',
      cargo: 'Autor',
      comentario:
        'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
    },
    {
      nome: 'Carlos Henrique Santos',
      cargo: false,
      comentario: `Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.
      
      Obrigada pela resposta, muito interessante o seu trabalho!`,
    },
    {
      nome: 'Carmila Ferreira Andrade',
      cargo: 'Coautor',
      comentario: `Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.

      Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
    },
    {
      nome: 'Ana Carolina',
      cargo: 'Coautor',
      comentario:
        'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
    },
  ];

  divVisivel = false;
  clickTopico() {
    console.log(this.divVisivel);
    this.divVisivel = !this.divVisivel;
    console.log(this.divVisivel);
  }
}
