import TodoPage from "./TodoPage.jsx";
import AboutPage from "./AboutPage.jsx";

const TABS = {
  TODO: "TODO",
  ABOUT: "ABOUT",
};

export default function AppPage() {
  const [activeTab, setActiveTab] = React.useState(TABS.TODO);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Modern TODO Uygulaması
        </h1>
        <p className="text-slate-600">
          React ve Tailwind CSS kullanılarak hazırlanmış basit bir görev
          yönetimi projesi.
        </p>
      </header>

      <nav className="flex gap-2 mb-8 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab(TABS.TODO)}
          className={`px-4 py-2 rounded-t-md text-sm font-medium ${
            activeTab === TABS.TODO
              ? "bg-white border border-b-white border-slate-200 text-indigo-600"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Görevler
        </button>
        <button
          onClick={() => setActiveTab(TABS.ABOUT)}
          className={`px-4 py-2 rounded-t-md text-sm font-medium ${
            activeTab === TABS.ABOUT
              ? "bg-white border border-b-white border-slate-200 text-indigo-600"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Hakkında
        </button>
      </nav>

      <main className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {activeTab === TABS.TODO ? <TodoPage /> : <AboutPage />}
      </main>
    </div>
  );
}

