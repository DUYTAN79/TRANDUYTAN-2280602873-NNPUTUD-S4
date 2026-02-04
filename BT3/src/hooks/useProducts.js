import { useState, useEffect } from 'react';
import { productApi } from '../api/productApi';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const loadProducts = async () => {
    const res = await productApi.getAll();
    setProducts(res.data);
    setFiltered(res.data);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const result = products.filter(p => p.title.toLowerCase().includes(term.toLowerCase()));
    setFiltered(result);
  };

  return { filtered, loadProducts, handleSearch, searchTerm };
};