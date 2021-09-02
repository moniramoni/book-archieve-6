const loadBooks = () => {
    fetch('https://openlibrary.org/search.json?q=javascript')
    .then(res => res.json())
    .then(data => console.log(data.docs))
    // .then(data => console.log(data.docs[0]))
    // .then(data => console.log(data.docs[0].publish_date[1])) date year
    // .then(data => console.log(data.docs[0].publish_date[0])) //pub date
    // .then(data => console.log(data.docs[0].title)) // title
}
loadBooks()

/* 
const displayBooks = books =>{
    const searchText = document.getElementById('search-input');
    const search = searchText.value;
    console.log(search);

    books.forEach(book => {
        console.log(book);
    });
}
loadBooks()

 */
