import React, { useEffect, useState } from "react";
import "./BookList.css";

function BookList() {
  const [books, setBooks] = useState([]);
  //Get Method
  const apiGet = () => {
    fetch("https://api.npoint.io/be067bec4acffe915ca5")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setBooks(json);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);

  const [selectedOption, setSelectedOption] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books
    .filter((book) => {
      switch (selectedOption) {
        case "lessThan15":
          return book.price < 15;
        case "between15And30":
          return book.price >= 15 && book.price <= 30;
        case "moreThan30":
          return book.price > 30;
        default:
          return true;
      }
    })
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="book-list-main">
      <div className="book-list-search-conteiner">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="all">All books</option>
          <option value="lessThan15">Price less than 15</option>
          <option value="between15And30">Price between 15 and 30</option>
          <option value="moreThan30">Price more than 30</option>
        </select>
      </div>
      <div className="book-list-content">
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              {/* <img
                src={book.image.length === 0 ? defaultImage : book.image}
                src={book.image}
                alt={book.title}
              /> */}
              {book.image ? (
                <img src={book.image} alt={book.title} />
              ) : (
                <img
                  src="https://via.placeholder.com/300x300.png?text=No+Image"
                  alt="NoImage"
                />
              )}
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.price} USD</p>
              <button>View Book</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookList;
