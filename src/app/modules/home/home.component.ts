import { Component } from '@angular/core';
import { CardNavegacaoComponent } from '@shared/components/card-navegacao/card-navegacao.component';
import { CardNavegacao } from '@shared/components/card-navegacao/models/card-navegacao.interface';
import { generateId } from '@zard-ui/utils/merge-classes';

@Component({
  selector: 'app-home',
  imports: [
    CardNavegacaoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public cardsNavegacao: CardNavegacao[] = [
    {
      id: generateId('card'),
      rotaNavegacao: '/dashboard',
      tituloCard: 'Dashboard',
      descricaoCard: 'Acompanhe o movimento do dia e os principais indicadores.',
    },
    {
      id: generateId('card'),
      rotaNavegacao: '/filas',
      tituloCard: 'Filas',
      descricaoCard: 'Crie e organize filas de atendimento e prioridades.',
    },
    {
      id: generateId('card'),
      rotaNavegacao: '/guiches-atendentes',
      tituloCard: 'Guichês e Atendentes',
      descricaoCard: 'Gerencie guichês, atendentes e seus vínculos.',
    },
    {
      id: generateId('card'),
      rotaNavegacao: '/atendimento',
      tituloCard: 'Atendimento',
      descricaoCard: 'Chame senhas e registre atendimentos com agilidade.',
    },
    {
      id: generateId('card'),
      rotaNavegacao: '/painel-senhas',
      tituloCard: 'Painel de Senhas',
      descricaoCard: 'Exiba chamadas e próximas senhas em tempo real.',
    },
    {
      id: generateId('card'),
      rotaNavegacao: '/agendamento-online',
      tituloCard: 'Agendamento Online',
      descricaoCard: 'Permita que o paciente agende e acompanhe o horário.',
    },
    {
      id: generateId('card'),
      rotaNavegacao: '/usuarios',
      tituloCard: 'Usuários e Perfis',
      descricaoCard: 'Controle acessos, perfis e permissões do sistema.',
    },
    {
      id: generateId('card'),
      rotaNavegacao: '/relatorios',
      tituloCard: 'Relatórios',
      descricaoCard: 'Consulte dados e resultados para apoiar decisões.',
    },
  ];
}
