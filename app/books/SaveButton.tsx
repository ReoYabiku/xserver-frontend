"use client"

import { useRouter } from 'next/navigation';
import style from "./SaveButton.module.css";

type Book = {
  id: string,
  title: string,
  author: string,
};
type SaveButtonProps = {
  newBook: Book,
}
export default function SaveButton({ newBook }: SaveButtonProps) {
  const router = useRouter();

  const handleClick = async () => {
    await fetch('/api/new_book', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }).then(res => res);
    router.refresh();
  }

  return <button className={style.button} onClick={handleClick}>追加</button>;
}