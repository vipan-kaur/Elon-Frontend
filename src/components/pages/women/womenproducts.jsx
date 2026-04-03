import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../productCard';

const Womenproducts = () => {
  const [womenItems, setwomenItems] = useState([]); 
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const subCategory = queryParams.get('subCategory');
        let url = "http://localhost:3000/api/products/women";
        
        if (subCategory) {
          url += `?subCategory=${subCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        setwomenItems(data.AllProduct || data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [location.search]);

  return (
    <ProductCard category={womenItems}></ProductCard>
  )
}

export default Womenproducts;