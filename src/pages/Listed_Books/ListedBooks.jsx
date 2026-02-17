import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { readgetLocal } from "../../components/localStorage/readLocal";
import Book from "../../components/Book/Book";
import "../../App.css";
import { ChevronDown } from "lucide-react";

const ListedBooks = () => {
  const data = useLoaderData();
  const [sort, setSort] = useState("");

  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedId = readgetLocal();
    const convertedStoredId = storedId.map((id) => parseInt(id));
    const updatedReadList = data.filter((book) =>
      convertedStoredId.includes(book.bookId),
    );
    setReadList(updatedReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "Pages") {
      const sortedBooks = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages,
      );
      setReadList(sortedBooks);
    } else if (type === "Rating") {
      const sortedBooks = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedBooks);
    }
  };

  return (
    <div className="max-w-10/12 mx-auto mb-10">
      <div className="bg-base-200 p-8 my-8 rounded-2xl ">
        <h1 className="font-work-sans text-[#131313] font-bold text-5xl text-center">
          Books
        </h1>
      </div>
      <div className="text-center mb-14">
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] text-white">
            Sort By {sort ? ` : ${sort}` : <ChevronDown />}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Rating")}>Rating</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
