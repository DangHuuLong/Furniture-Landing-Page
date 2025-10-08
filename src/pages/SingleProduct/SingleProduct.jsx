import TabBar from "./TabBar"
import DetailsProduct from "./DetailsProduct"
import DescriptionReviews from "./DescriptionReviews"
import RelatedProducts from "./RelatedProducts"
function SingleProduct() {
  return (
    <>
      <TabBar />
      <DetailsProduct />
      <DescriptionReviews />
      <RelatedProducts/>
    </>
  )
}
export default SingleProduct