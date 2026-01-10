import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZardCardComponent } from '@zard-ui/components/card/card.component';

@Component({
  selector: 'app-card-navegacao',
  imports: [
    RouterLink,
    ZardCardComponent,
  ],
  templateUrl: './card-navegacao.component.html',
  styleUrl: './card-navegacao.component.css',
})
export class CardNavegacaoComponent {
  public rotaNavegacao = input.required<string>();
  public tituloCard = input.required<string>();
  public descricaoCard = input.required<string>();
}
