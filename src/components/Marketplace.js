// import React from "react";

// function Marketplace() {
//   return (
//     <div>
//       <h1>Marketplace</h1>
//       <p>Buy and sell items.</p>
//     </div>
//   );
// }

// export default Marketplace;

import React, { useState } from "react";
import "./Marketplace.css";

function Marketplace() {
  // Dữ liệu mẫu sản phẩm
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 14",
      description: "Latest model of iPhone, 128GB, brand new.",
      price: "$799",
      image: "https://via.placeholder.com/300x150?text=iPhone+14",
    },
    {
      id: 2,
      title: "MacBook Pro 2023",
      description: "Apple MacBook Pro 16-inch, 512GB SSD, 16GB RAM.",
      price: "$2399",
      image: "https://via.placeholder.com/300x150?text=MacBook+Pro",
    },
    {
      id: 3,
      title: "Nike Air Max 2023",
      description: "Comfortable and stylish sneakers.",
      price: "$150",
      image: "https://via.placeholder.com/300x150?text=Nike+Air+Max",
    },
    {
      id: 4,
      title: "Canon EOS R5",
      description: "Mirrorless camera with 45MP, perfect for photography.",
      price: "$3899",
      image: "https://via.placeholder.com/300x150?text=Canon+EOS+R5",
    },
  ]);

  return (
    <div className="marketplace-page">
      <header className="marketplace-header">
        <h1>Marketplace</h1>
        <p>Buy and sell items with your friends on Facebook Marketplace.</p>
      </header>

      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
