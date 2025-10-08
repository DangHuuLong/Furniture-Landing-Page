import Product from "../../components/product"
function ListProduct() {
  return (
    <div style={{
      marginTop: "46px",
      padding: "17px 0px 0px 100px",
      width: "100%",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "70px",
      }}>
        {/* This is where the list of products will be rendered.*/}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "32px",
          rowGap: "40px"
        }}>
          {/* Example product item */}
          <Product {...{
            image: './src/pages/Home/images/product1.png',
            title: 'Syltherine',
            description: 'Stylish cafe chair',
            price: '2.500.000',
            oldPrice: '3.500.000',
            discount: 50,
            newProduct: false,
          }} />
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
          <Product {...{
            image: './src/pages/Home/images/product1.png',
            title: 'Syltherine',
            description: 'Stylish cafe chair',
            price: '2.500.000',
            oldPrice: '3.500.000',
            discount: 50,
            newProduct: false,
          }} />
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

        {/* Pagination controls can be added here */}
        <div style={{
          display: "flex",
          gap: "38px",
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "rgba(184, 142, 47, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <p style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              fontSize: "20px",
              color: "rgba(255,255,255,1)",
            }}>1</p>
          </div>
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "rgba(249, 241, 231, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <p style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              fontSize: "20px",
              color: "rgba(0,0,0,1)",
            }}>2</p>
          </div>
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "rgba(249, 241, 231, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <p style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              fontSize: "20px",
              color: "rgba(0,0,0,1)",
            }}>3</p>
          </div>
          <div style={{
            width: "98px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "rgba(249, 241, 231, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <p style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              fontSize: "20px",
              color: "rgba(0,0,0,1)",
            }}>Next</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ListProduct