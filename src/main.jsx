import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./compopnents/Layout";
import Home from "./compopnents/Home";
import { fetchProducts } from "./loader";
import Contact from "./compopnents/Contact";
import About from "./compopnents/About";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" 
    element={<Home/>}
    loader={fetchProducts}
    />
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
  </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
