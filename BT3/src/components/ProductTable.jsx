import React from 'react';

const ProductTable = ({ products, onSort, onRowClick }) => (
  <div className="table-responsive">
    <table className="table table-hover table-bordered align-middle">
      <thead className="table-dark">
        <tr>
          <th onClick={() => onSort('id')} style={{cursor:'pointer'}}>ID ↕</th>
          <th onClick={() => onSort('title')} style={{cursor:'pointer'}}>Title ↕</th>
          <th onClick={() => onSort('price')} style={{cursor:'pointer'}}>Price ↕</th>
          <th>Category</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
        {products.map(item => (
          <tr 
            key={item.id} 
            title={item.description} 
            onClick={() => onRowClick(item)} 
            style={{ cursor: 'pointer' }}
          >
            <td>{item.id}</td>
            <td className="fw-bold">{item.title}</td>
            <td className="text-danger">${item.price}</td>
            <td>{item.category?.name}</td>
            <td>
              <img src={item.images[0]} alt="prod" className="img-thumbnail" style={{width:'50px'}} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable; // QUAN TRỌNG: Phải có dòng này