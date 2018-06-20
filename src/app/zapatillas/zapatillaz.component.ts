import { Zapatilla } from './../modelos/zapatilla';
import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../modelos/conf';
import { ZapatillaService } from './../services/zapatilla.service';


@Component({
    selector: 'app-zapatilla',
    templateUrl: './zapatillaz.component.html',
    providers: [ZapatillaService]
})

export class ZapatillaComponent implements OnInit {
    public titulo;
    public zapatillas: any[];
    public marcas: string[];
    public color: string;
    public mi_marca: string;


    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.color = 'red';
        this.marcas = new Array();
        this.titulo = Configuracion.titulo;

    }

    ngOnInit() {
       this.zapatillas = this._zapatillaService.getZapatillas();

        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.map((zapatilla) => {
            this.marcas.push(zapatilla.marca);
        });
        console.log(this.marcas);
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index) {
        this.marcas.splice(index, 1);
    }
}
