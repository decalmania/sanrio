import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent {
  termoPesquisado = '';
  constructor(rotaAtiva:ActivatedRoute,private roteador:Router) {
    rotaAtiva.params.subscribe((params) => {
      if(params['termoPesquisado']) this.termoPesquisado = params['termoPesquisado'];
    });
  }

  aoCLicarPesquisar(termo:string): void {
    if(termo)
    this.roteador.navigateByUrl('/pesquisa/' + termo);
    if(!termo)
    this.roteador.navigateByUrl('');

  }
}
