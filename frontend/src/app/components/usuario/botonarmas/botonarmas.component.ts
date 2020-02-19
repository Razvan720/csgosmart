import { Component, OnInit } from '@angular/core';
import { ArmasService } from './../../../services/armas.service';
import { Arma } from './../../../modelo/arma'

@Component({
  selector: 'app-botonarmas',
  templateUrl: './botonarmas.component.html',
  styleUrls: ['./botonarmas.component.scss']
})
export class BotonarmasComponent implements OnInit {

  public armas: Arma;
  constructor( public armasService: ArmasService) { }

  ngOnInit() {
    this.armasService.getArmas().subscribe(
      res=> {
        console.log(res);
        this.armas = res;
      },
      err=> {
        console.log(err);
      }
    )
  }

}
