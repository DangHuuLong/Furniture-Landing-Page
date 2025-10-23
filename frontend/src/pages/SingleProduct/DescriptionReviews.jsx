function DescriptionReviews({ product }){
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'rgba(217,217,217,1)',
        marginBottom: '48px',
      }}></div>
      <div style={{
        display: 'flex',
        gap: '52px',
        marginBottom: '37px'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
          fontSize: '24px',
          color: 'rgba(0,0,0,1)'
        }}>Description</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
          fontSize: '24px',
          color: 'rgba(159,159,159,1)'
        }}>Additional Information</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
          fontSize: '24px',
          color: 'rgba(159,159,159,1)'
        }}>Reviews [{product.reviews}]</p>
      </div>
      <p style={{
        width: '1026px',
        flexWrap: 'wrap',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        color: 'rgba(159,159,159,1',
        marginBottom: '30px',
      }}>{product.description.short}</p>
      <p style={{
        width: '1026px',
        flexWrap: 'wrap',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        color: 'rgba(159,159,159,1)',
        marginBottom: '36px',
      }}>
        {product.description.full}
      </p>
      <div style={{
        display: 'flex',
        gap: '30px',
        marginBottom: '65px'
      }}>
        <div style={{
          width: '605px',
          height: '348px',
          borderRadius: '10px',
          backgroundColor: 'rgba(249,241,231,1)',
          overflow: 'hidden' 
        }}>
          <img src={product.images.subImages[0]} style={{
            width: '100%',    
            height: 'auto',   
            objectFit: 'cover'
          }} />
        </div>
        <div style={{
          width: '605px',
          height: '348px',
          borderRadius: '10px',
          backgroundColor: 'rgba(249,241,231,1)',
          overflow: 'hidden'
        }}>
          <img src={product.images.subImages[1]} style={{
            width: '100%',     
            height: 'auto',  
            objectFit: 'cover'
          }} />
        </div>
      </div>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'rgba(217,217,217,1)',
        marginBottom: '48px',
      }}></div>
    </div>
  )
}
export default DescriptionReviews