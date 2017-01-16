"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cursos_service_1 = require('./cursos.service');
var CursosComponent = (function () {
    function CursosComponent(cursosService) {
        this.msgErro = "";
        this.idCount = 0;
        this.cursos = new Array();
        this.curso = new Curso();
        this.nome = "loiane.training";
        //this.cursos = cursosService.getCursos();
        //this.txtNome.nativeElement.focus();
    }
    CursosComponent.prototype.salvar = function () {
        this.msgErro = "";
        if (this.curso.nome == null || this.curso.nome == '') {
            this.msgErro = "Campo Obrigatório";
        }
        else {
            if (this.curso.id == null) {
                this.idCount++;
                this.curso.id = this.idCount;
                this.cursos.push(this.curso);
                this.curso = new Curso();
            }
            else {
                for (var index = 0; index < this.cursos.length; index++) {
                    var element = this.cursos[index];
                    if (element.id == this.curso.id) {
                        element.id = this.curso.id;
                        element.nome = this.curso.nome;
                        break;
                    }
                }
            }
        }
        //this.txtNome.nativeElement.focus();
    };
    CursosComponent.prototype.excluir = function (cur) {
        for (var index = 0; index < this.cursos.length; index++) {
            var element = this.cursos[index];
            if (element.id == cur.id) {
                this.cursos.splice(index, 1);
                break;
            }
        }
        //this.txtNome.nativeElement.focus();
    };
    CursosComponent.prototype.editar = function (cur) {
        this.curso.id = cur.id;
        this.curso.nome = cur.nome;
        //this.txtNome.nativeElement.focus();
    };
    __decorate([
        core_1.ViewChild('txtNome'), 
        __metadata('design:type', HTMLInputElement)
    ], CursosComponent.prototype, "txtNome", void 0);
    CursosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cursos-lista',
            templateUrl: 'cursos.component.html',
            providers: [cursos_service_1.CursosService]
        }), 
        __metadata('design:paramtypes', [cursos_service_1.CursosService])
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
var Curso = (function () {
    function Curso() {
    }
    return Curso;
}());
//# sourceMappingURL=cursos.component.js.map