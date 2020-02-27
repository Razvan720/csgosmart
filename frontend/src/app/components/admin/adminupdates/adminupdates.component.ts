import { Component, OnInit } from '@angular/core';
import { UpdatesService } from '../../../services/updates.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Update } from '../../../modelo/update';

@Component({
  selector: 'app-adminupdates',
  templateUrl: './adminupdates.component.html',
  styleUrls: ['./adminupdates.component.scss']
})
export class AdminupdatesComponent implements OnInit {
  
  public updates: Update;
  public formUpdate: FormGroup;

  constructor(private formBuilder: FormBuilder, private updateservice: UpdatesService) {
    this.formUpdate = formBuilder.group({
      titulo: ['',[Validators.required, Validators.minLength(6)]],
      contenido: ['']
    })
   }

  ngOnInit() {
  }

  mostrarAdd(){
    document.getElementById("form-add").classList.toggle("cont-add-visible");
    document.getElementById("boton-add").classList.toggle("invisible");
  }

  addUpdate(){
    this.updateservice.saveUpdates(this.formUpdate.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      })
  }

}
