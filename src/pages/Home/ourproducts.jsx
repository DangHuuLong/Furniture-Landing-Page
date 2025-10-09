import Product from "../../components/Product"

function OurProducts() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "57px 102px 0px 102px",
      gap: '32px',
    }}>
      {/* Title */}
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '700',
        fontSize: '40px',
        color: 'rgba(58, 58, 58, 1)',
      }}>Our Products</p>
      {/* Products Row 1 */}
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '32px',
        }}>
          <Product {...{
            image: './src/pages/Home/images/product1.png',
            title: 'Syltherine',
            description: 'Stylish cafe chair',
            price: '2.500.000',
            oldPrice: '3.500.000',
            discount: 50,
            newProduct: false,
          }}/>
          <Product {...{
            image: './src/pages/Home/images/product2.png',
            title: 'Leviosa',
            description: 'Stylish cafe chair',
            price: '2.500.000',
            oldPrice: null,
            discount: null,
            newProduct: false,
          }} />
          <Product {...{
            image: './src/pages/Home/images/product3.png',
            title: 'Lolito',
            description: 'Luxury big sofa',
            price: '7.000.000',
            oldPrice: '14.000.000',
            discount: 50,
            newProduct: false,
          }} />
          <Product {...{
            image: './src/pages/Home/images/product4.png',
            title: 'Respira',
            description: 'Outdoor bar table and stool',
            price: '500.000',
            oldPrice: null,
            discount: null,
            newProduct: true,
          }} />
        </div>
      </div>
      {/* Products Row 2 */}
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '32px',
        }}>
          <Product {...{
            image: './src/pages/Home/images/product5.png',
            title: 'Grifo',
            description: 'Night lamp',
            price: '1.500.000',
            oldPrice: null,
            discount: null,
            newProduct: false,
          }} />
          <Product {...{
            image: './src/pages/Home/images/product6.png',
            title: 'Muggo',
            description: 'Small mug',
            price: '150.000',
            oldPrice: null,
            discount: null,
            newProduct: true,
          }} />
          <Product {...{
            image: './src/pages/Home/images/product7.png',
            title: 'Pingky',
            description: 'Cute bed set',
            price: '7.000.000',
            oldPrice: '14.000.000',
            discount: 50,
            newProduct: false,
          }} />
          <Product {...{
            image: './src/pages/Home/images/product8.png',
            title: 'Potty',
            description: 'Minimalist flower pot',
            price: '500.000',
            oldPrice: null,
            discount: null,
            newProduct: true,
          }} />
        </div>
      </div>
      {/* Show More Button */}
      <div style={{
        width: '245px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: '1px solid rgba(184, 142, 47, 1)',
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: '600',
          fontSize: '16px',
          color: 'rgba(184, 142, 47, 1)',
          }}>Show More
        </p>
      </div>
    </div>
  )
}

export default OurProducts