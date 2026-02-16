import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/Listed_Books/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/FahimFaysalNirjhar/boipoka-data/refs/heads/main/booksData.json",
          ).then((res) => res.json()),
        path: "/",
        Component: Home,
      },
      {
        path: "/ListedBooks",
        Component: ListedBooks,
      },
    ],
  },
]);
