"use client"

import { useState } from 'react';
import style from './AddBook.module.css';
import SaveButton from './SaveButton';

type Book = {
  id: string,
  title: string,
  author: string,
};
const emptyBook = {
  id: "",
  title: "",
  author: "",
};
export default function AddBook() {
  const [newBook, setNewBook] = useState<Book>(emptyBook);

  const handleInputFor = (value: string) => (e: React.ChangeEvent<HTMLInputElement>)=>{
    setNewBook({...newBook, [value]: e.target.value});
  };

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>作者</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input className={style.input} type="text" size={25} onChange={handleInputFor("title")} /></td>
            <td><input className={style.input} type="text" size={25} onChange={handleInputFor("author")} /></td>
          </tr>
        </tbody>
      </table>
      <SaveButton newBook={newBook} />
    </div>
  )
}