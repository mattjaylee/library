let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read){
  title = new Book(title, author, pages, read)
  myLibrary.push(title);
}

addBookToLibrary('The Hero With A Thousand Faces', 'Joseph Campbell', 416, 'True');
addBookToLibrary('The Bible Tells Me So', 'Pete Enns', 245, 'True');

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function render(){
  let bookContent = '';
  for (let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    for (const info in book){
      bookContent += capitalize(info) + ': ' + book[info] + ' ';
    }
    console.log(bookContent)
  }
}

render();
