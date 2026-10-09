import useFetch from "./useFetch";
const AllBooks = () => {
  const { data, loading, error } = useFetch(
    "https://bi1-1-hw1-be.onrender.com/allBooks",
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>an error oquired</p>;
  if (!data) return <p>Book not found</p>;

  return (
    <>
      <h1>All Books</h1>
      <ul>
        {data?.map((book) => (
          <li>{book.title}</li>
        ))}
      </ul>
    </>
  );
};
export default AllBooks;
