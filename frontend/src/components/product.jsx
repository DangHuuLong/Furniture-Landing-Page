import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';

function Product({ image, name, category, price, discount, isNew, unit, productData}) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { showToast } = useToast();

  // Tính toán giá mới và định dạng ngay trong component
  const discountedPrice = price * (1 - discount / 100);
  const formattedPrice = price.toLocaleString('vi-VN');
  const formattedDiscountedPrice = discountedPrice.toLocaleString('vi-VN');

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    e.preventDefault();
    addToCart(productData,1);
    showToast('Đã thêm sản phẩm vào giỏ hàng.', 'success');
  };

  const navigate = useNavigate();
  const handleCompareClick = () => {
    navigate('/shop/singleProduct', { state: { product: productData } });
  };

  return (
    <>
      <div
        style={{
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
        tabIndex={0}
      >
        {/* Product Image and Badges */}
        <div
          style={{
            width: '285px',
            height: '301px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Badge 'New' */}
          {isNew && (
            <div
              style={{
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
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '500',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                New
              </p>
            </div>
          )}
          {/* Badge Discount */}
          {discount > 0 && ( // Sửa lại điều kiện để chỉ hiển thị khi có discount > 0
            <div
              style={{
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
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '500',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                -{discount}%
              </p>
            </div>
          )}
        </div>
        {/* Product Details */}
        <div
          style={{
            height: '145px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '16px 16px 20px 30px',
            backgroundColor: 'rgba(244, 245, 247, 1)',
          }}
        >
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '600',
              fontSize: '24px',
              color: 'rgba(58, 58, 58, 1)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '500',
              fontSize: '16px',
              color: 'rgba(137, 137, 137, 1)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            }}
          >
            {category}
          </p>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
          >
            {/* Hiển thị giá hiện tại và giá sau giảm giá */}
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
                fontSize: '20px',
                color: 'rgba(58, 58, 58, 1)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {unit} {discount > 0 ? formattedDiscountedPrice : formattedPrice}
            </p>
            {/* Hiển thị giá gốc gạch ngang chỉ khi có discount > 0 */}
            {discount > 0 && (
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '400',
                  fontSize: '16px',
                  color: 'rgba(176, 176, 176, 1)',
                  textDecoration: 'line-through',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                {unit} {formattedPrice}
              </p>
            )}
          </div>
        </div>
        {/* Overlay for hover effect */}
        <div
          style={{
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
          }}
        >
          <div
            onClick={handleAddToCart}
            style={{
              width: '202px',
              height: '48px',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
                fontSize: '16px',
                color: 'rgba(184, 142, 47, 1)',
              }}
            >
              Add to Cart
            </p>
          </div>
          {/* Divider */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {/* Share, Compare, Like Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2px',
              }}
            >
              <img
                src="/src/pages/Home/images/Share.png"
                style={{
                  width: '16px',
                  height: '16px',
                }}
              />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '600',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                Share
              </p>
            </div>
            <div
              onClick={handleCompareClick} 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2px',
                cursor: 'pointer',
              }}
            >
              <img
                src="/src/pages/Home/images/Compare.png"
                style={{
                  width: '16px',
                  height: '16px',
                }}
              />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '600',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                Compare
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2px',
              }}
            >
              <img
                src="/src/pages/Home/images/Heart.png"
                style={{
                  width: '16px',
                  height: '16px',
                }}
              />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '600',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                Like
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;