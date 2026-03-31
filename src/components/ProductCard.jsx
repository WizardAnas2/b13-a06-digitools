import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (

    <div className="card bg-base-100 shadow-xl border border-base-300">
      <figure className="px-10 pt-10">
        <img src={product.icon} alt={product.name} className="rounded-xl h-20 w-20 object-contain" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-4xl font-bold">{product.name}</h2>
          <div className={`badge ${product.tagType === 'popular' ? 'badge-secondary' : 'badge-accent'}`}>
            {product.tag}
          </div>
        </div>
        <p className="text-sm opacity-70 whitespace-pre-line">{product.description}</p>
        <div className="my-2">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="text-sm opacity-50">/{product.period}</span>
        </div>
        <ul className="text-xs list-disc list-inside mb-4">
          {product.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <div className="card-actions mt-auto">
          <button 
            onClick={handleAdd}
            className={`btn w-full rounded-full ${isAdded ? 'btn-success text-white text-xl' : 'btn-primary text-white text-xl'}`}
          >
            {isAdded ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;