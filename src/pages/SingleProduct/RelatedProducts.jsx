import Product from "../../components/Product"
function RelatedProducts(){
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
      }}>
        <Product {...{
          image: '/src/pages/Home/images/product1.png',
          title: 'Syltherine',
          description: 'Stylish cafe chair',
          price: '2.500.000',
          oldPrice: '3.500.000',
          discount: 50,
          newProduct: false,
        }} />
        <Product {...{
          image: '/src/pages/Home/images/product2.png',
          title: 'Leviosa',
          description: 'Stylish cafe chair',
          price: '2.500.000',
          oldPrice: null,
          discount: null,
          newProduct: false,
        }} />
        <Product {...{
          image: '/src/pages/Home/images/product3.png',
          title: 'Lolito',
          description: 'Luxury big sofa',
          price: '7.000.000',
          oldPrice: '14.000.000',
          discount: 50,
          newProduct: false,
        }} />
        <Product {...{
          image: '/src/pages/Home/images/product4.png',
          title: 'Respira',
          description: 'Outdoor bar table and stool',
          price: '500.000',
          oldPrice: null,
          discount: null,
          newProduct: true,
        }} />
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
export default RelatedProducts