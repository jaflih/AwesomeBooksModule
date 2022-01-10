/* eslint-disable max-classes-per-file */
import Book from './modules/book.js';
import BooksManager from './modules/booksmanager.js';

const FORM = document.querySelector('form');
const MANAGER = new BooksManager([]);

document.querySelector('#add_button').addEventListener('click', (event) => {
  event.preventDefault();
  const small = document.querySelector('small');
  if (FORM.title.validity.valueMissing) {
    small.innerHTML = 'You need to enter an Title';
    small.classList.remove('collapse');
  } else if (FORM.author.validity.valueMissing) {
    small.innerHTML = 'You need to enter an Author';
    small.classList.remove('collapse');
  } else {
    MANAGER.incrementCounter();
    MANAGER.addBook(
      new Book(MANAGER.counter, FORM.title.value, FORM.author.value)
    );
    FORM.reset();
    small.classList.add('collapse');
  }
});

MANAGER.loadBooks();

//
document.querySelector('#add_new').addEventListener('click', () => {
  document.querySelector('#add_new').style.color = 'rgb(58, 169, 206)';
  document.querySelector('#list').style.color = 'black';
  document.querySelector('#contact').style.color = 'black';
  document.querySelector('#book_list').classList.add('collapse');
  document.querySelector('#add_books').classList.remove('collapse');
  document.querySelector('#contact-information').classList.add('collapse');
});

document.querySelector('#contact').addEventListener('click', () => {
  document.querySelector('#add_new').style.color = 'black';
  document.querySelector('#list').style.color = 'black';
  document.querySelector('#contact').style.color = 'rgb(58, 169, 206)';
  document.querySelector('#book_list').classList.add('collapse');
  document.querySelector('#add_books').classList.add('collapse');
  document.querySelector('#contact-information').classList.remove('collapse');
});

document.querySelector('#list').addEventListener('click', () => {
  document.querySelector('#contact').style.color = 'black';
  document.querySelector('#add_new').style.color = 'black';
  document.querySelector('#list').style.color = 'rgb(58, 169, 206)';
  document.querySelector('#book_list').classList.remove('collapse');
  document.querySelector('#add_books').classList.add('collapse');
  document.querySelector('#contact-information').classList.add('collapse');
});

document.querySelector('.date').innerHTML = new Date();
