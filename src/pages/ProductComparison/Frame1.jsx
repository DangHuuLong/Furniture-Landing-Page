import { ComparisonContext, useComparison } from "../../contexts/ComparisonContext"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Frame1(){
  const { productsToCompare, addProductToCompare } = useComparison()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3001/products');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Đang tải dữ liệu sản phẩm...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>Lỗi khi tải dữ liệu: {error.message}</div>;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProductSelect = (product) => {
    addProductToCompare(product);
    setIsDropdownOpen(false);
  };
  return (
    <div style={{
      paddingLeft: '42px',
      display: "flex"
    }}>
      {/**1 */}
      <div style={{
        paddingTop: '55px',
        marginRight: '75px'
      }}>
        <p style={{
          width: '224px',
          flexWrap: 'wrap',
          fontFamily: '"Poppins", sans-serif', 
          fontWeight: 500, 
          fontSize: '28px',
          color: 'rgba(0,0,0,1)',
          marginBottom: '22px'
        }}>Go to Product page for more Products</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
          fontSize: '20px',
          color: 'rgba(114,114,114,1)',
        }}><Link to="/shop" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>View More</Link></p>
        <div style={{
          height: '1px',
          width: '114px',
          backgroundColor: 'rgba(114,114,114,1)'
        }}></div>
      </div>
      {/**2 */}
      {productsToCompare.map((product, index) => (
        <div key={index} style={{
          paddingTop: '34px',
          marginRight: '48px'
        }}>
          {product ? (
            <>
              <div style={{
                width: '280px',
                height: '178px',
                borderRadius: '10px',
                backgroundColor: 'rgba(249, 241, 231, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '18px',
                overflow: 'hidden'
              }}><img src={product.images.mainImage} /></div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '6px'
              }}>{product.name}</p>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '6px'
              }}>{product.unit}. {product.price.toLocaleString('vi-VN')}</p>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  color: 'rgba(0,0,0,1)',
                  marginRight: '4px'
                }}>{product.rating}</p>
                <div style={{
                  display: 'flex',
                  gap: '6px',
                  marginRight: '6px'
                }}>
                  {Array.from({ length: 5 }).map((_, index) => {
                    const starType = index + 1 <= Math.floor(product.rating) ? 'full' : (index < product.rating ? 'half' : 'empty');
                    return <img style={{ width: '20px', height: '20px' }} key={index} src={`/src/pages/SingleProduct/images/star-${starType}.png`} alt={`${starType} star`} />;
                  })}
                </div>
                <div style={{
                  height: '30px',
                  width: '1px',
                  backgroundColor: 'rgba(159,159,159,1)',
                  marginRight: '10px'
                }}></div>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: 'rgba(159,159,159,1)',
                }}>{product.reviews} Review</p>
              </div>
            </>
          ) : (
              <div style={{
                width: '280px',
                height: '178px',
                backgroundColor: 'rgba(249, 241, 231, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                marginBottom: '18px',
              }}>
                <p>Chọn sản phẩm</p>
              </div>
          )}
        </div>
      ))}

      {/**4 */}
      <div style={{
        paddingTop: '82px',
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 600,
          fontSize: '24px',
          color: 'rgba(0,0,0,1)',
          marginBottom: '14px'
        }}>Add A Product</p>
        <div style={{
          width: '242px',
          height: '40px',
          borderRadius: '6px',
          backgroundColor: 'rgba(184,142,47,1)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '18px',
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={toggleDropdown}
        >
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            color: 'rgba(255,255,255,1)',
            marginRight: '64px'
          }} >Choose a Product</p>
          <img src="/src/pages/ProductComparison/images/Vector 63.png" style={{ width: '18px', objectFit: 'cover'}}/>
          {isDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '6px',
              boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
              zIndex: 10,
              maxHeight: '200px',
              overflowY: 'auto',
            }}>
              {products.map(p => (
                <div
                  key={p.SKU}
                  onClick={() => handleProductSelect(p)}
                  style={{
                    padding: '10px 18px',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                  }}
                >
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                  }}>{p.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Frame1