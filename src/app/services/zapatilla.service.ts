// imports, obecjt injectable
import { Injectable } from '@angular/core';
import { Zapatilla } from './../modelos/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: any[];

    constructor() {
        this.zapatillas = [
            new Zapatilla('for one', 30.000, 'nike', 'black', true),
            new Zapatilla('dragon', 70.000, 'adidas', 'white', true),
            new Zapatilla('classic', 50.000, 'Rebook', 'blue', true),
            new Zapatilla('Marteens', 120.000, 'Dr. Martens', 'red', false)
        ];
    }

    getTexto() {
        return 'Hola mundo desde un servicio';
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
};