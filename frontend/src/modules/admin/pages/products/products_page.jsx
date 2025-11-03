import {ChevronDown, Search, PenLine, Trash } from 'lucide-react';
import TableProducts from './table_products';
import { useOutletContext } from "react-router-dom";
import HeaderSubPage from '../../components/header_sub_page';
import EmptyStates from '../../components/empty_states';
export default function ProductsPage() {
  const headers = ['Product', 'Inventory', 'Color', 'Price', 'Rating']
  // const datas = [
  //   [
  //     {
  //       image: 'https://www.harringtonjacketstore.co.uk/cdn/shop/products/GREY_1024x1024.png?v=1571398348',
  //       name: 'Men Grey Hoodie',
  //       category: 'Hoodies'
  //     },
  //     96,
  //     'Black',
  //     49.90,
  //     { rating: 5.0, reviews: '(32 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/vD4tN7B/women-striped.jpg',
  //       name: 'Women Striped T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     56,
  //     'White',
  //     34.90,
  //     { rating: 4.8, reviews: '(24 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/9vp3f1k/women-white.jpg',
  //       name: 'Women White T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     78,
  //     'White',
  //     40.90,
  //     { rating: 5.0, reviews: '(54 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/N1rZyxP/men-white.jpg',
  //       name: 'Men White T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     32,
  //     'White',
  //     49.90,
  //     { rating: 4.5, reviews: '(31 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/ZHGBwS3/women-red.jpg',
  //       name: 'Women Red T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     32,
  //     'White',
  //     34.90,
  //     { rating: 4.9, reviews: '(22 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://www.harringtonjacketstore.co.uk/cdn/shop/products/GREY_1024x1024.png?v=1571398348',
  //       name: 'Men Grey Hoodie',
  //       category: 'Hoodies'
  //     },
  //     'Out of Stock',
  //     'Black',
  //     49.90,
  //     { rating: 5.0, reviews: '(32 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/vD4tN7B/women-striped.jpg',
  //       name: 'Women Striped T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     'Out of Stock',
  //     'White',
  //     34.90,
  //     { rating: 4.8, reviews: '(24 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/9vp3f1k/women-white.jpg',
  //       name: 'Women White T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     'Out of Stock',
  //     'White',
  //     40.90,
  //     { rating: 5.0, reviews: '(54 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/N1rZyxP/men-white.jpg',
  //       name: 'Men White T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     'Out of Stock',
  //     'White',
  //     49.90,
  //     { rating: 4.5, reviews: '(31 Votes)' }
  //   ],
  //   [
  //     {
  //       image: 'https://i.ibb.co/ZHGBwS3/women-red.jpg',
  //       name: 'Women Red T-Shirt',
  //       category: 'T-Shirt'
  //     },
  //     'Out of Stock',
  //     'White',
  //     34.90,
  //     { rating: 4.9, reviews: '(22 Votes)' }
  //   ],
  //   [
  //     {
  //       name: 'Men Grey Hoodie',
  //       image: 'https://www.harringtonjacketstore.co.uk/cdn/shop/products/GREY_1024x1024.png?v=1571398348',
  //       category: 'Hoodies',
  //     },
  //     96,
  //     'Black',
  //     49.90,
  //     { rating: 5.0, reviews: '(32 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Women Striped T-Shirt',
  //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTnKYQKF3l5oKKkXHi-4CqJ3tgH4A-ChMig&s',
  //       category: 'T-Shirt',
  //     },
  //     56,
  //     'White',
  //     34.90,
  //     { rating: 4.8, reviews: '(24 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Women White T-Shirt',
  //       image: 'https://hips.hearstapps.com/hmg-prod/images/gh-white-tshirt-66059c6ec5b44.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
  //       category: 'T-Shirt',
  //     },
  //     78,
  //     'White',
  //     40.90,
  //     { rating: 5.0, reviews: '(54 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Men White T-Shirt',
  //       image: 'https://www.hancockfashion.com/cdn/shop/files/2c090c5b-cfa6-477d-bfab-755f18f8e41c1715236000781-Hancock-Men-Henley-Neck-Roll-Up-Sleeves-Pure-Cotton-T-shirt--3.jpg?v=1734411577',
  //       category: 'T-Shirt',
  //     },
  //     32,
  //     'White',
  //     49.90,
  //     { rating: 4.5, reviews: '(31 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Women Red T-Shirt',
  //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ869-N2rizky-6dvcHNoWR61KRWTzbC44uQ&s',
  //       category: 'T-Shirt',
  //     },
  //     32,
  //     'White',
  //     34.90,
  //     { rating: 4.9, reviews: '(22 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Men Grey Hoodie',
  //       image: 'https://www.harringtonjacketstore.co.uk/cdn/shop/products/GREY_1024x1024.png?v=1571398348',
  //       category: 'Hoodies',
  //     },
  //     'Out of Stock',
  //     'Black',
  //     49.90,
  //     { rating: 5.0, reviews: '(32 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Women Striped T-Shirt',
  //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTnKYQKF3l5oKKkXHi-4CqJ3tgH4A-ChMig&s',
  //       category: 'T-Shirt',
  //     },
  //     'Out of Stock',
  //     'White',
  //     34.90,
  //     { rating: 4.8, reviews: '(24 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Women White T-Shirt',
  //       image: 'https://hips.hearstapps.com/hmg-prod/images/gh-white-tshirt-66059c6ec5b44.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
  //       category: 'T-Shirt',
  //     },
  //     'Out of Stock',
  //     'White',
  //     40.90,
  //     { rating: 5.0, reviews: '(54 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Men White T-Shirt',
  //       image: 'https://www.hancockfashion.com/cdn/shop/files/2c090c5b-cfa6-477d-bfab-755f18f8e41c1715236000781-Hancock-Men-Henley-Neck-Roll-Up-Sleeves-Pure-Cotton-T-shirt--3.jpg?v=1734411577',
  //       category: 'T-Shirt',
  //     },
  //     'Out of Stock',
  //     'White',
  //     49.90,
  //     { rating: 4.5, reviews: '(31 Votes)' },
  //   ],
  //   [
  //     {
  //       name: 'Women Red T-Shirt',
  //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ869-N2rizky-6dvcHNoWR61KRWTzbC44uQ&s',
  //       category: 'T-Shirt',
  //     },
  //     'Out of Stock',
  //     'White',
  //     34.90,
  //     { rating: 4.9, reviews: '(22 Votes)' },
  //   ],
  // ];
  const datas =[]
  const { setDeleteItems } = useOutletContext();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', 
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '28px 40px 40px 40px',
      position: 'relative'
    }}>
      {datas.length ? 
        <>

          {/**Header */}
          <HeaderSubPage headerTitle={'Products'} addButtonTitle={'Product'} exportButton={true} to={"/products/addproduct"} />

          {/** */}
          <div style={{
            marginTop: 28,
            width: '100%',
            padding: '32px 28px 40px 28px',
            borderRadius: 6,
            backgroundColor: 'white',
            border: '1px solid #E6E9F4'
          }}>
            {/**Tool */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex'
              }}>
                {/**Filter */}
                <div style={{ position: "relative", width: 180 }}>
                  <input
                    type="text"
                    placeholder="Filter"
                    aria-label="Filter"
                    style={{
                      height: 40,
                      width: "100%",
                      backgroundColor: "white",
                      border: "1px solid #D9E1EC",
                      borderRadius: 6,
                      paddingLeft: 16,
                      paddingRight: 36,
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#A1A7C4",
                      outline: "none",
                    }}
                  />
                  <ChevronDown
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/**Search */}
                <div style={{ position: "relative", width: 360, marginLeft: 12 }}>
                  <input
                    type="text"
                    placeholder="Search..."
                    aria-label="Search..."
                    style={{
                      height: 40,
                      width: "100%",
                      backgroundColor: "white",
                      border: "1px solid #D9E1EC",
                      borderRadius: 6,
                      paddingLeft: 36,
                      paddingRight: 16,
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#A1A7C4",
                      outline: "none",
                    }}
                  />
                  <Search
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: 12
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D7DBEC',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <PenLine size={24} color='#1E5EFF' />
                </div>
                <button style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D7DBEC',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                  onClick={() => setDeleteItems(true)}>
                  <Trash size={24} color='#1E5EFF' />
                </button>
              </div>
            </div>

            {/**Table */}
            <TableProducts headers={headers} datas={datas} />
          </div>
        </> : 
        <EmptyStates namePage={'Products'} 
          imagePath={'products.png'}
          title={'Add Products'}
          content={'Start making sales by adding your products. You can import and manage your products at any time.'}
          btn={'Add Product'}/>}
    </div>
  )
}