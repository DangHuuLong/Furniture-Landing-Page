function  MaskGroup() {
  return (
    <>
      <div style={{ 
        height: 720,
      }}>
        {/* Mask Group Image */}
        <img src="./src/pages/Home/images/scandinavian-interior-mockup-wall-decal-background 1.png" style={{
          width: '100%',
        }}></img>
        {/* Overlay Content */}
        <div style={{
          width: 643,
          height: 443,
          backgroundColor: 'rgba(255, 243, 227, 1)',
          padding: '62px 43px 37px 39px',
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'absolute',
          right: 58,
          top: 328,
        }}>
          {/* Text Section */}
          <div>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 16,
              color: 'rgba(51, 51, 51, 1)',
              letterSpacing: 3,
            }}>
              New Arrival
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 52,
              color: 'rgba(184, 142, 47, 1)',
              lineHeight: '65px',
            }}>
              Discover Our <br></br>New Collection
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '24px',
              color: 'rgba(51, 51, 51, 1)',
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br></br>elit tellus, luctus nec ullamcorper mattis. 
            </p>
          </div>
          {/* Button Section */}
          <div style={{
            width: 222,
            height: 74,
            backgroundColor: 'rgba(184, 142, 47, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: 'rgba(255, 255, 255, 1)',
            }}>BUY NOW</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MaskGroup