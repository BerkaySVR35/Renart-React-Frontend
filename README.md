Renart-React-Frontend
Bu depo api'den gelen veri doğrultusunda product list uygulamasının ön yüzünü oluşturan bir React projesidir. Ürünleri listeler, dinamik renk seçenekleri sunar ve kullanıcıların ürün derecelendirmelerini görüntüler.

İçindekiler
Özellikler

Teknolojiler

Kurulum

Kullanım

API Entegrasyonu

Katkıda Bulunma

Lisans

Özellikler
Dinamik Ürün Listeleme: Netlify Function üzerinden çekilen ürün verilerini görüntüler.

Ürün Kartları: Her ürün için ad, fiyat, resim ve derecelendirme içeren şık kartlar.

Dinamik Renk Seçimi: Ürün kartları üzerinde bulunan renk seçenekleri ile ürün resmini ve seçili renk etiketini dinamik olarak değiştirme.

Yıldız Derecelendirme: API'den gelen popülerlik puanına göre yıldızları dinamik olarak doldurma ve fare etkileşimli derecelendirme (hover/click).

Swiper Entegrasyonu: Ürün kartlarını kaydırılabilir bir karusel içinde sergileme.

Responsive Tasarım: Farklı ekran boyutlarına uyumlu, duyarlı kullanıcı arayüzü.

Yükleme ve Hata Durumu Yönetimi: Veri çekme sırasında yükleme ve hata durumlarını kullanıcıya bildirme.

Teknolojiler
Bu proje aşağıdaki temel teknolojileri kullanılarak geliştirilmiştir:

React: Kullanıcı arayüzü oluşturmak için JavaScript kütüphanesi.

Tailwind CSS: Hızlı ve duyarlı UI geliştirmesi için bir yardımcı sınıf CSS framework'ü.

Swiper: Modern dokunmatik kaydırıcı (slider) kütüphanesi.

Axios: HTTP istekleri yapmak için Promise tabanlı HTTP istemcisi.

JavaScript (ES6+): Uygulama mantığı için programlama dili.

Kurulum
Projeyi yerel geliştirme ortamınızda kurmak ve çalıştırmak için aşağıdaki adımları izleyin:

Depoyu Klonlayın:

git clone https://github.com/BerkaySVR35/Renart-React-Frontend.git

Proje Dizinine Gidin:

cd Renart-React-Frontend

Bağımlılıkları Yükleyin:

npm install
# veya
yarn install

Uygulamayı Başlatın:

npm start
# veya
yarn start

Uygulama varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

Kullanım
Uygulama başlatıldıktan sonra, ana sayfada ürün listesini göreceksiniz. Ürün kartları arasında gezinmek için Swiper oklarını kullanabilirsiniz. Her bir ürün kartında, farklı renk seçeneklerini temsil eden küçük radyo butonları bulunur. Bu butonlara tıklayarak ürün resmini ve altındaki renk etiketini dinamik olarak değiştirebilirsiniz. Ayrıca, ürünün popülerlik puanına göre dolan yıldız derecelendirmesini de göreceksiniz.

API Entegrasyonu
Ürün verileri aşağıdaki Netlify Function API'sinden çekilmektedir:

https://renart-backend.netlify.app/.netlify/functions/product

Bu API, ürün adları, fiyatlar, resimler ve renk bilgileri gibi verileri sağlar.

Katkıda Bulunma
Katkılarınız her zaman memnuniyetle karşılanır! Herhangi bir hata bulursanız veya yeni bir özellik önermek isterseniz lütfen bir "issue" açın veya bir "pull request" gönderin.

Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.
