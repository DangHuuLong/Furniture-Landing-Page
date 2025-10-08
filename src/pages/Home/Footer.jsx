function Footer() {
  return (
    <div style={{
      width: '100%',
      marginTop: '50px',
      borderTop: '1px solid rgba(0, 0, 0, 0.17)',
      padding: '48px 100px 38px 100px',
    }}>
      {/* Footer Content Section */}
      <div style={{
        display: 'flex',
        marginBottom: '48px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          marginRight: '136px',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 24,
            color: '#000000ff',
          }}>Funiro.</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: 'rgba(159, 159, 159, 1)',
          }}>400 University Drive Suite 200 Coral <br></br>Gables,<br></br>FL 33134 USA</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          marginRight: '144px',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: 'rgba(159, 159, 159, 1)',
          }}>Links</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>Home</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>Shop</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>About</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>Contact</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          marginRight: '72px',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: 'rgba(159, 159, 159, 1)',
          }}>Help</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>Payment Options</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>Returns</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: '#000000ff',
          }}>Privacy Policies</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: 16,
            color: 'rgba(159, 159, 159, 1)',
          }}>Newsletter</p>
          <div style={{
            display: 'flex',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '11px',
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(159, 159, 159, 1)',
                marginBottom: 3
              }}>Enter Your Email Address</p>
              <div style={{
                height: 1,
                width: 200,
                backgroundColor: 'rgba(0, 0, 0, 1)',
              }}></div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(0, 0, 0, 1)',
                marginBottom: 3,
              }}>SUBSCRIBE</p>
              <div style={{
                height: 1,
                width: 80,
                backgroundColor: 'rgba(0, 0, 0, 1)',
              }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div style={{
        height: 1,
        width: '100%',
        backgroundColor: 'rgba(217, 217, 217, 1)',
        marginBottom: 35,
      }}></div>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: '0x000000ff',
      }}>2023 furino. All rights reverved</p>
    </div>
  )
}
export default Footer