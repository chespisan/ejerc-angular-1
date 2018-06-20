/** Modelo para representar un simple objeto */
export class Zapatilla {

    constructor(
        public nombre: string,
        public precio: number,
        public marca: string,
        public color: string,
        public stock: boolean
    ) {}
}
