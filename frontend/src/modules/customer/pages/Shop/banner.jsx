import { Link } from "react-router-dom";
function Banner({name}) {
  return (
    <div style={{
      width: "100%",
      position: "relative",
    }}>
      <img src="/src/modules/customer/pages/Shop/images/Rectangle 1.png" style={{
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
        <img src="/src/modules/customer/pages/Shop/images/Meubel House_Logos-05.png" style={{
          width: '77px',
          height: '77px',
          position: 'relative',
          top: '20px'  
        }}/>
        <p style={{
          fontFamily: '"Poppins", sans-serif',  
          fontWeight: '500',
          fontSize: '48px',
          color: '000000',
        }}>{name}</p>
        <div style={{
          display: "flex",
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            color: '000000',
          }}><Link to="/" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>Home</Link></p>
          <img src="/src/modules/customer/pages/Shop/images/dashicons_arrow-down-alt2.png" style={{
            width: "20px",
            height: "20px",
          }}/>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '300',
            fontSize: '16px',
            color: '000000',
          }}><Link to={`/${name}`} style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>{name}</Link></p>
        </div>
      </div>
    </div>
  )
}
export default Banner;