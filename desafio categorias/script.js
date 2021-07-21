const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clanson",
            },
            {
                title: "pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R Covey"
            },
        ],
    },
]
//mostrar o número de categorias
let totalCategory = booksByCategory.length
console.log(totalCategory)
//mostrar o total de livros em cada categoria
for(let categorias of booksByCategory){
    console.log('Total de livros na categoria: ' , categorias.category)
    console.log(categorias.books.length)
}


//contar quantos autores tem
function countAuthors(){
    let authors = []
    for(let category of booksByCategory){
    for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("A quantidade de autores é " + authors.length)
}
countAuthors()

//função para saber quais livros são de cada autor
function livrosDoAutor(author){
    let livros = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){
                livros.push(book.title)
            }
        }
    }
console.log(`São livros de ${author}: ${livros.join(", ")}`)
}
livrosDoAutor("Augusto Cury")
