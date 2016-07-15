import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
    providers: [CursosService]
})
export class CursosComponent {
    
    cursos : Array<Curso>;

    nome : string = "loiane.training";

    teste : Teste = {id: 1, nome:'Ivana'};

    mostrar(teste:Teste) { alert(teste.nome); };


    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos();
    }

}

class Curso {
    id : number;
    nome : string;
}

class Teste {
    id : number;
    nome : string;
}