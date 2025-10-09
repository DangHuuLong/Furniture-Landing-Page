import { Link } from 'react-router-dom'
import Banner from '../Shop/Banner'
import FeaturesBar from '../Shop/FeaturesBar'
function Cart(){
  return (
    <>
      <Banner {...{ name: 'Cart' }} />
      <div style={{
        padding: '72px 100px 63px 100px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div>
          <div style={{
            width: '820px',
            height: '55px',
            backgroundColor: 'rgba(249,241,231,1)',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '55px'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
              marginLeft: '142px'
            }}>Product</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
              marginLeft: '114px'
            }}>Price</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
              marginLeft: '138px'
            }}>Quantity</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
              marginLeft: '36px'
            }}>Subtotal</p>
          </div>

          <div style={{
            width: '820px',
            height: '55px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{
              width: '105px',
              height: '105px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(184,142,47,0.22)',
              borderRadius: '10px'
            }}>
              <img src='/src/pages/Cart/images/Asgaard sofa 5.png' style={{
                width: '111px',
                objectFit: 'cover'
              }} />
            </div>
            <p style={{
              width: '177px',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(159,159,159,1)',
              marginLeft: '34px'
            }}>Asgaard sofa</p>
            <p style={{
              width: '177px',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(159,159,159,1)',
            }}>Rs. 250,000.00</p>
            <div style={{
              width: '92px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'transparent',
                borderRadius: '5px',
                border: '1px solid rgba(159, 159, 159, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgba(0,0,0,1)',
                }}>1</p>
              </div>
            </div>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
            }}>Rs. 250,000.00</p>
            <img src="/src/pages/Cart/images/ant-design_delete-filled.png" style={{
              width: '28px',
              height: '28px',
              marginRight: '26px',
              marginLeft: 'auto'
            }} />
          </div>
        </div>
        <div style={{
          width: '393px',
          height: '390px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '15px',
          backgroundColor: 'rgba(249, 241, 231, 1)'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '32px',
            color: 'rgba(0,0,0,1)',
            marginBottom: '61px'
          }}>Cart Totals</p>
          <div style={{
            width: '244px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
            }}>Subtotal</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(159,159,159,1)',
            }} >Rs. 250,000.00</p>
          </div>

          <div style={{
            width: '244px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '42px'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              color: 'rgba(184,142,47,1)',
            }}>Total</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(159,159,159,1)',
            }}>Rs. 250,000.00</p>
          </div>

          <Link
            to="/checkout" 
            style={{
              width: '222px',
              height: '59px',
              backgroundColor: 'transparent',
              borderRadius: '15px',
              border: '1px solid rgba(0,0,0,1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              color: 'rgba(0,0,0,1)',
              textDecoration: 'none'
            }}
          >Check Out
          </Link>
        </div>
      </div>
      <FeaturesBar />
    </>
  )
}
export default Cart