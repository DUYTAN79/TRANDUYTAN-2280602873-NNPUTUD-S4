import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductModal = ({ show, onHide, type, data, onSave }) => {
  const [formData, setFormData] = useState({ title: '', price: 0, description: '' });

  useEffect(() => {
    if (data) setFormData(data);
    else setFormData({ title: '', price: 0, description: '', categoryId: 1, images: ["https://placeimg.com/640/480/any"] });
  }, [data, show]);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'create' ? 'Create' : 'Detail/Edit'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control disabled={type === 'view'} value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" disabled={type === 'view'} value={formData.price} onChange={(e) => setFormData({...formData, price: Number(e.target.value)})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} disabled={type === 'view'} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        {type === 'view' ? <Button variant="warning" onClick={() => onSave(formData, 'change-to-edit')}>Edit</Button> : <Button variant="primary" onClick={() => onSave(formData, type)}>Save</Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;