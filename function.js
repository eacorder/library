const authorDom = document.querySelector('#author') 
const titleDom = document.querySelector('#title') 
const pagesDom = document.querySelector('#pages')
const readDom = document.querySelector('#read')
const save = document.querySelector('.save')
const container = document.querySelector('.container');
let id = 1 ;
let myLibrary = [];

function Book(title, author, pages, read) {
   this.id = id++
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
    container.innerHTML = "";
    myLibrary.forEach(bookTemp => {
        
        
        const div = document.createElement('div');
        const title = document.createElement('h3'); 
        const button = document.createElement('button');
        const buttonChange = document.createElement('button');
        const spanAuthor = document.createElement('span');
        const spanPages = document.createElement('span');
        const spanRead = document.createElement('span');
        let read;
        div.classList.add('book');
        
        /*const bookTemp = myLibrary[myLibrary.length - 1];*/
    
    
        title.innerHTML =  bookTemp.title;
        spanAuthor.innerHTML = "By: " + bookTemp.author;
        spanPages.innerHTML = "Number of Pages: " +  bookTemp.pages;
        if ( bookTemp.read == 1 ) {
            read =  'yes' ;
            div.classList.add('read')
        } else {
            read =  'no' ;
            div.classList.add('notread')
        }
        spanRead.innerHTML = "Already Read: " + read;
        button.innerHTML = "REMOVE"
        buttonChange.innerHTML = "CHANGE STATUS"
        button.classList.add('bookButton') 
        buttonChange.classList.add('buttonChange') 
        button.setAttribute('data-id', bookTemp.id );  
        buttonChange.setAttribute('data-id', bookTemp.id );  
        button.addEventListener('click', ()=> {   
            let text = "Are you sure you want to remove the book.";
            if (confirm(text) == true) {
                removeBook(parseInt(button.getAttribute("data-id")));
            }             
        })
        buttonChange.addEventListener('click', ()=> {   
            let text = "Are you sure you want to change the book status.";
            if (confirm(text) == true) {
                changeStatus(parseInt(buttonChange.getAttribute("data-id")));
            }             
        })
        div.appendChild(title); 
        div.appendChild(spanAuthor); 
        div.appendChild(spanPages); 
        div.appendChild(spanRead); 
        div.appendChild(buttonChange); 
        div.appendChild(button); 
        
        container.appendChild(div);
    });
     
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

function removeBook(bookId) {
    const objWithIdIndex = myLibrary.findIndex(obj => obj.id === bookId);
    myLibrary.splice( objWithIdIndex, 1 );
    cardRender()
     
}

function changeStatus(bookId) {
    const objWithIdIndex = myLibrary.findIndex(obj => obj.id === bookId);
    if(myLibrary[objWithIdIndex].read ) {
        myLibrary[objWithIdIndex].read = 0;
    }else {
        myLibrary[objWithIdIndex].read = 1;
    }
    cardRender()
}