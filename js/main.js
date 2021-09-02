// Load books data
const loadBooks = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    fetch('https://openlibrary.org/search.json?q=javascript')
    .then(res => res.json())
    .then(data => displayBooks(data.docs))
    // .then(data => console.log(data.docs[0]))
    // .then(data => console.log(data.docs[0].publish_date[1])) date year
    // .then(data => console.log(data.docs[0].publish_date[0])) //pub date
    // .then(data => console.log(data.docs[0].title)) // title
}
loadBooks()

// Display books data 
const displayBooks = books =>{
    console.log(books);
    const displayBook = document.getElementById('display-book-container');

/*     books.forEach(book => {
        console.log(book); // ${book.cover_i}
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 shadow p-0 border-0">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" height="220px" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        displayBook.appendChild(div)
    });  */


    books.forEach(book => {
        console.log(book); // ${book.cover_i}
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 shadow p-0 border">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" height="220px" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        displayBook.appendChild(div)
    }); 
}








