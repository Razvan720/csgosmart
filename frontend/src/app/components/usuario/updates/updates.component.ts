import { Component, OnInit } from '@angular/core';
import { Update } from 'src/app/modelo/Update';
import { UpdatesService } from 'src/app/services/updates.service';
/*Fontawesome */
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
  public updates: Update;

  constructor(public updateservice: UpdatesService) { }

  faCalendarAlt = faCalendarAlt;
  faClock = faClock;

  ngOnInit() {
    this.updateservice.getUpdates().subscribe(
      res => {
        this.updates = res;
      },
      err => {

      }
    )
  }

}
