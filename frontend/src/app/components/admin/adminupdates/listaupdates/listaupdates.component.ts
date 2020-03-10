import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UpdatesService } from '../../../../services/updates.service';
import { Update } from '../../../../modelo/update';

/*Fontawesome */
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-listaupdates',
  templateUrl: './listaupdates.component.html',
  styleUrls: ['./listaupdates.component.scss']
})
export class ListaupdatesComponent implements OnInit {

  @Input() public updates: Update[];
  @Output() public updateEvent: EventEmitter<Update> = new EventEmitter ();
  @Output() public deleteEvent: EventEmitter<Update> = new EventEmitter ();
  

  /*Fontawesome*/
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(public updateservice: UpdatesService) { }

  ngOnInit() {
  
  }
  
  editarUpdate(update: Update){
    this.updateEvent.emit(update);
  }
  
  borrarUpdate(update: Update) {
    this.deleteEvent.emit(update);
    
  }

}
