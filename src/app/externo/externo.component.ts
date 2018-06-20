import { PeticionesService } from './../services/peticiones.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public new_user: any;

  constructor(
    public _peticiones: PeticionesService
  ) {
      this.new_user = {
        'name': '',
        'job': ''
      };
  }

  ngOnInit() {
    this._peticiones.getUser().subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
