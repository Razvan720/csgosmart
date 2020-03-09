import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UpdatesService } from '../../../../services/updates.service';
import { Update } from '../../../../modelo/update';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-listaupdates',
  templateUrl: './listaupdates.component.html',
  styleUrls: ['./listaupdates.component.scss']
})
export class ListaupdatesComponent implements OnInit {

  @Input() public updates: Update[];
  @Output() public updateEvent: EventEmitter<Update> = new EventEmitter ();
  

  /*Fontawesome*/
  faCoffee = faCoffee;

  constructor(public updateservice: UpdatesService) { }

  ngOnInit() {
    
  }

  borrarUpdate(id: string) {
    this.updateservice.deleteUpdates(id).subscribe(
      res => {
        console.log(res);
        /*Borramos el update de la bd y al modificar el array angular detecta que
        tiene que rederizar de nuevo*/ 

        const index = this.updates.findIndex(update=>{
          return update.id === id;
        })

        this.updates.splice(index, 1);
       
      },
      err => {
        console.log(err);
      })
     
  }

  editarUpdate(update: Update){
    this.updateEvent.emit(update);
  }

}
