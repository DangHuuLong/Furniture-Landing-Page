function Banner() {
  return (
    <div style={{
      width: "100%",
      position: "relative",
    }}>
      <img src="/src/pages/Shop/images/Rectangle 1.png" style={{
        width: "100%",
      }}/>
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',  
          fontWeight: '500',
          fontSize: '48px',
          color: '000000',
        }}>Shop</p>
        <div style={{
          display: "flex",
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            color: '000000',
          }}>Home</p>
          <img src="/src/pages/Shop/images/dashicons_arrow-down-alt2.png" style={{
            width: "20px",
            height: "20px",
          }}/>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '300',
            fontSize: '16px',
            color: '000000',
          }}>Shop</p>
        </div>
      </div>
    </div>
  )
}
export default Banner;