import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
function CartItem({image, name, quantity, price, SKU}){
  const { removeFromCart } = useContext(CartContext)
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      marginBottom: '20px',
    }}>
      {/*1*/}
      <div style={{
        height: '108px',
        width: '108px',
        borderRadius: '10px',
        backgroundColor: 'rgba(184,142,47,0.22)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '32px',
        overflow: 'hidden'
      }}><img src={image} style={{
        objectFit: "cover"
      }}/></div>
      {/*2*/}
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '8px',
        marginRight: '60px',
        whitespace: 'nowrap',
        overflow: 'hidden',
        textoverflow: 'ellipsis',
        width: '180px'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          color: 'rgba(0,0,0,1)',
        }}>{name}</p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            color: 'rgba(0,0,0,1)',
          }}>{quantity}</p>

          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 300,
            fontSize: '12px',
            color: 'rgba(0,0,0,1)',
          }}>X</p>

          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            color: 'rgba(184,142,47,1)',
          }}>VND. {price}</p>
        </div>
      </div>
      {/*3*/}
      <div
        onClick={() => removeFromCart(SKU)}>
        <img src="/src/pages/CartSidebar/images/Vector.png" style={{
          width: '20px',
          height: '20px'
        }} />
      </div>
    </div>
  )
}
export default CartItem