import { useMemo, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import useSizeFilterStore from "../store/sizeFilterStore";

const SizeFilter = ({ products }) => {
  const ref = useRef(null); // Referencia para la barra de carga
  const { selectedSizes, handleFilter } = useSizeFilterStore();

  const sizes = useMemo(() => {
    if (!products || products.length === 0) return [];

    const allSizes = products.map((product) => product.category);
    return [...new Set(allSizes)].sort();
  }, [products]);

  const handleSizeClick = (size) => {
    ref.current.continuousStart(); // Inicia la barra de carga

    const isSelected = selectedSizes.includes(size);
    const newSizes = isSelected
      ? selectedSizes.filter((item) => item !== size)
      : [...selectedSizes, size];
      
    // Simula una demora para completar la barra de carga (puedes enlazar esto a tus solicitudes)
    setTimeout(() => {
      handleFilter(newSizes); // Llama a la función de filtrado
      ref.current.complete(); // Completa la barra de carga
    }, 100); // Ajusta el tiempo según sea necesario
  };

  return (
    <div className="mb-5"> {/* Increased margin-bottom */}
      <LoadingBar color="#d883cf" ref={ref} shadow={true} />
      <div className="d-flex flex-wrap justify-content-start" style={{ marginTop: '70px' }}> {/* Significantly increased margin-top */}
        {sizes.map((size) => (
          <button
            key={size}
            className={`btn btn-outline-dark m-1 ${
              selectedSizes.includes(size) ? "active" : ""
            }`}
            onClick={() => handleSizeClick(size)}
            aria-pressed={selectedSizes.includes(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
