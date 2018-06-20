// tslint:disable-next-line:eofline
// imports
import { Component } from '@angular/core';

// decorator
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'video-juego',
    templateUrl: './videojuego.component.html'
})
export class VideoJuegoComponent {
    public titulo;

    constructor() {
        this.titulo = 'Componente nuevo';
    }
}
