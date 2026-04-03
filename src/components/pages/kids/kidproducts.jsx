import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../productCard';

const Kidproducts = () => {
  const [kidItems, setkidItems] = useState([]); 
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const subCategory = queryParams.get('subCategory');
        let url = "http://localhost:3000/api/products/kids";
        
        if (subCategory) {
          url += `?subCategory=${subCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        setkidItems(data.AllProduct || data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [location.search]);

  return (
    <ProductCard category={kidItems}></ProductCard>
  )
}

export default Kidproducts;

