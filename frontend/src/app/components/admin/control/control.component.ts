import { Component, OnInit } from '@angular/core';
/*Fontawesome */
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;

  constructor() { }

  
  
  ngOnInit() {
  }

}
