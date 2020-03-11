import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-adminperfil',
  templateUrl: './adminperfil.component.html',
  styleUrls: ['./adminperfil.component.scss']
})
export class AdminperfilComponent implements OnInit {

  public formUpdatePass: FormGroup;

  constructor(library: FaIconLibrary, private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formUpdatePass = formBuilder.group({
      upass_usuario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      upass_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      upass_new_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
    });
    library.addIcons(faUser, faUnlock);
  }

  ngOnInit() {
  }

  submit() {
    this.usuarioService.updatePassword(this.formUpdatePass.value).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err);
      });
   }

  get upass_usuario() {
    return this.formUpdatePass.get('upass_usuario');
  }

  get upass_password() {
    return this.formUpdatePass.get('upass_password');
  }

  get upass_new_password() {
    return this.formUpdatePass.get('upass_new_password');
  }

}
