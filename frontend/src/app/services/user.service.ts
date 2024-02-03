import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../shared/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>(new Usuario());
  public usuarioObservable:Observable<Usuario>;

  constructor() {
    this.usuarioObservable = this.usuarioSubject.asObservable();
  }

}
