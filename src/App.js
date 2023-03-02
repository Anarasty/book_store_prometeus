import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
// Book data (mocked)

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <BookList />
      </main>
    
      <footer>
        <p>
          This bookstore was created by Jane Doe. Source code is available on{" "}
          <a href="https://github.com/janedoe/bookstore">GitHub</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
