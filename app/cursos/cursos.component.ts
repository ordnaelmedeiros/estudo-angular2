import { Component, ViewChild } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
    providers: [CursosService]
})
export class CursosComponent {
    
    @ViewChild('txtNome') txtNome:HTMLInputElement;

    msgErro:String = "";

    idCount:number = 0;

    cursos:Array<Curso> = new Array();

    curso:Curso = new Curso();

    nome:string = "loiane.training";

    constructor(cursosService: CursosService) {
        //this.cursos = cursosService.getCursos();
        //this.txtNome.nativeElement.focus();
    }

    salvar() {

        this.msgErro = "";

        if (this.curso.nome == null || this.curso.nome == '' ) {

            this.msgErro = "Campo Obrigatório"

        } else {

            if (this.curso.id==null) {

                this.idCount ++;
                this.curso.id = this.idCount;
                this.cursos.push(this.curso);
                this.curso = new Curso();

            } else {

                for (var index = 0; index < this.cursos.length; index++) {
                    var element:Curso = this.cursos[index];
                    if (element.id == this.curso.id) {
                        element.id = this.curso.id;
                        element.nome = this.curso.nome;
                        break;
                    }
                }

            }
            
        }

        //this.txtNome.nativeElement.focus();

    }

    excluir(cur:Curso) {
        for (var index = 0; index < this.cursos.length; index++) {
            var element:Curso = this.cursos[index];
            if (element.id == cur.id) {
                this.cursos.splice(index, 1);
                break;
            }
        }
        //this.txtNome.nativeElement.focus();
    }

    editar(cur:Curso) {
        this.curso.id = cur.id;
        this.curso.nome = cur.nome;
        //this.txtNome.nativeElement.focus();
    }

}

class Curso {
    id : number;
    nome : string;
}
