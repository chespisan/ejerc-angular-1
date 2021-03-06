import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public identificar: boolean;

  constructor() {
    this.identificar = false;
  }
  ngOnInit() {
  }

  setIdentificado() {
    this.identificar = true;
  }

  logOut() {
    this.identificar = false;
  }
}
