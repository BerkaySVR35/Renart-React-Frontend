import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  gap: "1rem",
  alignItems: "center", // Yıldızları ve metni dikeyde hizala
};
const itemContainerStyle = {
  display: "flex",
  gap: ".2rem",
};
const textStyle = {
  margin: "0",
  marginLeft: "0.5rem", // Metin ile yıldızlar arasına boşluk ekle
  fontSize: "0.9rem", // Metin boyutunu ayarla
  color: "#555", // Metin rengini ayarla
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  product: PropTypes.object.isRequired, // product prop'unun zorunlu olduğunu belirt
  onRating: PropTypes.func, // onRating prop'unun fonksiyon olduğunu belirt
};

export default function StarRating({ product, onRating }) {
  // popularityScore'u başlangıç derecelendirmesi olarak ayarla
  // API'den gelen değer string olabilir, parseFloat ile sayıya çeviriyoruz
  const initialRating = parseFloat(product.weight) || 0;
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  // product.popularityScore değiştiğinde rating'i güncelle
  useEffect(() => {
    setRating(parseFloat(product.weight) || 0);
  }, [product.weight]);

  function handleSetRating(newRating) {
    setRating(newRating);
    // Eğer onRating prop'u varsa çağır
    if (onRating) {
      onRating(newRating);
    }
  }

  return (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            key={i}
            // Yıldızın dolu olup olmadığını belirlerken hoverRating veya mevcut rating'i kullan
            fill={i + 1 <= (hoverRating || rating)}
          />
        ))}
      </div>
      {/* popularityScore'u göster */}
      <p style={textStyle}>
        {product.popularityScore
          ? `${parseFloat(product.weight).toFixed(1)} / 5`
          : "0.0 / 5"}
      </p>
    </div>
  );
}

function Star({ onRating, fill, onHoverEnter, onHoverLeave }) {
  return (
    <span
      onClick={onRating}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      style={{ cursor: "pointer" }}
    >
      {fill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="#fcc419" // Dolu yıldız rengi
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="#ccc" // Boş yıldız rengi (gri tonu)
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
        </svg>
      )}
    </span>
  );
}
