import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import NotFoundPage from "./components/NotFoundPage";
import Book from "./components/Book";
import "./App.css";

// Book data (mocked)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* <Navbar /> */}
          <nav className="navbar">
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png"
                alt="My Bookstore"
              />
              {/* <p>Logo1</p> */}
              <Link to="/">Logo</Link>
            </div>
            <div className="nav-buttons">
              {/* <button className="cart-button">Cart</button>
              <button className="profile-button">Profile</button> */}
              <Link to="/cart">Cart</Link>
              <Link to="/login">Login</Link>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="book/:id" element={<Book/>}/>
        </Routes>
        <main>{/* <BookList /> */}</main>

        <footer>
          <p>
            Prometeus <a href="https://github.com/janedoe/bookstore">GitHub</a>.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
