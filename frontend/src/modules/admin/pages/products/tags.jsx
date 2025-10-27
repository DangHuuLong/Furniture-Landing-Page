import SizeTag from "../../components/size_tag";

export default function Tags({tags}){
  return (
    <div style={{
      width: '100%',
      borderRadius: 6,
      backgroundColor: 'white',
      padding: 28
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Tags</p>
      <div style={{
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#5A607F',
        }}>Add Tags</p>
        <input type="text" style={{
          width: '100%',
          height: 40,
          borderRadius: 4,
          border: '1px solid #D9E1EC',
          outline: "none",
          padding: '8px 16px'
        }}/>
      </div>
      <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginTop: 20
      }}>
        {tags.map((tag, i)=>{
          return <div key={i}><SizeTag size={tag}/></div>
        })}
      </div>
    </div>
  )
}