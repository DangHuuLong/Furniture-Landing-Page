import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import { useContext } from "react";
function Header() {
  const { toggleCart } = useContext(CartContext);
  return (
    <>
      <div style={{
        height: 100,
        backgroundColor: 'rgba(255,255,255,1)',
        padding: '0px 100px 0px 54px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        {/* Logo Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
          <img src="./src/pages/Home/images/Meubel House_Logos-05.png" style={{
            width: 50,
            height: 32,
          }}/>
          <p style={{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
            fontSize: 34,
            textTransform: 'uppercase',
            color: '#000000ff',                        
          }}>Furniro</p>
        </div>

        {/* Navigation Section */}
        <div style={{
          width: 430,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 266,
          marginRight: 'auto',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',                        
          }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>Home</Link>
          </p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>
            <Link to="/shop" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>Shop</Link>
          </p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>
            About
          </p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>
            <Link to="/contact" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>Contact</Link>
          </p>
        </div>

        {/* Icons Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 45,
        }}>
          <img src="./src/pages/Home/images/mdi_account-alert-outline.png" style={{
            width: 28,
            height: 28,
          }} />
          <Link to="/blog" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>
            <img src="./src/pages/Home/images/akar-icons_search.png" style={{
              width: 28,
              height: 28,
            }} />
          </Link>
          <img src="./src/pages/Home/images/akar-icons_heart.png" style={{
            width: 28,
            height: 28,
          }} />
          <button onClick={toggleCart} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <img src="./src/pages/Home/images/ant-design_shopping-cart-outlined.png" style={{
              width: 28,
              height: 28,
            }} />
          </button>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default Header