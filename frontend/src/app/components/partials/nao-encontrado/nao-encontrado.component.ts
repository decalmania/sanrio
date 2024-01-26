import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nao-encontrado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nao-encontrado.component.html',
  styleUrl: './nao-encontrado.component.css'
})
export class NaoEncontradoComponent {


  @Input()
  visivel = false
  @Input()
  mensagemNaoEncontrado = "Nada encontrado!";
  @Input()
  textoResetarLink = "Resetar";
  @Input()
  rotaResetarLink = '/';
}
