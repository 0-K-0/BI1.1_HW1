import useFetch from "./useFetch";
const BookByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://bi1-1-hw1-be.onrender.com/books/title/${title}`,
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>an error oquired</p>;
  if (!data) return <p>Book not found</p>;
  return (
    <>
      <h1>{data.title}</h1>
      <ul>
        <li>
          <b>Author:</b>
          {data.author}
        </li>
        <li>
          <b>Release Year:</b>
          {data.releaseYear}
        </li>
        <li>
          <b>Genre:</b>
          {data.genre}
        </li>
      </ul>
    </>
  );
};
export default BookByTitle;
