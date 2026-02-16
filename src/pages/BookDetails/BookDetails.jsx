import React from "react";
import { ToastContainer } from "react-toastify";
import { useLoaderData, useParams } from "react-router";
import "../../App.css";
import { addreadLocal } from "../../components/localStorage/readLocal";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === Number(id));
  console.log(singleBook);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleReadBtn = (id) => {
    addreadLocal(id);
  };

  return (
    <div className="flex flex-col gap-12 md:flex-row max-w-[90%] mx-auto mt-12 mb-20">
      <div className="w-full h-auto object-contain">
        <img src={image} alt="book" />
      </div>
      <div>
        <h1 className="font-playfair-display text-5xl font-bold">{bookName}</h1>
        <p className="font-work-sans text-xl font-medium mt-4">By: {author}</p>
        <div className="divider w-full"></div>
        <p className="font-work-sans text-xl font-medium text-[#131313CC]">
          {category}
        </p>
        <div className="divider w-full"></div>
        <p className="font-work-sans text-[#131313B3]">
          <span className="text-[#131313] text-base font-bold font-work-sans">
            Review :{" "}
          </span>
          {review}
        </p>
        <div className="flex mt-6">
          <p className="text-[#131313] text-base font-bold font-work-sans">
            Tag
          </p>
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-xs ml-4 rounded-xl text-[#23BE0A] mb-4"
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="divider w-full"></div>
        {/*  */}
        <div className="flex gap-12">
          {/*  */}
          <div>
            <p className="text-[#131313B3] font-work-sans text-base mb-5">
              Number of Pages:{" "}
            </p>
            <p className="text-[#131313B3] font-work-sans text-base mb-5">
              Publisher:
            </p>
            <p className="text-[#131313B3] font-work-sans text-base  mb-5">
              Year of Publishing:
            </p>
            <p className="text-[#131313B3] font-work-sans text-base  mb-5">
              Rating:
            </p>
          </div>
          {/*  */}
          <div>
            <p className="text-[#131313] font-work-sans text-base font-semibold mb-5">
              {totalPages}
            </p>
            <p className="text-[#131313] font-work-sans text-base font-semibold mb-5">
              {publisher}
            </p>
            <p className="text-[#131313] font-work-sans text-base font-semibold mb-5">
              {yearOfPublishing}
            </p>
            <p className="text-[#131313] font-work-sans text-base font-semibold mb-5">
              {rating}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              handleReadBtn(id);
            }}
            className="btn btn-outline font-work-sans text-lg font-semibold"
          >
            Read
          </button>
          <button className="btn bg-[#50B1C9] text-white font-work-sans text-lg font-semibold">
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />;
    </div>
  );
};

export default BookDetails;
