import { useLocation } from 'react-router-dom'; 
import TabBar from "./TabBar";
import DetailsProduct from "./DetailsProduct";
import DescriptionReviews from "./DescriptionReviews";
import RelatedProducts from "./RelatedProducts";

function SingleProduct() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <TabBar product={product}/>
      <DetailsProduct product={product} /> 
      <DescriptionReviews product={product} /> 
      <RelatedProducts />
    </>
  );
}

export default SingleProduct;