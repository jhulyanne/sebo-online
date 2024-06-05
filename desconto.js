document.addEventListener('DOMContentLoaded', function() {
    const livros = [
        {
            titulo: "Maze Runner - Correr ou Morrer",
            autor: "James Dashner",
            preco: "De: R$30,00",
            desconto: "Por: R$ 18,00",
            imagem: "Fotos/produtos/maze.jpg",
            alt: "Capa livro"
        },
        {
            titulo: "Memórias póstumas de Brás Cubas",
            autor: "Machado de Assis",
            preco: "De: R$25,00",
            desconto: "Por: R$ 13,00",
            imagem: "Fotos/produtos/memorias.jpg",
            alt: "Capa do livro"
        },
        {
            titulo: "Psicose",
            autor: "Robert Bloch ",
            preco: "De: R$35,00",
            desconto: "Por: R$ 22,00",
            imagem: "Fotos/produtos/psi.jpg",
            alt: "Capa do livro"
        },
        {
            titulo: "Harry Potter e o Prisioneiro de Azkaban",
            autor: "J.K. Rowling",
            preco: "De: R$40,00",
            desconto: "Por: R$ 25,00",
            imagem: "Fotos/produtos/pris.jpg",
            alt: "Capa do livro"
        },
        {
            titulo: "O Senhor dos Anéis: A Sociedade do Anel",
            autor: "J.R.R. Tolkien",
            preco: "De: R$32,00",
            desconto: "Por: R$ 18,00",
            imagem: "Fotos/produtos/senhor.jpg",
            alt: "Capa do livro"
        },
        {
            titulo: "As Crônicas de Nárnia",
            autor: "C. S. Lewis ",
            preco: "De: R$35,00",
            desconto: "Por: R$ 22,00",
            imagem: "Fotos/produtos/narn.jpg",
            alt: "Capa do livro"
        }
    ];

    const livrosSection = document.getElementById('livros-section');
    const livroTemplate = document.getElementById('livro-template').content;

    livros.forEach(livro => {
        const livroClone = document.importNode(livroTemplate, true);
        livroClone.querySelector('.capas').src = livro.imagem;
        livroClone.querySelector('.capas').alt = livro.alt;
        livroClone.querySelector('.titulo').textContent = livro.titulo;
        livroClone.querySelector('.autor').textContent = livro.autor;
        livroClone.querySelector('.preco').textContent = livro.preco;
        livroClone.querySelector('.desconto').textContent = livro.desconto;
        livrosSection.appendChild(livroClone);
    });
});