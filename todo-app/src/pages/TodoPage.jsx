import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";

export default function TodoPage() {
  const [todos, setTodos] = React.useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const handleToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Görev Yönetimi
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          Aşağıdaki formu kullanarak yeni görevler ekleyebilir, mevcut görevleri
          güncelleyebilir veya silebilirsiniz.
        </p>
        <TodoForm onAdd={handleAdd} />
      </section>

      <section className="border-t border-slate-200 pt-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">
          Görev Listesi
        </h3>
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </section>
    </div>
  );
}

