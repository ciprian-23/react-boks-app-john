import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  const getBook = (id) => {
    const aBook = books.find((book) => book.id === id);
    console.log(aBook);
  };
  return (
    <>
      <h2>Most popular books on Amazon</h2>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

reportWebVitals();
