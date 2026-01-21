import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class LogoComponent {
  @Input() tamanhoIcone: string = '40px';
  @Input() tamanhoTexto: string = '1.25rem';
  @Input() comLink: boolean = true;
}
