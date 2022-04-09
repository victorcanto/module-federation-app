import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/products.service';
import { currency } from '../utils/currency.util';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export default function HomeContent() {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    debugger;
    getProducts().then(setProducts);
   
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a href="">{product.name}</a>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
