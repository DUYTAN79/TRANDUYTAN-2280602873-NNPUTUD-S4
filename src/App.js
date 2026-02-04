import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { productApi } from './api/productApi';
import { downloadCSV } from './utils/exportCSV'; // Sửa đường dẫn tại đây
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductModal from './components/ProductModal';
import PaginationControl from './components/PaginationControl';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [modal, setModal] = useState({ show: false, type: 'view', data: null });

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    const res = await productApi.getAll();
    setProducts(res.data);
  };

  const filteredData = useMemo(() => {
    let result = products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return result;
  }, [products, searchTerm, sortConfig]);

  const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSave = async (formData, type) => {
    if (type === 'change-to-edit') return setModal({...modal, type: 'edit'});
    type === 'create' ? await productApi.create(formData) : await productApi.update(formData.id, formData);
    loadData();
    setModal({ show: false, type: 'view', data: null });
  };

  return (
    <div className="container py-4">
      <SearchBar onSearch={setSearchTerm} onLimitChange={setItemsPerPage} onExport={() => downloadCSV(currentItems)} onCreate={() => setModal({show: true, type: 'create', data: null})} />
      <ProductTable products={currentItems} onSort={(key) => setSortConfig({key, direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'})} onRowClick={(item) => setModal({show: true, type: 'view', data: item})} />
      <PaginationControl currentPage={currentPage} totalPages={Math.ceil(filteredData.length / itemsPerPage)} onPageChange={setCurrentPage} />
      <ProductModal show={modal.show} type={modal.type} data={modal.data} onHide={() => setModal({...modal, show: false})} onSave={handleSave} />
    </div>
  );
}

export default App;