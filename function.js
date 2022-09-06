const authorDom = document.querySelector('#author') 
const titleDom = document.querySelector('#title') 
const pagesDom = document.querySelector('#pages')
const readDom = document.querySelector('#read')
const save = document.querySelector('.save')
const container = document.querySelector('.container');

let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title; 
   this.author = author;
   this.pages = pages;
   this.read = read;
}

function addBookToLibrary(book) {    
    if(validate(book)) {
        myLibrary.push(book); 
    }
    else {
        alert ('Todos los campos deben estar llenos')
    }
  
}

save.addEventListener('click', ()=> {   
    const book = new Book(titleDom.value,authorDom.value,pagesDom.value,readDom.value)
    if(validate(book)) {
        addBookToLibrary(book);
        cardRender(); 
    }
    else {
        alert ('Todos los campos deben estar llenos')
    }
   
})

function cardRender() {

    const div = document.createElement('div');
    const title = document.createElement('h3'); 
    const spanAuthor = document.createElement('span');
    const spanPages = document.createElement('span');
    const spanRead = document.createElement('span');
    const bookTemp = myLibrary[myLibrary.length - 1];
    div.classList.add('book');
    title.innerHTML =  bookTemp.title;
    spanAuthor.innerHTML = "By: " + bookTemp.author;
    spanPages.innerHTML = "Number of Pages: " +  bookTemp.pages;
    const read = bookTemp.read == 1 ? 'yes' : 'no' ;
    spanRead.innerHTML = "Already Read: " + read;
    div.appendChild(title); 
    div.appendChild(spanAuthor); 
    div.appendChild(spanPages); 
    div.appendChild(spanRead); 
    container.appendChild(div);
}

function validate (book) {
    if (book.title ==""){
        return false;
    }
    else if (book.author ==""){
        return false;
    }
    else if (book.pages ==""){
        return false;
    }
    else 
        return true;
}