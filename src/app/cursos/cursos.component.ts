import { ZapatillaComponent } from './../zapatillas/zapatillaz.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit() {
  }

  redirigir() {
    this._router.navigate(['/zapatillas']);
  }

}
