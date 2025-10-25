import { CartContext } from '../../../../contexts/CartContext';
import { useToast } from '../../../../contexts/ToastContext';
import { useContext } from "react";
function Frame2({ productsToCompare }) {
  const product1 = productsToCompare[0];
  const product2 = productsToCompare[1];
  
    const { addToCart } = useContext(CartContext);
    const { showToast } = useToast();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product, 1);
    showToast('Đã thêm sản phẩm vào giỏ hàng.', 'success');
  };

  const sections = [
    {
      title: "General",
      rows: [
        { label: "Sales Package" },
        { label: "Model Number" },
        { label: "Secondary Material" },
        { label: "Configuration" },
        { label: "Upholstery Material" },
        { label: "Upholstery Color" },
      ],
    },
    {
      title: "Product",
      rows: [
        { label: "Filling Material" },
        { label: "Finish Type" },
        { label: "Adjustable Headrest" },
        { label: "Maximum Load Capacity" },
        { label: "Origin of Manufacture" },
      ],
    },
    {
      title: "Dimensions",
      rows: [
        { label: "Width" },
        { label: "Height" },
        { label: "Depth" },
        { label: "Weight" },
        { label: "Seat Height" },
        { label: "Leg Height" },
      ],
    },
    {
      title: "Warranty",
      rows: [
        { label: "Warranty Summary" },
        { label: "Warranty Service Type" },
        { label: "Covered in Warranty" },
        { label: "Not Covered in Warranty" },
        { label: "Domestic Warranty" },
      ],
    },
  ];

  return (
    <div style={{ marginTop: '64px', width: '100%', borderTop: '1px solid rgba(232,232,232,1)' }}>
      {sections.map((sec) => (
        <div key={sec.title}>
          {/* Dòng kẻ và tiêu đề section không thay đổi */}
          <div style={{ display: 'flex', paddingLeft: '42px', height: '42px' }}>
            <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
          </div>

          <div style={{ display: 'flex', paddingLeft: '42px' }}>
            <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }}>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '28px', color: 'rgba(0,0,0,1)' }}>
                {sec.title}
              </p>
            </div>
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
          </div>

          {/* Các dòng nội dung */}
          {sec.rows.map((r) => (
            <div key={r.label}>
              {/* line mỏng giữa các hàng */}
              <div style={{ display: 'flex', paddingLeft: '42px', height: '28px' }}>
                <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }} />
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
              </div>

              {/* Dòng so sánh */}
              <div style={{ display: 'flex', paddingLeft: '42px' }}>
                <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }}>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(0,0,0,1)' }}>
                    {r.label}
                  </p>
                </div>

                {/* Cột dữ liệu sản phẩm 1: Sử dụng optional chaining để an toàn */}
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(0,0,0,1)', paddingLeft: '42px' }}>
                    {product1 ? product1[sec.title][r.label] : '-'}
                  </p>
                </div>

                {/* Cột dữ liệu sản phẩm 2: Tương tự với sản phẩm 2 */}
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(0,0,0,1)', paddingLeft: '42px' }}>
                    {product2 ? product2[sec.title][r.label] : '-'}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Khoảng cách dưới mỗi hàng */}
          <div style={{ display: 'flex', paddingLeft: '42px', height: '54px' }}>
            <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', paddingLeft: '42px' }}>
        <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }}>
          
        </div>
        <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
          {product1 && (
            <div style={{
              width: '215px',
              height: '64px',
              backgroundColor: 'rgba(184, 142, 47, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '42px',
              cursor: 'pointer'
            }}
              onClick={(e) => handleAddToCart(e, product1)}>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(255,255,255,1)' }}>Add To Cart</p>
            </div>
          )}
        </div>
        <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
          {product2 && (
            <div style={{
              width: '215px',
              height: '64px',
              backgroundColor: 'rgba(184, 142, 47, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '42px',
              cursor: 'pointer'
            }}
              onClick={(e) => handleAddToCart(e, product2)}>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(255,255,255,1)' }}>Add To Cart</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Frame2;
