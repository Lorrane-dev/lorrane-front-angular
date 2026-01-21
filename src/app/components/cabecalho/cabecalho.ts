import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../marca/logo/logo';

interface LinkNavegacao {
  href: string;
  rotulo: string;
}

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class CabecalhoComponent implements OnInit {
  rolou: boolean = false;
  menuMobilAberto: boolean = false;

  linksNavegacao: LinkNavegacao[] = [
    { href: '#sobre', rotulo: 'Sobre' },
    { href: '#servicos', rotulo: 'Serviços' },
    { href: '#diferenciais', rotulo: 'Diferenciais' },
    // { href: '#portfolio', rotulo: 'Portfólio' },
    { href: '#contato', rotulo: 'Contato' },
  ];

  @HostListener('window:scroll')
  aoRolar() {
    this.rolou = window.scrollY > 50;
    if (this.menuMobilAberto) {
      this.menuMobilAberto = false;
    }
  }

  @HostListener('window:wheel')
  aoRolarMouse() {
    if (this.menuMobilAberto) {
      this.menuMobilAberto = false;
    }
  }

  @HostListener('window:touchmove')
  aoMoverTouch() {
    if (this.menuMobilAberto) {
      this.menuMobilAberto = false;
    }
  }

  @HostListener('window:resize')
  aoRedimensionar() {
    if (this.menuMobilAberto) {
      this.menuMobilAberto = false;
    }
  }

  @HostListener('window:keydown.escape')
  aoPressionarEsc() {
    this.fecharMenuMobile();
  }

  alternarMenuMobile() {
    this.menuMobilAberto = !this.menuMobilAberto;
  }

  fecharMenuMobile() {
    this.menuMobilAberto = false;
  }

  navegarPara(href: string) {
    this.fecharMenuMobile();

    const elemento = document.querySelector(href);
    if (elemento) {
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  ngOnInit() {
    this.aoRolar();
  }
}
