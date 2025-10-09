import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
function Product({image, title, description, price, oldPrice, discount, newProduct}) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div style={{
        width: '285px',
        height: '446px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        tabIndex={0}>
        {/* New Product Badge */}
        <div style={{
          width: '285px',
          height: '301px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <img src={image} style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }} />
          {newProduct && <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48px',
            height: '48px',
            position: 'absolute',
            top: '24px',
            right: '24px',
            borderRadius: '50%',
            backgroundColor: 'rgba(46, 193, 172, 1)',
          }}><p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 1)',
          }}>New</p></div>}
          {discount && <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48px',
            height: '48px',
            position: 'absolute',
            top: '24px',
            right: '24px',
            borderRadius: '50%',
            backgroundColor: 'rgba(233, 133, 133, 1)',
          }}><p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 1)',
          }}>-{discount}%</p></div>}

        </div>
        {/* Product Details */}
        <div style={{
          height: '145px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '16px 16px 20px 30px',
          backgroundColor: 'rgba(244, 245, 247, 1)',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '600',
            fontSize: '24px',
            color: 'rgba(58, 58, 58, 1)',
          }}>{title}</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            color: 'rgba(137, 137, 137, 1)',
          }}>{description}</p>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '600',
              fontSize: '20px',
              color: 'rgba(58, 58, 58, 1)',
            }}>
              Rp {price}
            </p>
            {discount && <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(176, 176, 176, 1)',
              textDecoration: 'line-through',
            }}>
              Rp {oldPrice}
            </p>}
          </div>
        </div>
        {/* Overplay for hover effect */}
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'rgba(58, 58, 58, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          inset: 0,
          opacity: hovered ? 1 : 0,
          pointerEvents: hovered ? 'auto' : 'none',
          transition: 'opacity 200ms ease',
          zIndex: 2,
        }}>
          <div style={{
            width: '202px',
            height: '48px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '600',
              fontSize: '16px',
              color: 'rgba(184, 142, 47, 1)',
            }}>
              Add to Cart
            </p>
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}>
            {/* Share, Compare, Like Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px',
            }}>
              <img src="./src/pages/Home/images/Share.png" style={{
                width: '16px',
                height: '16px',
              }} />
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 1)',
              }}>Share</p>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px',
            }}>
              <img src="./src/pages/Home/images/Compare.png" style={{
                width: '16px',
                height: '16px',
              }} />
              <Link to="/shop/singleProduct" style={{ 
                textDecoration: "none", 
                color: "inherit", 
                font: "inherit",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 1)', 
              }}>Compare</Link>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px',
            }}>
              <img src="./src/pages/Home/images/Heart.png" style={{
                width: '16px',
                height: '16px',
              }} />
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 1)',
              }}>Like</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product