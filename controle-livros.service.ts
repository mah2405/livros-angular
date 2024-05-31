import { Injectable } from '@angular/core';
import {Livro} from '../app/modelo/livro'

@Injectable({
    providedIn: "root",
})

export class ControleLivrosService {
  private livros: Livro[] 

  constructor(){
    this.livros = [
  {
    codigo: 1,
    codEditora: 101,
    titulo: 'O Senhor dos Anéis',
    resumo: 'Uma grande aventura épica...',
    autores: ['J.R.R. Tolkien']
},
{
    codigo: 2,
    codEditora: 102,
    titulo: '1984',
    resumo: 'Um clássico da distopia...',
    autores: ['George Orwell']
},
{
    codigo: 3,
    codEditora: 103,
    titulo: 'Dom Quixote',
    resumo: 'As aventuras do cavaleiro...',
    autores: ['Miguel de Cervantes']
     },
   ]
  }

  obterLivros = (): Livro[] => {
    return this.livros
  }

  incluir = (livro: Livro): void => {
    const codigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1
    this.livros.push({ ...livro, codigo })
  }

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    )
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1)
    }
  }
}