import React from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="max-w-10/12 mx-auto mb-10">
      <h1 className="font-playfair-display text-5xl font-bold text-center mb-10">
        Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
