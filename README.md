## Modern TODO Uygulaması (React + Tailwind)

Bu proje, frontend eğitiminde verilen **TODO App** ödevi kapsamında hazırlanmış, tarayıcıda çalışan basit bir görev yönetimi uygulamasıdır.

- **UI**: React 18 (CDN/UMD) + Tailwind CSS (CDN)
- **Çalışma şekli**: Tek dosya `index.html` içinde (Babel ile tarayıcıda JSX derlenir)
- **Veri saklama**: `localStorage` (sayfa yenilense bile görevler korunur)

> Not: Repoda ayrıca modüler bir kaynak kod yapısı (`src/`) bulunuyor. Ancak **uygulamanın çalışan sürümü** şu an `index.html` içindeki `<script type="text/babel">` bloğudur.

## Özellikler

- **Görev ekleme**: Başlık zorunlu, açıklama opsiyonel
- **Görev listeleme**: Toplam ve tamamlanan sayaçları
- **Tamamlandı / Yeniden Aç**: Görev durumunu değiştirir
- **Düzenleme**: Başlık/açıklama güncelleme (kaydet/vazgeç)
- **Silme**: Görevi listeden kaldırır
- **Kalıcı kayıt**: `localStorage` ile otomatik kaydetme

## Proje Yapısı

- **`index.html`**
  - React, ReactDOM, Tailwind ve Babel CDN üzerinden eklenir.
  - Tüm bileşenler tek dosyada tanımlıdır: `TodoForm`, `TodoItem`, `TodoList`, `TodoPage`, `AboutPage`, `App`.
  - Başlangıç noktası: `createRoot(...).render(<App />)`
- **`src/`** (modüler kaynaklar)
  - **`src/components/`**: `TodoForm.jsx`, `TodoList.jsx`, `TodoItem.jsx`
  - **`src/pages/`**: `AppPage.jsx`, `TodoPage.jsx`, `AboutPage.jsx`
  - **`src/interfaces/`**: `todoInterfaces.js` (ör. `createTodo`)

## Uygulama Akışı (Kısa Teknik Özet)

- **Todo modeli**: `{ id, title, description, completed }`
- **ID üretimi**: `crypto.randomUUID()`
- **State yönetimi**: `TodoPage` içinde `useState`
- **Persist**: `useEffect` ile her değişimde `localStorage.setItem("todos", JSON.stringify(todos))`
- **Sekmeler**: `App` bileşeninde `activeTab` ile `Görevler` / `Hakkında`

## Kurulum / Çalıştırma

Bu proje bir build aracı gerektirmeden çalışır:

1. `todo-app` klasörünü açın.
2. **`index.html`** dosyasını tarayıcıda açın.

> İpucu: Bazı ortamlarda dosyayı direkt açmak yerine küçük bir statik sunucu ile çalıştırmak daha sağlıklıdır (opsiyonel).

## Ödev Yönergesi ile Eşleşme

- **Modern Javascript kütüphanesi**: React kullanıldı.
- **Stil kütüphanesi**: Tailwind CSS kullanıldı.
- **İstenen TODO fonksiyonları**: ekleme, listeleme, güncelleme/düzenleme, silme, tamamlanan sayaç.
- **Ek ekran**: `AboutPage` ile `Hakkında` sekmesi.

## Dağıtım (GitHub / Netlify)

- **GitHub**
  - `todo-app/` içeriğini repoya koyup push’layın (`index.html` ve `README.md` dahil).
- **Netlify (manuel)**
  - `todo-app` klasörünü zipleyin (zip’in kökünde `index.html` olmalı).
  - Netlify’da **Deploy manually → Drag & drop** ile yükleyin.
  - Oluşan URL’yi teslim formuna ekleyin.

