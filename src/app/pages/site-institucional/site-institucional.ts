import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho';
import { SecaoHomeComponent } from '../../components/institucional/secoes/home/secao-home';
import { SecaoSobreComponent } from '../../components/institucional/secoes/sobre/secao-sobre';
import { SecaoServicosComponent } from '../../components/institucional/secoes/servicos/secao-servicos';
import { SecaoDiferenciaisComponent } from '../../components/institucional/secoes/diferenciais/secao-diferenciais';
import { SecaoContatoComponent } from '../../components/institucional/secoes/contato/secao-contato';
import { RodapeComponent } from '../../components/rodape/rodape';
import { BotaoWhatsappComponent } from '../../components/botao-whatsapp/botao-whatsapp';
import { WhatsappLeadModalComponent } from '../../components/whatsapp-lead-modal/whatsapp-lead-modal';
import { WhatsappLeadPopupComponent } from '../../components/whatsapp-lead-popup/whatsapp-lead-popup';

@Component({
  selector: 'app-site-institucional',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    SecaoHomeComponent,
    SecaoSobreComponent,
    SecaoServicosComponent,
    SecaoDiferenciaisComponent,
    SecaoContatoComponent,
    RodapeComponent,
    BotaoWhatsappComponent,
    WhatsappLeadModalComponent,
    WhatsappLeadPopupComponent,
  ],
  templateUrl: './site-institucional.html',
  styleUrl: './site-institucional.css',
})
export class SiteInstitucionalComponent {}
