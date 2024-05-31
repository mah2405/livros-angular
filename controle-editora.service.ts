import { Injectable } from '@angular/core';
import {Editora} from '../app/modelo/editora';

@Injectable({
    providedIn:"root",
})
    

export class ControleEditoraService { 
  editoras: Editora []


  constructor(){
    this.editoras=[
        {
        codEditora: 1,
        nome: 'Editora A'
    },
    {
        codEditora: 2,
        nome: 'Editora B'
    },
    {
        codEditora: 3,
        nome: 'Editora C'
    },
]
  }
  

    getEditoras():Editora[]{
        return this.editoras
    }


    getNomeEditora(codEditora: number):string {
        const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0]
        return editora ? editora.nome : ""
    }

}

