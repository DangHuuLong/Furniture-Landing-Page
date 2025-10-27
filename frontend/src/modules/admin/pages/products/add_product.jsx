import { MoveLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
export default function AddProduct(){
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: '30px 40px 40px 40px',
    }}>
      <NavLink 
      to="/products"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        textDecoration: 'none'
      }}>
        <MoveLeft size={14} color='#7E84A3'/>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#5A607F',
        }}>Back</p>
      </NavLink>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 24,
          color: '#131523',
        }}>Add Product</p>
        <div style={{
          display: 'flex'
        }}>
          <NavLink 
            to="/products"
          style={{
            width: 102,
            height: 40,
            borderRadius: 4,
            backgroundColor: 'white',
            border: '1px solid #D7DBEC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#1E5EFF',
            }}>Cancel</p>
          </NavLink>
          <div style={{
            width: 86,
            height: 40,
            borderRadius: 4,
            backgroundColor: '#1E5EFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'white',
            }}>Save</p>
          </div>
        </div>
      </div>
    </div>
  )
}