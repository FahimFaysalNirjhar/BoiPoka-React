import React from "react";
import "../../App.css";
import { Star } from "lucide-react";

const Book = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-sm p-6">
          <figure className="rounded-2xl bg-[#F3F3F3] py-5">
            <img src={image} alt="Book" class="w-[134px] h-[166px]" />
          </figure>
          <div className="card-body">
            <div className="border-b-2 border-dashed border-b-[#13131326] pb-5">
              {tags.map((tag) => (
                <button className="btn btn-xs ml-4 rounded-xl text-[#23BE0A] mb-4">
                  {tag}
                </button>
              ))}
              <h2 className="card-title font-playfair-display text-2xl mb-4">
                {bookName}
              </h2>
              <p className="font-work-sans ">By : {author}</p>
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
      </div>
    </>
  );
};

export default Book;
