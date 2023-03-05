import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import NotFoundPage from "./components/NotFoundPage";
import Book from "./components/Book";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("user");
    setLoggedIn(false);
  }

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
              <Link to="/booklist">Logo</Link>
            </div>
            <div className="nav-buttons">
              <Link to="/cart">Cart</Link>
              {/* <Link to="/">Login</Link> */}
              {loggedIn && (
                <div>
                  Logged in as {localStorage.getItem("user")}.
                  <button onClick={handleLogout}>Sign out</button>
                </div>
              )}
            </div>
          </nav>
        </header>
        <Routes>
          {/* <Route path="/booklist" element={<BookList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="book/:id" element={<Book />} /> */}
          <Route
            path="/"
            element={
              loggedIn ? <Navigate to="/booklist" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/booklist"
            element={loggedIn ? <BookList /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/cart"
            element={loggedIn ? <Cart /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/booklist" replace />
              ) : (
                <LoginPage onLogin={() => setLoggedIn(true)} />
              )
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="book/:id" element={<Book />} />
        </Routes>
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
