import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TituloComponent } from "../../partials/titulo/titulo.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    imports: [ReactiveFormsModule, TituloComponent, CommonModule]
})
export class LoginPageComponent {

  loginForm!:FormGroup;
  salvar = false;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      senha:['', Validators.required]
    })
  }

  get formControl() {
    return this.loginForm.controls;
  }

  aoClicarSalvar() {
    this.salvar = true;

    if(this.loginForm.invalid)
    return;

    alert(`email: ${this.formControl['email'].value}, 
    senha: ${this.formControl['senha'].value}`)
  }
}
