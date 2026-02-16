import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";

import { router } from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={
        <div className="flex gap-4 items-center">
          <span className="loading loading-spinner loading-xs"></span>
          <span className="loading loading-spinner loading-sm"></span>
          <span className="loading loading-spinner loading-md"></span>
          <span className="loading loading-spinner loading-lg"></span>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }
    />
  </StrictMode>,
);
