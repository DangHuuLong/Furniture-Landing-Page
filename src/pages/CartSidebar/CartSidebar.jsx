import { Link, NavLink, useNavigate } from "react-router-dom";
import CartItem from '../../components/CartItem'
function CartSidebar({ onClose }){
  return (
    <div style={{
      zIndex: 1000,  
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'fixed',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        height: '726px',
        width: '471px',
        backgroundColor: 'rgba(255,255,255,1)',
        paddingTop: '28px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          marginLeft: '28px'
        }}>
          {/** 1*/}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '26px'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600.,
              fontSize: '24px',
              color: 'rgba(0,0,0,1',
              marginRight: '160px'
            }}>Shopping Cart</p>
            <button onClick={onClose} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              <img src="/src/pages/CartSidebar/images/Group.png" style={{
                height: '19px',
                objectFit: 'cover'
              }} />
            </button>
          </div>
          {/** 2*/}
          <div style={{
            width: '287px',
            height: '1px',
            backgroundColor: 'rgba(217,217,217,1)',
            marginBottom: '42px'
          }}></div>
          {/** 3*/}
          <div>
            <CartItem {...{
              image: '/src/pages/CartSidebar/images/Asgaard sofa 5 (1).png',
              name: 'Asgaard sofa',
              quantity: 1,
              price: '250,000.00'
            }} />
            <CartItem {...{
              image: '/src/pages/CartSidebar/images/Asgaard sofa 5.png',
              name: 'Casaliving Wood',
              quantity: 1,
              price: '270,000.00'
            }} />
          </div>
        </div>

        {/** 4*/}
        <div style={{
          marginTop: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex',
            paddingLeft: '28px',
            marginBottom: '24px'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
              marginRight: '100px'
            }}>Subtotal</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: 'rgba(184,142,47,1)'
            }}>Rs.520,000.00</p>
          </div>

          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(217,217,217,1)',
            marginBottom: '26px',
          }}></div>

          <div style={{
            display: 'flex',
            paddingLeft: '28px',
            marginBottom: '28px',
            gap: '14px',
          }}>
            <Link
              to="/cart"
              style={{
                display: "inline-flex",
                height: 30,
                width: 88,
                borderRadius: 50,
                border: "1px solid rgba(0,0,0,1)",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                color: "rgba(0,0,0,1)",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 12
              }}
            >
              Cart
            </Link>
            <Link
              to="/checkout"
              style={{
                height: '30px',
                width: '118px',
                borderRadius: '50px',
                border: '1px solid rgba(0,0,0,1)',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: "none",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                color: 'rgba(0,0,0,1)'
              }}
            >
              Checkout
            </Link>

            <Link 
              to="/comparison"
              style={{
                height: '30px',
                width: '136px',
                borderRadius: '50px',
                border: '1px solid rgba(0,0,0,1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: "none",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                color: 'rgba(0,0,0,1)'
              }}
              >Comparison
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartSidebar