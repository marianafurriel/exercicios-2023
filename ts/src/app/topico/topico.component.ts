import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.scss'],
})
export class TopicoComponent {
  @Output() index!: string;
  divVisivel = false;
  clickTopico() {
    console.log(this.divVisivel);
    this.divVisivel = !this.divVisivel;
    console.log(this.divVisivel);
  }
}
