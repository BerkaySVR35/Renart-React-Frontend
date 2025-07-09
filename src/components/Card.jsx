import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";

export default function Card({ product }) {
  const [selectedColor, setSelectedColor] = useState();

  function handleColorChange(e) {
    setSelectedColor(e.target.value);
  }

  // Seçili renge göre resim URL'sini belirlemek.
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images.find((img) => img.color === selectedColor)?.url ||
        product.images[0].url
      : "https://placehold.co/400x300/cccccc/333333?text=Resim+Yok";

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      setSelectedColor(product.images[0].color);
    }
  }, [product]);

  return (
    <div className="card border-0" style={{ width: "18rem" }}>
      <img
        src={imageUrl}
        alt={product.name}
        className="card-img-top rounded-5"
      />
      <div className="card-body">
        <h5 className="card-title ProductTitle">{product.name}</h5>
        <p className="card-text">
          <span className="ProductPrice">
            $ {parseFloat(product.price).toFixed(2)} USD
          </span>
        </p>

        <span>
          <span className="d-flex">
            {product.images.map((img, index) => (
              <div className="form-check">
                <input
                  className={`form-check-input d-flex ${
                    selectedColor === img.color ? "border-dark" : ""
                  }`}
                  style={{
                    backgroundColor:
                      img.color === "yellow"
                        ? "#E6CA97"
                        : "#D9D9D9" && img.color === "rose"
                        ? "#E1A4A9"
                        : "#D9D9D9",
                  }}
                  type="radio"
                  value={img.color}
                  checked={selectedColor === img.color}
                  onChange={handleColorChange}
                />
              </div>
            ))}
          </span>
        </span>
        <p>
          <span>
            <label className="form-check-label py-1  ColorText">
              {selectedColor}
            </label>
          </span>
        </p>
        <div>
          <span className="d-flex">
            <StarRating product={product} />
          </span>
        </div>
      </div>
    </div>
  );
}
