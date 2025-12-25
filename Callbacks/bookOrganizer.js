/**
 * Build a Book Organizer
 * **/

const books = [
    {title: "Crossing the chasm's", authorName: "Landry Djomo", releaseYear: 2000},
    {title: "Rich Dad, Poor Dad", authorName: "Robert T Kiosaki", releaseYear: 2000},
    {title: "How to make friend", authorName: "Brian Tracy", releaseYear: 1850}
];

function sortByYear(book1, book2){
    if(book1.releaseYear < book2.releaseYear) {
        return -1;
    }else if(book1.releaseYear > book2.releaseYear) {
        return 1;
    }else {
        return 0;
    }
}

let filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear)
