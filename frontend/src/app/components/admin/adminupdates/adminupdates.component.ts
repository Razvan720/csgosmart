import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UpdatesService } from '../../../services/updates.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Update } from '../../../modelo/update';

@Component({
  selector: 'app-adminupdates',
  templateUrl: './adminupdates.component.html',
  styleUrls: ['./adminupdates.component.scss']
})
export class AdminupdatesComponent implements OnInit {

  public updates: Update[];
  public formUpdate: FormGroup;

  /*Variables para controlar formulario de añadir/editar update*/
  public isAdding = false;
  public isEditing = false;

  /* Variables que vienen de la lista*/
  public updateToEdit: Update;

  constructor(private formBuilder: FormBuilder, private updateservice: UpdatesService) {
    this.formUpdate = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(6)]],
      contenido: ['']
    })
  }

  ngOnInit(): void {
    this.suscriptionGetUpdates();
  }

  suscriptionGetUpdates(): void {
    this.updateservice.getUpdates().pipe(first()).subscribe({
      next: (res) => {
        console.log(res);
        this.updates = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  mostrarAdd(): void {
    this.isAdding = true;
    this.isEditing = false;
  }

  addUpdate() {
    this.updateservice.saveUpdates(this.formUpdate.value).pipe(first()).subscribe({
      next: (res) => {
        console.log(res);
        this.suscriptionGetUpdates();
        this.isAdding = false;
        this.clearForm(this.formUpdate);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  mostrarEditar(update: Update): void {
    this.isEditing = true;
    this.isAdding = false;
    this.updateToEdit = update;
    this.formUpdate.patchValue({
      titulo: update.titulo,
      contenido: update.contenido
    })
  }

  editUpdate(): void {
    this.updateToEdit.titulo = this.formUpdate.get('titulo').value;
    this.updateToEdit.contenido = this.formUpdate.get('contenido').value;

    this.updateservice.updateUpdates(this.updateToEdit.id, this.updateToEdit).pipe(first()).subscribe({
      next: (res) => {
        console.log(res);
        /*Buscamos en el array el update y lo actualizamos*/
        const index = this.updates.findIndex(update => update.id === this.updateToEdit.id);
        this.updates[index] = this.updateToEdit;

        this.isEditing = false;
      },
      error: (err) => {
        console.log(err);
      }

    })
  }

  deleteUpdate(index: number): void {
    const updateToDelete = this.updates[index];

    this.updateservice.deleteUpdates(updateToDelete.id).subscribe(
      res => {
        console.log(res);
        /*Borramos el update de la bd y al modificar el array angular detecta que
        tiene que rederizar de nuevo*/
        this.updates.splice(index, 1);

      },
      err => {
        console.log(err);
      })
  }


  clearForm(formUpdate: FormGroup):void{
    formUpdate.reset();
  }

  cancelar(): void {
    this.isAdding = false;
    this.isEditing = false;
  }



}
