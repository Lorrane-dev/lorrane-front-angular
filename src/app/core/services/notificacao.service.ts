import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface DadosNotificacao {
  nome: string;
  email?: string;
  telefone: string;
  mensagem: string;
  origem?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {
  private readonly http = inject(HttpClient);
  private readonly lambdaUrl = 'https://rgy7ocyigeffm3rhijkjarywre0qwjfl.lambda-url.us-east-2.on.aws/';

  /**
   * Envia uma notificação de novo lead para o Lambda
   */
  async enviarNotificacaoLead(dados: DadosNotificacao): Promise<void> {
    const payload = {
      para: 'lorrane@lorrane.dev', // O Lambda já está configurado para o admin, mas enviamos no para/dados conforme o contrato esperado
      assunto: `Novo Lead: ${dados.nome}`,
      tipoTemplate: 'confirmacao-lead', // Usamos o confirmacao-lead para disparar o fluxo completo no Lambda
      dados: {
        nome: dados.nome,
        email: dados.email || 'Não informado',
        telefone: dados.telefone,
        mensagem: dados.mensagem,
        origem: dados.origem || 'Site Institucional',
      },
    };

    try {
      await firstValueFrom(this.http.post(this.lambdaUrl, payload));
      console.log('Notificação enviada com sucesso para o Lambda');
    } catch (error) {
      console.error('Erro ao enviar notificação para o Lambda:', error);
      // Não lançamos o erro para não quebrar o fluxo do usuário (WhatsApp ainda deve abrir)
    }
  }
}
