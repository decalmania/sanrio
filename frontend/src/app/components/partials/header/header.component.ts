import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../shared/models/Usuario';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule]
})
export class HeaderComponent{

  constructor(private usuarioService: UsuarioService,) {
  }

  logout() {
    this.usuarioService.logout();
  }

}
