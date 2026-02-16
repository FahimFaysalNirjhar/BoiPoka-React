import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  return (
    <div className="max-w-10/12 mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Read List</h2>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
