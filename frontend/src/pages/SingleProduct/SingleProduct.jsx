import { useLocation } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';
import TabBar from "./TabBar";
import DetailsProduct from "./DetailsProduct";
import DescriptionReviews from "./DescriptionReviews";
import RelatedProducts from "./RelatedProducts";

function SingleProduct() {
  const location = useLocation();
  const product = location.state?.product;

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch all products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  if (!product || loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  const relatedProducts = allProducts.filter(item => item.SKU !== product.SKU);

  return (
    <>
      <TabBar product={product}/>
      <DetailsProduct product={product} /> 
      <DescriptionReviews product={product} /> 
      <RelatedProducts products={relatedProducts} />
    </>
  );
}

export default SingleProduct;