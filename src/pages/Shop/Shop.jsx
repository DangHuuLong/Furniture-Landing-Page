import Banner from "./Banner";
import ListProduct from "./ListProduct";
import ToolBar from "./ToolBar";
import FeaturesBar from "./FeaturesBar";

function Shop(){
  return (
    <>
      <Banner {...{name: 'Shop'}}/>
      <ToolBar />
      <ListProduct />
      <FeaturesBar />
    </>
  )
}
export default Shop;