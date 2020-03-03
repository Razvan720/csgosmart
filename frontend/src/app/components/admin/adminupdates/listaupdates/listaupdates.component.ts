import { Component, OnInit } from '@angular/core';
import { UpdatesService } from '../../../../services/updates.service';
import { Update } from '../../../../modelo/update';

@Component({
  selector: 'app-listaupdates',
  templateUrl: './listaupdates.component.html',
  styleUrls: ['./listaupdates.component.scss']
})
export class ListaupdatesComponent implements OnInit {

  public updates: Update;

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
        document.getElementById(id).remove;
      },
      err => {
        console.log(err);
      })
      document.getElementById(id).remove();

  }

}
