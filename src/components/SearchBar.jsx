import React from 'react';

const SearchBar = ({ onSearch, onLimitChange, onExport, onCreate }) => {
  return (
    <div className="row g-3 mb-4 align-items-center shadow-sm p-3 bg-white rounded">
      <div className="col-md-4">
        <label className="form-label small fw-bold">Tìm kiếm sản phẩm</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nhập tên sản phẩm..." 
          onChange={(e) => onSearch(e.target.value)} 
        />
      </div>
      <div className="col-md-3">
        <label className="form-label small fw-bold">Số lượng hiển thị</label>
        <select className="form-select" onChange={(e) => onLimitChange(Number(e.target.value))}>
          <option value="5">5 dòng mỗi trang</option>
          <option value="10" selected>10 dòng mỗi trang</option>
          <option value="20">20 dòng mỗi trang</option>
        </select>
      </div>
      <div className="col-md-5 text-end pt-4">
        <button className="btn btn-success me-2" onClick={onCreate}>
          <i className="bi bi-plus-lg"></i> + Tạo mới
        </button>
        <button className="btn btn-outline-primary" onClick={onExport}>
          <i className="bi bi-download"></i> Export CSV
        </button>
      </div>
    </div>
  );
};

export default SearchBar;