import { Plus } from "lucide-react";

export default function EmptyStates({namePage, imagePath, title, content, btn}){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>{namePage}</p>
      <div style={{
        backgroundColor: 'white',
        width: '100%',
        flex: 1,                
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 6,
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
      }}>
        <img src={`/src/modules/admin/components/images_empty_states/${imagePath}`} style={{
          width: 140, 
          height: 140,
          objectFit: 'cover'
        }} />
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 20,
          color: '#131523',
          marginTop: 24
        }}>{title}</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#5A607F',
          marginTop: 12,
          textAlign: 'center'
        }}>
          {content
            .split('.')
            .filter(sentence => sentence.trim() !== '')
            .map((sentence, i, arr) => (
              <span key={i}>
                {sentence.trim()}.
                {i !== arr.length - 1 && <br />} 
              </span>
            ))}
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          marginTop: 24,
          padding: '8px 20px',
          backgroundColor: '#1E5EFF',
          borderRadius: 4
        }}>
          <Plus size={24} color="white"/>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#FFFFFF',
          }}>{btn}</p>
        </div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#1E5EFF',
          marginTop: 16
        }}>Read More</p>
      </div>
    </div>
  )
}