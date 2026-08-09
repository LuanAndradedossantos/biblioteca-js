import {livros} from "./dadosLivros.js"; // importa o array de livros do arquivo dadosLivros.js

export function listarLivros() { // função que lista todos os livros cadastrados no sistema.
    console.log("\n LISTA DE LIVROS \n");

    livros.forEach((livro, indice) => { // percorre o array de livros e exibe as informações de cada livro no console.
        console.log(`\nLivro ${indice + 1}`); // exibe o número do livro na lista (começando do 1)
        console.log(`Título: ${livro.titulo.toUpperCase()}`); // exibe o título do livro em letras maiúsculas
        console.log(`Autor: ${livro.autor}`); // exibe o autor do livro
        console.log(`Categoria: ${livro.categoria}`); // exibe a categoria do livro
        console.log(`Número de páginas: ${livro.paginas}`); // exibe o número de páginas do livro
        console.log(`Disponibilidade: ${livro.disponivel ? "Disponível" : "Emprestado"}`); // exibe a disponibilidade do livro (disponível ou emprestado)
    });
}