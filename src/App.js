import "./App.css";
import Login from "./pages/login/login";
import Navbar from "./components/NavBar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Footer from "./components/footer/footer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Announcement } from "./components/Announcement";
import { Product } from "./pages/Product";
import { useState } from "react";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { Single } from "./pages/SingleProduct/single";
import SingleProd from "./components/SingleProduct/SingleProd";

function App() {
  // const [login, setLogin] = useState(false);
  return (
    <div className="App">
      {/* <AboutUs/> */}

      <BrowserRouter>
        {/* {!login && <Navbar />} */}

        <Routes>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Announcement />
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/product"
            element={
              <>
                <Navbar />
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <signUp />
              </>
            }
          />
          <Route
            path="/singlePro"
            element={
              <>
                <SingleProduct />
              </>
            }
          />
             <Route
            path="/single"
            element={
              <>
              
              {/* <SingleProd/> */}
                <Single />
              </>
            }
          />

          {/* <Route path="/login" element={<Login  setLogin={setLogin}/> } /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/signup" element={<signUp />} />

          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/aboutUs" element={<AboutUs />} /> */}
        </Routes>
        {/* {!login && <Footer/>} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
