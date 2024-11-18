import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  const initialProducts = [
    { id: 1, name: 'Matcha Latte', price: '$4.50', description: 'A creamy blend of matcha and milk.' },
    { id: 2, name: 'Matcha Cheesecake', price: '$5.00', description: 'A rich and tangy cheesecake infused with matcha.' },
    { id: 3, name: 'Iced Matcha Tea', price: '$3.75', description: 'Refreshing cold-brewed matcha tea.' }
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Matcha Cafe Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
}

export default App;
