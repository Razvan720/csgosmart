import { Component, OnInit } from '@angular/core';
import { UpdatesService } from '../../../../services/updates.service';
import { Update } from '../../../../modelo/update';

@Component({
  selector: 'app-listaupdates',
  templateUrl: './listaupdates.component.html',
  styleUrls: ['./listaupdates.component.scss']
})
export class ListaupdatesComponent implements OnInit {

  public updates: Update[];

  constructor(public updateservice: UpdatesService) { }

  ngOnInit() {
    this.updateservice.getUpdates().subscribe(
      res => {
        console.log(res);
        this.updates = res;
      },
      err => {
        console.log(err);
      }
    )
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

}
