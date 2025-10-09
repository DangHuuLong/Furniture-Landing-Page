function FeaturesBar() {
  return (
    <div style={{
      width: '100%',
      height: '270px',
      padding: '0 53px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(250, 243, 234, 1)',
    }}>
      {/* Feature 1 */}
      <div style={{
        height: '60px',
        display: 'flex',
      }}>
        <img src='/src/pages/Shop/images/trophy 1.png' style={{
          width: '60px',
          height: '60px',
          marginRight: '10px',
        }} />
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif', 
            fontWeight: '600',
            fontSize: '25px',
            color: 'rgba(36, 36, 36, 1)',
          }}>High Quality</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif', 
            fontWeight: '500',
            fontSize: '20px',
            color: 'rgba(137, 137, 137, 1)',
          }}>crafted from top materials</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div style={{
        height: '60px',
        display: 'flex',
      }}>
        <img src='/src/pages/Shop/images/guarantee.png' style={{
          width: '60px',
          height: '60px',
          marginRight: '10px',
        }} />
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '600',
            fontSize: '25px',
            color: 'rgba(36, 36, 36, 1)',
          }}>Warranty Protection</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '20px',
            color: 'rgba(137, 137, 137, 1)',
          }}>Over 2 years</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div style={{
        height: '60px',
        display: 'flex',
      }}>
        <img src='/src/pages/Shop/images/shipping.png' style={{
          width: '60px',
          height: '60px',
          marginRight: '10px',
        }} />
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '600',
            fontSize: '25px',
            color: 'rgba(36, 36, 36, 1)',
          }}>Free Shipping</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '20px',
            color: 'rgba(137, 137, 137, 1)',
          }}>Order over 150 $</p>
        </div>
      </div>

      {/* Feature 4 */}
      <div style={{
        height: '60px',
        display: 'flex',
      }}>
        <img src='/src/pages/Shop/images/customer-support.png' style={{
          width: '60px',
          height: '60px',
          marginRight: '10px',
        }} />
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '600',
            fontSize: '25px',
            color: 'rgba(36, 36, 36, 1)',
          }}>24 / 7 Support</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '20px',
            color: 'rgba(137, 137, 137, 1)',
          }}>Dedicated support</p>
        </div>
      </div>
    </div>
  )
}
export default FeaturesBar; 