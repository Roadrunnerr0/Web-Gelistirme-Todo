import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, onToggleComplete, onDelete, onUpdate }) {
  if (!todos.length) {
    return (
      <p className="text-sm text-slate-500 bg-slate-50 border border-dashed border-slate-300 rounded-lg p-4 text-center">
        Henüz hiç görev yok. Yukarıdaki formu kullanarak ilk görevinizi ekleyin.
      </p>
    );
  }

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Toplam: {todos.length}</span>
        <span>Tamamlanan: {completedCount}</span>
      </div>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

