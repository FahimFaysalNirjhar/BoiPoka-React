import React from "react";
import "../../App.css";
import { Star } from "lucide-react";
import { Link } from "react-router";
import { BookText } from "lucide-react";

const Book = ({ book }) => {
  const {
    bookName,
    bookId,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
  } = book;

  return (
    <>
      <Link to={`/bookdetails/${bookId}`}>
        <div className="card bg-base-100 shadow-sm p-6 h-125">
          <figure className="rounded-2xl bg-[#F3F3F3] py-5 h-60">
            <img src={image} alt="Book" className="w-[134px] h-[166px]" />
          </figure>
          <div className="card-body">
            <div className="border-b-2 border-dashed border-b-[#13131326] pb-5">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn btn-xs ml-4 rounded-xl text-[#23BE0A] mb-4"
                >
                  {tag}
                </button>
              ))}
              <h2 className="card-title font-playfair-display text-2xl mb-4">
                {bookName}
              </h2>
              <div className="flex justify-between">
                <p className="font-work-sans">By : {author}</p>
                <p className="flex gap-2">
                  <BookText /> Pages : {totalPages}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p>{category}</p>
            <p className="flex gap-1">
              {rating}
              <Star />
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
