import  { useState } from 'react';
import useCartStore from "../store/cartStore";
import { BsCartPlus } from "react-icons/bs";
import ProductModal from './ProductModal';

const ProductsList = ({ products }) => {
  const { addToCart } = useCartStore();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="container my-5 roboto-font">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card custom-card h-100" onClick={() => handleShowModal(product)}>
              <div className="position-relative">
                <img
                  src={`/imgs-api/${product.id}.jpg`}
                  className="card-img-top"
                  alt={product.title}
                />
                {product.isFreeShipping && (
                  <span className="badge custom-badge position-absolute top-0 end-0">
                    Envío gratis
                  </span>
                )}
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-4">{product.title}</h5>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <p className="mb-0">
                    <strong>Precio:</strong> {product.currencyFormat}
                    {product.price}
                  </p>
                </div>
                <p style={{ marginBottom: "0.2rem !important", fontSize: "12px" }}>
                  <strong>Categoría:</strong> {product.category}
                </p>
                <button
                  className="btn btn-cart w-100 mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Agregar al carrito &nbsp; <BsCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductModal show={showModal} handleClose={handleCloseModal} product={selectedProduct} />
    </div>
  );
};

export default ProductsList;
