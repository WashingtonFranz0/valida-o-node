import Express from 'express';

const app = Express();

app.listen(3000, function() {
    console.log("server rodando porta 3000");
})



var livros = [{title: 'Os três porquinhos', author: 'aaaaa', year: '2', genre: 'infantil'},
              {title: 'livro2', author: 'autor2', year: '5', genre: 'infantil'}
];

app.use(Express.urlencoded({extended: true}));

app.get('/livros/:id', (req, res) => {
    let idLivro = req.params.id;
    return res.json([livros[idLivro]])
});

app.post('/novolivros/', (req, res) =>{
    let title = req.body.title;
    let author = req.body.author;
    let year = req.body.year;
    let genre = req.body.genre;
    

    console.log(title);
    console.log(author);
    console.log(year);
    console.log(genre);

    let novoLivro = {title, author, year, genre};
    livros.push(novoLivro);

    return res.json([livros[(livros.length - 1)]]);
});

app.delete('/livros/delete/:id', (req, res) =>{
    let id = req.params.id;
    livros[id] = null;
    return res.json({message: "O livro foi removido"});
});

app.put('/livrosUpdate/:id', (req, res) =>{
    let title = req.body.title;
    let author = req.body.author;
    let year = req.body.year;
    let genre = req.body.genre;

    livros[req.params.id] = {title, author, year, genre}

    return res.json(livros);
});