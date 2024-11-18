import React from 'react';

function ProductItem({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
