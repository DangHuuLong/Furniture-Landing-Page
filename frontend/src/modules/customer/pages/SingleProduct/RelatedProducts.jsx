import Product from "../../components/Product"
import React, { useState } from 'react';
function RelatedProducts({ products }){
  const [visibleProductsCount, setVisibleProductsCount] = useState(4);

  const handleShowMore = () => {
    setVisibleProductsCount(prevCount => prevCount + 4);
  };

  const isAllProductsShown = visibleProductsCount >= products.length;

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '55px',
      marginBottom: '92px'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: '36px',
        color: 'rgba(0,0,0,1)'
      }}>Related Products</p>
      <div style={{
        display: 'flex',
        gap: '32px',
        marginTop: '26px',
        marginBottom: '44px',
        flexWrap: 'wrap',
        justifyContent: 'center', 
      }}>
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
      {!isAllProductsShown && (
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
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '600',
            fontSize: '16px',
            color: 'rgba(184, 142, 47, 1)',
          }}>Show More</p>
        </div>
      )}
    </div>
  )
}
export default RelatedProducts