import { NextResponse } from 'next/server';

type Book = {
  id: string,
  title: string,
  author: string,
};
export async function POST(request: Request) {
  const book = await request.json();
  const res = await SaveBook(book);
  return NextResponse.json(res);
}

async function SaveBook(book: Book): Promise<number> {
  await fetch('http://127.0.0.1:5000/book/new', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  }).then(res => res.json());

  return 0;
}