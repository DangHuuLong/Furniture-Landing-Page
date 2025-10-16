import { Link } from "react-router-dom";
function TabBar({product}) {
  return (
    <div style={{
      height: '100px',
      width: '100%',
      backgroundColor: 'rgba(249,241,231,1)',
      paddingLeft: '100px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: 'rgba(159, 159, 159, 1)',
        marginRight: 14,
      }}><Link to="/" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>Home</Link></p> 
      <img src="/src/pages/SingleProduct/images/dashicons_arrow-down-alt2.png" style={{
        width: 20,
        height: 20,
        marginRight: 24,
      }}/>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: 'rgba(159, 159, 159, 1)',
        marginRight: 14,
      }}><Link to="/shop" style={{ textDecoration: "none", color: "inherit", font: "inherit" }}>Shop</Link></p>
      <img src="/src/pages/SingleProduct/images/dashicons_arrow-down-alt2.png" style={{
        width: 20,
        height: 20,
        marginRight: 24,
      }} />
      <div style={{
        width: 2,
        height: 37,
        backgroundColor: 'rgba(159, 159, 159, 1)',
        marginRight: 34,
      }}></div>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 1)',
      }}>{product.name}</p>
    </div>
  )
}

export default TabBar