import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.scss'],
})
export class TopicoComponent {
  @Output() index!: string;
  clicado = false;
  expandeTopico(){

  }
}
