import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.scss'],
})
export class PainelComponent {
  @Input() titulo!: string;
}
