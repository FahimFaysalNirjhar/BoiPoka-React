import React from "react";
import "../../App.css";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen max-w-10/12 mx-auto mt-16 mb-28 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/banner_book.png" className="max-w-xs rounded-lg " />
          <div>
            <h1 className="text-5xl p-5 md:p-0 font-bold max-w-lg font-playfair-display">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/ListedBooks">
              <button className="btn mt-12 bg-[#23BE0A] text-white font-work-sans text-xl font-bold p-7">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
