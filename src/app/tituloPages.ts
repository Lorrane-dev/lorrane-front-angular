import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class TituloPages {
  constructor(private readonly servicoTitulo: Title) {}

  updateTitle(estadoRota: RouterStateSnapshot): void {
    const tituloDaRota = this.buildTitle ? this.buildTitle(estadoRota) : '';
    const sufixo = 'Lorrane.dev';
    const tituloFinal = tituloDaRota ? `${tituloDaRota} - ${sufixo}` : sufixo;
    this.servicoTitulo.setTitle(tituloFinal);
  }

  buildTitle?(estadoRota: RouterStateSnapshot): string;
}
