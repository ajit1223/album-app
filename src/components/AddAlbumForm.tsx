type Props = {
  title: string;
  setTitle: (value: string) => void;
  onAdd: () => void;
};

export default function AddAlbumForm({ title, setTitle, onAdd }: Props) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter album title"
        className="border border-white/40 bg-white/20 backdrop-blur text-white placeholder-white/70 p-3 rounded-xl w-96 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      <button
        onClick={onAdd}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition"
      >
        Add
      </button>
    </div>
  );
}
