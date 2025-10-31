import { NavLink } from 'react-router-dom';
import {MoveLeft} from 'lucide-react'
export default function HeaderSubPage({to, name, saveFunction = null}){
  return (
    <>
      <NavLink 
      to={to}
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
        }}>{name}</p>
        <div style={{
          display: 'flex'
        }}>
          <NavLink 
            to={to}
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
          <button style={{
            width: 86,
            height: 40,
            borderRadius: 4,
            backgroundColor: '#1E5EFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
            border: 'none',
            cursor: 'pointer'
          }}
            onClick={saveFunction}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'white',
            }}>Save</p>
          </button>
        </div>
      </div>
    </>
  )
}