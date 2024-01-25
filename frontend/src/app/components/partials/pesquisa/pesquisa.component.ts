import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent {
  termoPesquisado = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['termoPesquisado']) this.termoPesquisado = params['termoPesquisado'];
    });
  }

  ngOnInit(): void {

  }

  pesquisa(term:string): void {
    if(term)
    this.router.navigateByUrl('/pesquisa/' + term);
    if(!term)
    this.router.navigateByUrl('');

  }
}
