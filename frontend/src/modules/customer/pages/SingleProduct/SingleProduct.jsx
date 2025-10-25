import { useParams } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import TabBar from "./TabBar";
import DetailsProduct from "./DetailsProduct";
import DescriptionReviews from "./DescriptionReviews";
import RelatedProducts from "./RelatedProducts";

function SingleProduct() {
  const { sku } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let mounted = true;
    async function run() {
      try {
        const [pRes, listRes] = await Promise.all([
          fetch('http://localhost:3001/products/' + sku),
          fetch('http://localhost:3001/products'),
        ]);
        if (!pRes.ok) throw new Error('Product not found');
        const p = await pRes.json();
        const list = await listRes.json();
        if (mounted) {
          setProduct(p);
          setAllProducts(list);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    run();
    return () => { mounted = false; };
  }, [sku]);

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