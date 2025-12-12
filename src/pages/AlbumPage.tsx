import React, { useEffect, useState } from "react";
import {
  addAlbum,
  deleteAlbum,
  fetchAlbums,
  updateAlbum,
} from "../services/api";
import AddAlbumForm from "../components/AddAlbumForm";
import AlbumList from "../components/AlbumList";
type Album = {
  userId: number;
  id: number;
  title: string;
};

const AlbumPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  async function handleAlbum() {
    if (!title.trim()) return;
    const newAlbum = await addAlbum(title);
    setAlbums([...albums, newAlbum]);
    setTitle("");
  }

  // update handler
  async function handleUpdate(id: number) {
    await updateAlbum(id, editTitle);

    setAlbums(
      albums.map((album) =>
        album.id === id ? { ...album, title: editTitle } : album
      )
    );
    setEditingId(null);
  }

  // delete handler
  async function handleDelete(id: number) {
    await deleteAlbum(id);
    setAlbums(albums.filter((album) => album.id !== id));
  }

  useEffect(() => {
    async function load() {
      const data = await fetchAlbums();
      setAlbums(data);
    }
    load();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8">
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
        <h1 className="text-5xl font-extrabold text-white drop-shadow mb-8">
          Albums Manager
        </h1>

        {/* AddAlbumForm */}
        <AddAlbumForm title={title} setTitle={setTitle} onAdd={handleAlbum} />

        {/* AlbumList */}
        <AlbumList
          albums={albums}
          editingId={editingId}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          setEditingId={setEditingId}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default AlbumPage;
