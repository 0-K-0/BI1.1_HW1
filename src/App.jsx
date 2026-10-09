import AllBooks from "./AllBooks.jsx";
import BookByAuthor from "./BookyByAuthor.jsx";
import BookByTitle from "./BookByTitle.jsx";
const App = () => {
  return (
    <main>
      <AllBooks />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
    </main>
  );
};
export default App;
