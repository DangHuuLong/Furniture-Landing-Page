import { Plus, Minus } from 'lucide-react';
export default function Demographics(){
  const regionData = [
    { name: "United States", value: 29051, color: "#1E5EFF" },
    { name: "Europe", value: 18041, color: "#FFC700" },
    { name: "Australia", value: 10430, color: "#FF8A00" },
    { name: "Other", value: 5420, color: "#D7DBEC" }
  ];

  return (
    <div style={{
      flex: 4,
      borderRadius: 6,
      backgroundColor: "white",
      boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
      padding: 36,
      overflow: 'hidden',
      position: 'relative'
    }}>
      <img src="/src/modules/admin/pages/reports/images/World Map.png" style={{
        height: '100%',
        marginLeft: 'auto'
      }}/>
      <div style={{
        position: 'absolute',
        inset: 0,
        padding: 28,
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 16,
          color: '#131523',
        }}>Customer Demographics</p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 52,
          gap: 24
        }}>
          {regionData.map((item, i)=>{
            return <div key={i} style={{
              display: 'flex',
              gap: 8
            }}>
              <div style={{
                width: 12, 
                height: 12,
                borderRadius: 2,
                backgroundColor: item.color
              }}></div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>{item.name}</p>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#131523',
                }}>{item.value.toLocaleString("de-DE")}</p>
              </div>
            </div>
          })}
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: 28,
        right: 100,
        padding: 28,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
          <div style={{
            width: 36,
            height: 36,
            backgroundColor: 'white',
            border: '1px solid #D7DBEC',
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Plus size={24} color='#7E84A3'/>
          </div>
          <div style={{
            width: 36,
            height: 36,
            backgroundColor: 'white',
            border: '1px solid #D7DBEC',
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Minus size={24} color='#7E84A3' />
          </div>
        </div>
      </div>
    </div>
  )
}