import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RootLayout from "./RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
