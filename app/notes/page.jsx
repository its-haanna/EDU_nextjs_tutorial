import React from "react";
import Link from "next/link";
import PocketBase from "pocketbase";

export default async function NotesPage() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const result = await db.collection("posts").getList(1, 10);

  return (
    <div>
      <h2>Notes</h2>
      <div>
        {result.items.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{created}</p>
      </div>
    </Link>
  );
}
