// Load books data
const loadBooks = () => {
    // search input
    const searchField = document.getElementById('search-input');   
    const searchText = searchField.value;
    searchField.value = '';

    // api load
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.docs))

}

loadBooks()

// Display books data 
const displayBooks = books =>{
    console.log(books);
    const displayBook = document.getElementById('display-book-container');
    // founded search results
    const searchResultFound = document.getElementById('founded-search-result');
    // searchResultFound.innerText = `Total Search results found = ${numFound}`

    // forEACH
    books.forEach(book => {
        console.log(book);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 shadow p-0 border">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" height="220px" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title fw-bold fs-2">${book.title}</h5>
                <p class="card-text fst-italic fs-6"><strong class="fst-italic fs-6">Author:</strong> ${book.author_name?book.author_name: 'Unknown author name'}</p>
                <p class="card-text fst-italic fs-6"><strong class="fst-italic fs-6">Publisher:</strong> ${book.publisher[0]}</p>
                <p class="card-text fst-italic fs-6"><strong class="fst-italic fs-6">1st Publish Year:</strong> ${book.first_publish_year?book.first_publish_year: 'Unknown Year'}</p>
            </div>
        </div>
        `
        displayBook.appendChild(div);
    }); 
}








