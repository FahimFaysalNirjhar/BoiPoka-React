import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === Number(id));
  console.log(singleBook);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default BookDetails;
