import AlbumItem from "./AlbumItem";

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Props = {
  albums: Album[];
  editingId: number | null;
  editTitle: string;
  setEditTitle: (v: string) => void;
  setEditingId: (id: number | null) => void;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function AlbumList({
  albums,
  editingId,
  editTitle,
  setEditTitle,
  setEditingId,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <ul className="space-y-3">
      {albums.map((album) => (
        <AlbumItem
          key={album.id}
          album={album}
          editingId={editingId}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          setEditingId={setEditingId}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
