import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  constructor(private usuarioService: UsuarioService,) { }

  AoClicarFazerLogout() {
    this.usuarioService.logout();
  }

}
