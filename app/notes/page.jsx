import React from "react";
import Link from "next/link";
import PocketBase from "pocketbase";
import styles from "./Notes.module.css";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function NotesPage() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const result = await db.collection("notes").getList(1, 10);

  return (
    <div>
      <h2>Notes</h2>
      <div className={styles.grid}>
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
      <div className={styles.note}>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          {new Date(created).toLocaleString("en-GB", {
            timeZone: "UTC",
            dateStyle: "short",
            timeStyle: "short",
          })}
        </p>
      </div>
    </Link>
  );
}
