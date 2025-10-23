import Banner from '../Shop/Banner'
import FeaturesBar from '../Shop/FeaturesBar'
import { CartContext } from '../../contexts/CartContext';
import { useContext } from "react";
function Checkout() {
  const { cartItems } = useContext(CartContext);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
      <Banner name='Checkout'/>
      <div style={{
        width: '100%',
        padding: '63px 100px 52px 100px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>

        {/**Form */}
        <div style={{
          width: '608px',
          padding: '35px 80px 70px 74px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '36px',
            color: 'rgba(0,0,0,1)'
          }}>Billing details</p>

          {/**Line 1 */}
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            {/**First Name */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}>
              {/**Label */}
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)'
              }}>First Name</p>
              {/**Input */}
              <input type='text' style={{
                padding: '20px',
                width: '212px',
                height: '75px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(159,159,159,1)',
                borderRadius: '10px'
              }}></input>
            </div>

            {/**Last Name */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}>
              {/**Label */}
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)'
              }}>Last Name</p>
              {/**Input */}
              <input type='text' style={{
                padding: '20px',
                width: '212px',
                height: '75px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(159,159,159,1)',
                borderRadius: '10px'
              }}></input>
            </div>
          </div>

          {/**Company Name (Optional) */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>Company Name (Optional)</p>
            {/**Input */}
            <input type='text' style={{
              padding: '20px',
              width: '100%',
              height: '75px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px'
            }}></input>
          </div>

          {/**Country / Region */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>Country / Region</p>
            {/**Input */}
            <input
              type="text"
              placeholder="Sri Lanka"
              style={{
                padding: "20px",
                width: "100%",
                height: "75px",
                backgroundColor: "transparent",
                border: "1px solid rgba(159,159,159,1)",
                borderRadius: "10px",
                paddingRight: "56px",
                backgroundImage: "url('/src/pages/Checkout/images/dashicons_arrow-down-alt2.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 28px center", 
                backgroundSize: "24px 24px"
              }}
            />
          </div>

          {/**Street address*/}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>Street address</p>
            {/**Input */}
            <input type='text' style={{
              padding: '20px',
              width: '100%',
              height: '75px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px'
            }}></input>
          </div>

          {/**Town / City*/}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>Town / City</p>
            {/**Input */}
            <input type='text' style={{
              padding: '20px',
              width: '100%',
              height: '75px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px'
            }}></input>
          </div>

          {/**Province*/}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>Province</p>
            {/**Input */}
            <input
              type="text"
              placeholder="Western Province"
              style={{
                padding: "20px",
                width: "100%",
                height: "75px",
                backgroundColor: "transparent",
                border: "1px solid rgba(159,159,159,1)",
                borderRadius: "10px",
                paddingRight: "56px",
                backgroundImage: "url('/src/pages/Checkout/images/dashicons_arrow-down-alt2.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 28px center",
                backgroundSize: "24px 24px"
              }}
            />
          </div>

          {/**ZIP code*/}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>ZIP code</p>
            {/**Input */}
            <input type='text' style={{
              padding: '20px',
              width: '100%',
              height: '75px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px'
            }}></input>
          </div>

          {/**Phone*/}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>Phone</p>
            {/**Input */}
            <input type='text' style={{
              padding: '20px',
              width: '100%',
              height: '75px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px'
            }}></input>
          </div>

          {/**Email address*/}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/**Label */}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)'
            }}>Email address</p>
            {/**Input */}
            <input type='text' style={{
              padding: '20px',
              width: '100%',
              height: '75px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px'
            }}></input>
          </div>

          {/**Additional information */}
          <input type='text' 
            placeholder = 'Additional information'
            style={{
              marginTop: '66px',
              padding: '20px',
              width: '100%',
              height: '75px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px'
            }}
          ></input>
        </div>

        {/**Total */}
        <div style={{
          width: '608px',
          padding: '86px 38px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginBottom: '36px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '14px'
              }}>Product</p>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '14px'
              }}>Subtotal</p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              {cartItems.map(cartItem => (
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '11px',
                    alignItems: 'center',
                    marginBottom: '22px'
                  }}>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: 'rgba(159,159,159,1)',
                    }}>{cartItem.name}</p>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      fontSize: '12px',
                      color: 'rgba(0,0,0,1)',
                    }}>X</p>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      fontSize: '12px',
                      color: 'rgba(0,0,0,1)',
                    }}>{cartItem.quantity}</p>
                  </div>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 300,
                    fontSize: '16px',
                    color: 'rgba(0,0,0,1)',
                    marginBottom: '22px'
                  }}>{cartItem.unit}. {cartItem.price.toLocaleString('vi-VN')}</p>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '22px'
              }}>Subtotal</p>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 300,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '22px'
              }}>VND. {subtotal.toLocaleString('vi-VN')}</p>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '22px'
              }}>Total</p>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                color: 'rgba(184,142,47,1)',
                marginBottom: '22px'
              }}>VND. {subtotal.toLocaleString('vi-VN')}</p>
            </div>
          </div>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(217,217,217,1)',
            marginBottom: '22px'
          }}></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '25px'
          }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems:'center'
            }}>
              <div style={{
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,1)',
                width: '14px',
                height: '14px'
              }}></div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)',
              }}>Direct Bank Transfer</p>
            </div>
            <p style={{
              flexWrap: 'wrap',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 300,
              fontSize: '16px',
              color: 'rgba(159,159,159,1)',
            }}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            marginBottom: '11px'
          }}>
            <div style={{
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              width: '14px',
              height: '14px'
            }}></div>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(159,159,159,1)',
            }}>Direct Bank Transfer</p>
          </div>
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            marginBottom: '22px'
          }}>
            <div style={{
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              width: '14px',
              height: '14px'
            }}></div>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: 'rgba(159,159,159,1)',
            }}>Cash On Delivery</p>
          </div>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            color: 'rgba(0,0,0,1)',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
            <span style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: 'rgba(0,0,0,1)',
              }}> privacy policy.</span>
          </p>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '318px',
              height: '64px',
              borderRadius: '15px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(0,0,0,1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}><p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              color: 'rgba(0,0,0,1)',
            }}>Place order</p></div>
          </div>
        </div>

      </div>
      <FeaturesBar/>
    </>
  )
}
export default Checkout