let myLibrary = [];
const library = document.getElementById('libraryContainer')
const information = document.getElementById('information')

function Book(title, author, pages, completed){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

function addBookToLibrary(title, author, pages, completed){
  title = new Book(title, author, pages, completed)
  myLibrary.push(title);
}

addBookToLibrary('The Hero With A Thousand Faces', 'Joseph Campbell', 416, 'True');
addBookToLibrary('The Bible Tells Me So', 'Pete Enns', 245, 'True');

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeHeaders(){
  let headerDom = document.createElement('div');
  headerDom.classList.add('headers');
  library.appendChild(headerDom);
  let headerArray = ['title', 'author', 'pages', 'completed'];
  for (let i = 0; i < headerArray.length; i++){
    let header = document.createElement('div');
    header.classList.add(capitalize(headerArray[i]));
    header.textContent = capitalize(headerArray[i]);
    headerDom.appendChild(header);
  }
}

function render(){
  makeHeaders();
  for (let i = 0; i < myLibrary.length; i++){
    let libraryBook = document.createElement('div');
    libraryBook.classList.add('book')
    let book = myLibrary[i];
    for (const info in book){
      let bookInfo = document.createElement('div');
      bookInfo.classList.add(info);
      bookInfo.textContent = book[info];
      libraryBook.appendChild(bookInfo);
    }
    library.appendChild(libraryBook)
  }
}

render();
