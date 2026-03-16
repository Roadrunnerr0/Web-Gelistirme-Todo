export default function AboutPage() {
  return (
    <div className="space-y-4">
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Proje Hakkında
        </h2>
        <p className="text-sm text-slate-600">
          Bu sayfa, ödev yönergesinde istenen &quot;ekstra ekran&quot; için
          hazırlanmıştır. Modern bir Javascript kütüphanesi olan React ve
          Tailwind CSS kullanılarak geliştirilmiş bir TODO uygulaması
          örneğidir.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            Kullanılan Teknolojiler
          </h3>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>React (CDN üzerinden)</li>
            <li>ReactDOM</li>
            <li>Tailwind CSS</li>
            <li>LocalStorage (veri saklama)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            Uygulama Özellikleri
          </h3>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Görev ekleme</li>
            <li>Görev listeleme</li>
            <li>Görev güncelleme (düzenleme)</li>
            <li>Görev silme</li>
            <li>Tamamlanan görev sayısını gösterme</li>
          </ul>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-semibold text-slate-800 mb-2">
          Ekran Görüntüsü Notu
        </h3>
        <p className="text-sm text-slate-600">
          Ödevi teslim etmeden önce tarayıcıda uygulamayı açıp bir ekran
          görüntüsü alarak teslim formuna ekleyebilirsiniz.
        </p>
      </section>
    </div>
  );
}

