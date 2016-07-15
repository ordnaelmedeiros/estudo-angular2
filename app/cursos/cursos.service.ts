import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    getCursos() {
        return [{id:1,nome:'Angular 2'}, {id:1,nome:'Java'}, {id:1,nome:'Ext JS'}];
    }

}