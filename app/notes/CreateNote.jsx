"use client";
import React, { useState } from "react";
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async (e) => {
    try {
      await pb
        .autoCancellation(false)
        .collection("notes")
        .create({ title: title, content: content });
    } catch (e) {
      console.log(e.isAbort);
    }

    // setContent("");
    // setTitle("");
  };

  return (
    <form onSubmit={create}>
      <h2>Create Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
