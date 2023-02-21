import styles from "../Notes.module.css";
import React from "react";
import PocketBase from "pocketbase";

export default async function NotePage({ params }) {
  const db = new PocketBase("http://127.0.0.1:8090");
  const note = await db.collection("notes").getOne(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>
          {new Date(note.created).toLocaleString("en-GB", {
            timeZone: "UTC",
            dateStyle: "short",
            timeStyle: "short",
          })}
        </p>
      </div>
    </div>
  );
}
