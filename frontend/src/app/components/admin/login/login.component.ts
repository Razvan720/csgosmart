import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(library: FaIconLibrary, private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formLogin = formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
    });
    library.addIcons(faUser, faUnlock);
  }

  ngOnInit() {
  }

  submit() {
    this.usuarioService.getLogin(this.formLogin.value).subscribe(
       res => {
         localStorage.setItem('token', res);
         this.router.navigate(['/home']);
       },
       err => {
         console.log(err);
       });
   }

}
