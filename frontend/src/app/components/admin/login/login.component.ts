import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/modelo/usuario';
import { IndexedDbService } from 'src/app/services/indexed-db.service';
import { Token } from 'src/app/modelo/Token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(library: FaIconLibrary, private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService, private indexedDbService: IndexedDbService) {
    this.formLogin = formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
    });
    library.addIcons(faUser, faUnlock);
  }

  ngOnInit() {
  }

  submit() {
    const token: Token = {id:"session_token", value:"1234"};
    this.usuarioService.getLogin(this.formLogin.value).subscribe(
      res => {
        switch (res.code) {
          case '0':
            console.log(res.message);
            localStorage.setItem('token', res.token);

            this.indexedDbService.insertToken(token)

            this.indexedDbService.readToken().subscribe(
              res => {
                console.log(res);
              },
              err => {
                console.log(err);
              }
            );


            this.router.navigate(['/control']);
            break;
          case '1':
            console.log(res.message);
            break;
          case '2':
            console.log(res.message);
            break;
          case '3':
            console.log(res.message);
            break;
        }
      },
      err => {
        console.log(err);
      });
   }

  get usuario() {
    return this.formLogin.get('usuario');
  }

  get password() {
    return this.formLogin.get('password');
  }

}
