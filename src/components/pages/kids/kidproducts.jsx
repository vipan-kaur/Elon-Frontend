import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../productCard';
import Loader from '../../ui/loader';
import { API_ENDPOINTS } from '../../../config/apiConfig';

const Kidproducts = () => {
  const [kidItems, setkidItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams(location.search);
        const subCategory = queryParams.get('subCategory');
        let url = API_ENDPOINTS.GET_PRODUCTS_KIDS;
        
        if (subCategory) {
          url += `?subCategory=${subCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setkidItems(data.AllProduct || data); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [location.search]);

  if (loading) return <Loader />;

  return (
    <ProductCard category={kidItems}></ProductCard>
  )
}

export default Kidproducts;

