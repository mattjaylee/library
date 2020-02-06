//constructs constants for ease of use later
let myLibrary = [];
const library = document.getElementById('libraryContainer')
const information = document.getElementById('information')
const bottom = document.getElementById('bottomContainer')
const headerArray = ['title', 'author', 'pages', 'completed']
const addBook = document.getElementById('addBook')

//object constructor function
function Book(title, author, pages, completed){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

function addBookToLibrary(title, author, pages, completed){
  //creates object from inputted data and appends it to library array
  title = new Book(title, author, pages, completed)
  myLibrary.push(title);
  //adds the book to the DOM under librarycontainer
  let libraryBook = document.createElement('div');
  libraryBook.classList.add('book','contentGrid')
  let book = myLibrary[myLibrary.length - 1];
  for (const info in book){
    let bookInfo = document.createElement('div');
    bookInfo.classList.add(info);
    bookInfo.textContent = book[info];
    libraryBook.appendChild(bookInfo);
  }
  //adds the remove button book
  let removeButton = document.createElement('button')
  removeButton.classList.add('removeButton')
  removeButton.setAttribute('type', 'button');
  removeButton.textContent = 'Remove Book';
  removeButton.addEventListener('click', removeBook)
  libraryBook.appendChild(removeButton)
  library.appendChild(libraryBook)
}

//goes to the parent of the button and removes from DOM and matches it to
//the array to remove the object from the array as well
function removeBook(){
  let removalElement = this.parentNode.querySelector('.title')
  for (let i = 0; i < myLibrary.length; i++){
    if (removalElement.textContent == myLibrary[i].title){
      myLibrary.splice(i, 1)
      console.log(myLibrary)
    }
  }
  this.parentNode.parentNode.removeChild(this.parentNode)
}

//capitalizes the first letter in a string it's called on
function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//creates the headers at the top of the page from the const headerArray so interval
//so it can be changed in the future easier
function makeHeaders(){
  let headerDom = document.createElement('div');
  headerDom.classList.add('headers', 'contentGrid');
  library.appendChild(headerDom);
  for (let i = 0; i < headerArray.length; i++){
    let header = document.createElement('div');
    header.classList.add(capitalize(headerArray[i]));
    header.textContent = capitalize(headerArray[i]);
    headerDom.appendChild(header);
  }
}

//creates the Add a Book button on the page with text boxes
function makeButton(){
  let button = document.createElement('button');
  button.classList.add('add', 'button');
  button.setAttribute('type', 'button');
  button.textContent = 'Add a Book';
  button.addEventListener('click', addForm)
  addBook.appendChild(button);
}

//when called it creates the boxes to input data for the new book as well
//as change the button to a submit button to enter the data
function addForm(){
  this.textContent = 'Submit'
  this.removeEventListener('click', addForm)
  //creates form with the names of text boxes as the header array data
  let newBookForm = document.createElement('form');
  newBookForm.setAttribute('id', 'newBookForm')
  newBookForm.classList.add('newBookForm', 'contentGrid');
  for (let i = 0; i < headerArray.length; i++){
    let inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('name', headerArray[i]);
    inputBox.classList.add('form')
    newBookForm.appendChild(inputBox);
  }
  bottom.appendChild(newBookForm);
  this.addEventListener('click', submitForm)
}

//grabs the value from the new book form and passes it to the addbooktolibrary
//function to add to the array and the DOM. Also changes the button back to
//add a book button
function submitForm(){
  this.removeEventListener('click', submitForm)
  this.textContent = 'Add a Book'
  let newBookInfo = document.getElementsByClassName('form')
  let infoArray = []
  for (let i = 0; i < newBookInfo.length; i++){
    infoArray.push(newBookInfo[i].value)
  }
  addBookToLibrary(infoArray[0], infoArray[1], infoArray[2], infoArray[3])
  let inputForm = document.getElementById('newBookForm')
  inputForm.parentNode.removeChild(inputForm)
  this.addEventListener('click', addForm)
}
//renders headers and the add a book button
function render(){
  makeHeaders();
  makeButton();
}

render();

//just standard books to start with
addBookToLibrary('The Hero With A Thousand Faces', 'Joseph Campbell', 416, 'True');
addBookToLibrary('The Bible Tells Me So', 'Pete Enns', 245, 'True');
