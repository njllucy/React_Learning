import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Login from "./Component/Login";
import About from "./Component/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />

          <Home />
        </>
      ),
    },
    {
      path: "/login/:username",
      element: (
        <>
          <Navbar />

          <Login />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
