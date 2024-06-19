CREATE TABLE loja (
    id INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE livro (
    id INT PRIMARY KEY,
  	titulo VARCHAR(100),
  	autor VARCHAR(100),
  	editora VARCHAR(100),
    genero VARCHAR(100),
    ano_publicacao INT,
    loja_id INT,
    FOREIGN KEY (loja_id) REFERENCES loja(id)
);

CREATE TABLE fornecedor (
    id INT PRIMARY KEY,
    email VARCHAR(100),
    telefone VARCHAR(20)
);

CREATE TABLE cliente (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(200),
    email VARCHAR(100)
);

CREATE TABLE pedido (
    id INT PRIMARY KEY,
    loja_id INT,
    cliente_id INT,
    status VARCHAR(50),
    data DATE,
    id_pedido INT,
    FOREIGN KEY (loja_id) REFERENCES loja(id),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

INSERT INTO loja (id, nome) VALUES 
(1, 'Principal'), 
(2, 'Filial Santa Bárbara'),
(3, 'Filial Nova Friburgo');
SELECT * FROM loja

INSERT INTO livro (id, titulo, autor, editora, genero, ano_publicacao, loja_id) VALUES
(1, 'Cem gramas de centeio', 'Agatha Christie', 'Harper Collins', 'Mistério', 2018, 3),
(2, 'Me chame pelo seu nome', 'André Aciman', 'Intrínseca', 'Romance', 2018, 1),
(3, 'Memórias póstumas de Brás Cubas', 'Machado de Assis', 'Principis', 'Literatura experimental', 2019, 2),
(4, 'Psicose', 'Robert Bloch', 'Darkside', 'Horror', 2013, 1),
(5, 'Pessoas normais', 'Sally Rooney', 'Companhia das Letras', 'Romance', 2019, 2);
SELECT * FROM livro

INSERT INTO fornecedor (id, email, telefone) VALUES
(1, 'ler.atacado@gmail.com', '123456789'),
(2, 'thaliasilva@gmail.com', '987654321');
SELECT * FROM fornecedor

INSERT INTO cliente (id, nome, endereco, email) VALUES
(1, 'Juliana Alves', 'Rua A, 18', 'alvesju@gmail.com'),
(2, 'Carlos Martins', 'Rua Nova, 37', 'c.martins@gmail.com'),
(3, 'Gabriel Ferreira', 'Rua Quinze de Novembro, 11', 'bielferreira@gmail.com');
SELECT * FROM cliente

INSERT INTO pedido (id, loja_id, cliente_id, status, data, id_pedido) VALUES
(1, 1, 1, 'Enviado', '2023-06-01', 101),
(2, 2, 2, 'Processando', '2023-06-02', 102),
(3, 3, 3, 'Enviado', '2023-06-01', 103);
SELECT * FROM pedido

SELECT livro.titulo, livro.autor, loja.nome AS loja_nome
FROM livro
JOIN loja ON livro.loja_id = loja.id
WHERE loja.id = 1;

SELECT pedido.id, pedido.status, cliente.nome AS cliente_nome, Loja.nome AS loja_nome
FROM pedido
JOIN cliente ON pedido.cliente_id = cliente.id
JOIN loja ON pedido.loja_id = loja.id
WHERE cliente.id = 1;

SELECT pedido.id, pedido.status, cliente.nome AS cliente_nome
FROM pedido
JOIN cliente ON pedido.cliente_id = cliente.id
WHERE pedido.loja_id = 1;

SELECT ano_publicacao, COUNT(*) AS quantidade_livros
FROM livro
GROUP BY ano_publicacao;