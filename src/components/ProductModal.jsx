import { Modal, Button } from 'react-bootstrap';
import '../assets/css/index.css'; 
const ProductModal = ({ show, handleClose, product }) => {
    if (!product) return null;
  
    return (
      <Modal 
        show={show} 
        onHide={handleClose} 
        dialogClassName="custom-modal-width" 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex" style={{ width: '100%' }}>
            <img 
              src={`/imgs-api/${product.id}.jpg`} 
              className="img-fluid me-3" 
              alt={product.title} 
              style={{ width: '60%' }} 
            />
            <div>
              <h5>{product.title}</h5>
              <p>{product.description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  export default ProductModal;