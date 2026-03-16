# Modern TODO Uygulaması (React + Tailwind)

Bu proje, frontend eğitiminde verilen **TODO App** ödevine göre hazırlanmış basit bir görev yönetimi uygulamasıdır. Modern bir Javascript kütüphanesi olan **React** ve stil için **Tailwind CSS** kullanılmıştır.

## Proje Yapısı

- `index.html`  
  - React, ReactDOM ve Tailwind CSS CDN üzerinden eklenmiştir.  
  - Tüm React bileşenleri tek bir `<script type="text/babel">` bloğu içinde yazılmıştır.  
- Bileşenler (index.html içindeki React kodunda):
  - `App` – Sekmeli ana layout (`Görevler` ve `Hakkında` sayfaları)
  - `TodoPage` – TODO listesi sayfası
  - `AboutPage` – Proje açıklamalarının olduğu ek ekran
  - `TodoForm`, `TodoList`, `TodoItem` – Görev ekleme, listeleme, güncelleme ve silme bileşenleri

## Ödev Yönergesi ile Eşleşme

- **Modern Javascript kütüphanesi**: React kullanıldı.  
- **Klasör yapısı**: Proje geliştirilirken `Components`, `Pages`, `Interfaces` klasörleri kullanılmış, sonrasında Netlify dağıtımı için kod tek HTML dosyasında birleştirilmiştir.  
- **Stil kütüphanesi**: Tailwind CSS (CDN) kullanıldı.  
- **TODO fonksiyonları**:
  - Görev **ekleme** (`TodoForm`)
  - Görev **listeleme** (`TodoList`)
  - Görev **güncelleme / düzenleme** (`TodoItem` içinde düzenleme modu)
  - Görev **silme** (`Sil` butonu)
  - Tamamlanan görev sayısı gösterimi  
- **Ek ekran**: `AboutPage` bileşeni ile `Hakkında` sekmesinde ayrı bir sayfa oluşturuldu.

## Çalıştırma

Yerel olarak projeyi çalıştırmak için:

1. `todo-app` klasörünü bilgisayarınıza indirin (veya klonlayın).  
2. `index.html` dosyasına çift tıklayın veya herhangi bir statik sunucu ile açın.  
3. Tarayıcıda **Modern TODO Uygulaması** arayüzü açılacaktır.

## GitHub ve Netlify Dağıtımı

- **GitHub**  
  - Yeni bir public repository oluşturun.  
  - `todo-app` klasörünün içeriğini reponun kök dizinine kopyalayın.  
  - `index.html` ve bu `README.md` dosyasını commit edip push’layın.

- **Netlify**  
  - `todo-app` klasörünü zipleyin (içinde `index.html` bulunmalı).  
  - Netlify hesabınızda **Deploy manually → Drag & drop** ile zip dosyasını yükleyin.  
  - Oluşan URL’yi ödev teslim formuna ekleyin.

Bu README, projenin ödev yönergesindeki maddeleri nasıl karşıladığını açıklamak için hazırlanmıştır.

