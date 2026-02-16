import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { readgetLocal } from "../../components/localStorage/readLocal";
import Book from "../../components/Book/Book";

const ListedBooks = () => {
  const data = useLoaderData();

  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedId = readgetLocal();
    const convertedStoredId = storedId.map((id) => parseInt(id));
    const updatedReadList = data.filter((book) =>
      convertedStoredId.includes(book.bookId),
    );
    setReadList(updatedReadList);
  }, []);

  return (
    <div className="max-w-10/12 mx-auto">
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
