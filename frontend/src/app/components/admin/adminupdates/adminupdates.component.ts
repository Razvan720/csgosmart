import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-adminupdates',
  templateUrl: './adminupdates.component.html',
  styleUrls: ['./adminupdates.component.scss']
})
export class AdminupdatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarAdd(){
    document.getElementById("form-add").classList.toggle("cont-add-visible");
  }

}
