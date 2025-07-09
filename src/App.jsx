import React, { useState, useEffect } from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import axios from "axios";

import Card from "./components/Card";

const App = () => {
  // Ürün verilerini saklamak için state
  const [products, setProducts] = useState([]);
  // Yükleme durumunu yönetmek için state
  const [loading, setLoading] = useState(true);
  // Hata durumunu yönetmek için state
  const [error, setError] = useState(null);

  // Veri çekme işlemi için useEffect hook
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Axios ile API'den veri çekme
        const response = await axios.get(
          "https://renart-backend.netlify.app/.netlify/functions/product"
        );
        // Axios yanıtından gelen veri 'data' tutuluyor
        const data = response.data;

        //console.log(data);

        // Ürün verilerini state'e aktarma
        setProducts(data);
      } catch (err) {
        // Hata durumunda hatayı state'e ayarlama
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Boş bağımlılık dizisi, bileşen yüklendiğinde bir kez çalışmasını sağlar

  // Yükleme durumunda gösterilecek UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Yükleniyor...
        </div>
      </div>
    );
  }

  // Hata durumunda gösterilecek UI
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-red-600 text-xl font-semibold">Hata: {error}</div>
      </div>
    );
  }

  // Ürünler yüklendiğinde gösterilecek UI
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8 font-inter">
      <header className="text-center mb-8">
        <h1 className="HeaderAvenu">Ürün Listesi</h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Mevcut tüm ürünlerimize göz atın.
        </p>
      </header>

      <div className="max-w-6xl mx-auto">
        {" "}
        <Swiper
          // Swiper modüllerini ekleyin
          modules={[Navigation, Pagination]}
          // Navigasyon oklarını etkinleştir
          navigation
          // Sayfalama noktalarını etkinleştir
          pagination={{ clickable: true }}
          // Farklı ekran boyutları için responsive ayarlar
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper pb-5"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id} className="flex justify-center">
              {" "}
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default App;
