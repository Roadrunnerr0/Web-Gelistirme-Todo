import { createTodo } from "../interfaces/todoInterfaces.js";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    const todo = createTodo(title, description);
    onAdd(todo);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-slate-50 border border-slate-200 rounded-lg p-4"
    >
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Görev Başlığı
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Örn: Alışveriş yap"
          className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Açıklama (opsiyonel)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Görevle ilgili kısa bir not ekleyin..."
          rows={3}
          className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Görev Ekle
        </button>
      </div>
    </form>
  );
}

