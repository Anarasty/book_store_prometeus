import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://api.npoint.io/be067bec4acffe915ca5/${id}`)
      .then(response => response.json())
      .then(data => setBook(data)) 
      .catch(error => console.error(error));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Price: {book.price}</p>
      <p>Description: {book.description}</p>
    </div>
  );
}

export default Book;