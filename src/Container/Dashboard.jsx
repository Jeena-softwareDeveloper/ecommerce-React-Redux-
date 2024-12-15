import React from 'react';
import ProductCard from '../components/ProductCard';
import { List } from '../data/ProductList';

function Dashboard() {
  return (
    <div style={{ display: 'flex',marginTop:'10px', alignItems: 'center', flexWrap: 'wrap',justifyContent:'space-around'}}>
      {
        List.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      }
    </div>
  );
}

export default Dashboard;
