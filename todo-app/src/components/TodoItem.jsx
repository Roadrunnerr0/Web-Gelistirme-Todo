export default function TodoItem({ todo, onToggleComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(todo.title);
  const [editDescription, setEditDescription] = React.useState(todo.description);

  const handleSave = () => {
    if (!editTitle.trim()) return;
    onUpdate({
      ...todo,
      title: editTitle.trim(),
      description: editDescription.trim(),
    });
    setIsEditing(false);
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex-1">
        {isEditing ? (
          <div className="space-y-2">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full rounded-md border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              rows={2}
              className="w-full rounded-md border-slate-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        ) : (
          <>
            <h3
              className={`text-sm font-semibold ${
                todo.completed ? "line-through text-slate-400" : "text-slate-800"
              }`}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p className="mt-1 text-sm text-slate-600">{todo.description}</p>
            )}
          </>
        )}
      </div>

      <div className="flex gap-2 justify-end sm:justify-start">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`rounded-md px-3 py-1 text-xs font-medium border ${
            todo.completed
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-slate-50 text-slate-700 border-slate-200"
          }`}
        >
          {todo.completed ? "Yeniden Aç" : "Tamamlandı"}
        </button>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Kaydet
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditTitle(todo.title);
                setEditDescription(todo.description);
              }}
              className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
            >
              Vazgeç
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="rounded-md bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 hover:bg-sky-100 border border-sky-200"
          >
            Düzenle
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="rounded-md bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 hover:bg-rose-100 border border-rose-200"
        >
          Sil
        </button>
      </div>
    </li>
  );
}

