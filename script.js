const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', function () {
    const BookFrom = document.querySelector("#form");
    BookFrom.style.display = "flex";
})


document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();
    const form = document.querySelector('#form');
    if (form.checkValidity()) {
        addBookToLibrary();
        form.reset();
        form.style.display = "flex";
    } else {
        form.reportValidity();
    }
});

function render(){
    const LibraryEl = document.querySelector("#Library");
    LibraryEl.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++){
        const bookEl = document.createElement("div");
        const book = myLibrary[i];
        bookEl.setAttribute('class', 'book-card');
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
                <p class="pages">${book.pages} pages</p>
                <p class="read-status">${book.read ? 'Read' : 'Not Read Yet'}</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick = "toggleBook(${i})">Toggle Book</button>
            </div>

            `;
            LibraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

function toggleBook(index){
    myLibrary[index].read = !myLibrary[index].read;
    render();   
}