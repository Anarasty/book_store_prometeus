import React, { useState } from "react";
import "./BookList.css";

function BookList() {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 15.99,
      cover:
        "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 9.99,
      cover:
        "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 80.99,
      cover:
        "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
    },
    {
      id: 4,
      title: "Lorem inpus dolore",
      author: "Hello world",
      price: 29.99,
      cover:
        "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
    },
  ];

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
              <img src={book.cover} alt={book.title} />
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
