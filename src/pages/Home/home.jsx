import Browse from "./browse"
import Header from "./header"
import Inspirations from "./inspirations"
import MaskGroup from "./maskgroup"
import OurProducts from "./ourproducts"

function Home() {
  return (
    <>
      <Header />
      <MaskGroup />
      <Browse />
      <OurProducts />
      <Inspirations />
    </>
  )
}

export default Home