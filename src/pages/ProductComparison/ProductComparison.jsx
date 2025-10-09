import Banner from '../Shop/Banner'
import FeaturesBar from '../Shop/FeaturesBar'
import Frame1 from './Frame1'

function ProductComparison(){
  return (
    <>
      <Banner {...{ name: 'Product Comparison'}}/>
      <div style={{
        padding: '0px 54px 112px 54px'
      }}>
        <Frame1/>
      </div>
      <FeaturesBar/>
    </>
  )
}
export default ProductComparison