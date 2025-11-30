import { useState, useEffect } from 'react';
import Product from "../../components/Product"

function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [visibleProductsCount, setVisibleProductsCount] = useState(8);
  
    const handleShowMore = () => {
      setVisibleProductsCount(prevCount => prevCount + 4);
    };
  
    const isAllProductsShown = visibleProductsCount >= products.length;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Đang tải dữ liệu sản phẩm...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>Lỗi khi tải dữ liệu: {error.message}</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "57px 102px 0px 102px",
        gap: '32px',
      }}
    >
      {/* Title */}
      <p
        style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: '700',
          fontSize: '40px',
          color: 'rgba(58, 58, 58, 1)',
        }}
      >
        Our Products
      </p>
      {/* Products Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
        }}
      >
        {products.slice(0, visibleProductsCount).map((product) => (
          <Product
            key={product.SKU}
            image={product.images.mainImage}
            name={product.name}
            category={product.category?.categoryName}
            price={product.price}
            discount={product.discount}
            isNew={product.isNew}
            unit={product.unit}
            productData={product}
          />
        ))}
      </div>
      {/* Show More Button */}
      {!isAllProductsShown &&(
        <div
          onClick={handleShowMore}
          style={{
            width: '245px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: '1px solid rgba(184, 142, 47, 1)',
            cursor: 'pointer',
          }}
        >
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '600',
              fontSize: '16px',
              color: 'rgba(184, 142, 47, 1)',
            }}
          >
            Show More
          </p>
        </div>
      )}
    </div>
  );
}

export default OurProducts;