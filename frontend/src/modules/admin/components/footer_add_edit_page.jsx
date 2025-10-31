import { NavLink } from "react-router-dom"
export default function FooterAddEditPage({to, saveFunction}){
  return (
    <div style={{
      borderTop: '1px solid #D7DBEC',
      width: '100%',
      height: 70,
      marginTop: '30px',
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
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
  )
}