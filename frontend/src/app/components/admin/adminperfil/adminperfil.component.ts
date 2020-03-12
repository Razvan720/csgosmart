import { Component, OnInit } from '@angular/core';
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
  public mensajeEvento:String = null;

  constructor(private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formUpdatePass = formBuilder.group({
      upass_usuario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      upass_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      upass_new_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
    });

  }

  ngOnInit() {
  }

  submit() {
    this.usuarioService.updatePassword(this.formUpdatePass.value).subscribe(
      res => {
        switch (res.code) {
          case '0':
            this.mensajeEvento = res.message;
            break;
          case '1':
            this.mensajeEvento = res.message;
            break;
        }
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
