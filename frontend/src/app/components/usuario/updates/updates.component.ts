import { Component, OnInit } from '@angular/core';
import { Update } from 'src/app/modelo/Update';
import { UpdatesService } from 'src/app/services/updates.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
  public updates: Update;

  constructor( public updateservice: UpdatesService) { }
 

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

}
