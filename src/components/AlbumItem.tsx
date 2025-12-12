import React from "react";

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Props = {
  album: Album;
  editingId: number | null;
  editTitle: string;
  setEditTitle: (val: string) => void;
  setEditingId: (id: number | null) => void;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function AlbumItem({
  album,
  editingId,
  editTitle,
  setEditTitle,
  setEditingId,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <li className="flex items-center gap-4 bg-purple-500 backdrop-blur-lg p-4 rounded-xl shadow-md hover:scale-[1.02] transition">
      {editingId === album.id ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="bg-white/70 text-black p-2 rounded-lg flex-1"
          />

          <button
            onClick={() => onUpdate(album.id)}
            className="bg-blue-400 text-black px-3 py-1 rounded-lg hover:bg-blue-500 hover:scale-105 transition"
          >
            Save
          </button>

          <button
            onClick={() => setEditingId(null)}
            className="bg-gray-400 text-black px-3 py-1 rounded-lg hover:bg-gray-500 hover:scale-105 transition"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="text-white font-bold">{album.id}.</span>
          <span className="text-white flex-1">{album.title}</span>

          <button
            onClick={() => {
              setEditingId(album.id);
              setEditTitle(album.title);
            }}
            className="bg-green-400 text-black px-3 py-1 rounded-lg hover:bg-green-500 hover:scale-105 transition"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(album.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 hover:scale-105 transition"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
