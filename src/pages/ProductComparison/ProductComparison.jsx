import Banner from '../Shop/Banner'
import FeaturesBar from '../Shop/FeaturesBar'
import Frame1 from './Frame1'
import Frame2 from './Frame2'
import { useComparison } from '../../contexts/ComparisonContext'

function ProductComparison(){
  const { productsToCompare, addProductToCompare } = useComparison()
  return (
    <>
      <Banner {...{ name: 'Product Comparison'}}/>
      <div style={{
        padding: '0px 54px 112px 54px'
      }}>
        <Frame1 productsToCompare={productsToCompare} onAddProduct={addProductToCompare} />
        <Frame2 productsToCompare={productsToCompare} />
      </div>
      <FeaturesBar/>
    </>
  )
}
export default ProductComparison