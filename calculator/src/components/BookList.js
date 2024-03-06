import "./BookList.css";

const BookList = ({ listBook }) => {
  return (
    <div className="list-book-container">
      {listBook.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </div>
  );
};

export default BookList;
