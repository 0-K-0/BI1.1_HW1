import useFetch from "./useFetch";
const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://bi1-1-hw1-be.onrender.com/books/author/${author}`,
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>an error oquired</p>;
  if (!data) return <p>Book not found</p>;
  return (
    <>
      <h1>Books By {data.author} </h1>
      <ul>
        {data.map((book) => (
          <li>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default BookByAuthor;
