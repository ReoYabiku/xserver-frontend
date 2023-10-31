import AddBook from './AddBook';
import BookCard from './BookCard';
import style from "./page.module.css";

type Book = {
  id: string,
  title: string,
  author: string,
};


export default async function Page() {
  const books: Book[] = await fetch('http://127.0.0.1:5000/books', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then(res => res.json())


  return (
    <div className={style.fillScreen}>
      <h2 className={style.title}>本の一覧</h2>
      <div className={style.flex}>
        {
          books.map(book => <BookCard key={book.author} title={book.title} author={book.author} />)
        }
      </div>
      <h2 className={style.title}>本を追加する</h2>
      <AddBook />
    </div>
  );
}
