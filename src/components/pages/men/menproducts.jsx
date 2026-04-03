import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../productCard';

const Menproducts = () => {
  const [MenItems, setMenItems] = useState([]); 
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const subCategory = queryParams.get('subCategory');
        let url = "http://localhost:3000/api/products/men";
        
        if (subCategory) {
          url += `?subCategory=${subCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        setMenItems(data.AllProduct || data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [location.search]);

  return (
    <ProductCard category={MenItems}></ProductCard>
  )
}

export default Menproducts;

