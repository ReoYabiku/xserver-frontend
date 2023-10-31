import style from "./BookCard.module.css";

type BookCardProps = {
  title: string,
  author: string,
}

export default function BookCard({ title, author }: BookCardProps) {
  return (
    <div className={style.card}>
      <h3>{title}</h3>
      <p>{author}</p>
      
    </div>
  );
}