import { useRef, useState, useEffect } from "react";
export default function LineChartCard(){
  const orderValueData = [
    { date: '4am', value: 20 },
    { date: '6am', value: 10 },
    { date: '8am', value: 40 },
    { date: '10am', value: 25 },
    { date: '12pm', value: 20 },
    { date: '2pm', value: 28 },
    { date: '4pm', value: 30 },
    { date: '6pm', value: 50 },
    { date: '8pm', value: 70 },
    { date: '10pm', value: 45 },
  ];

  const maxValue = Math.max(...orderValueData.map(item => item.value));
  const roundedMax = Math.ceil(maxValue / 20) * 20;
  const barsRef = useRef(null);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    if (barsRef.current) {
      const h = barsRef.current.offsetHeight;
      setInnerHeight(h - 40);
    }
  }, []);
  return (
    <div style={{
      flex: 1,
      borderRadius: 6,
      padding: 28,
      backgroundColor: 'white'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Average Order Value</p>
      <div style={{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>This Month</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 14,
            color: '#131523',
          }}>$48.90</p>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>Previous Month</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 14,
            color: '#131523',
          }}>$48.90</p>
        </div>
      </div>
      {/**Graph */}
      <div style={{
        marginTop: 24
      }}>
        <div style={{
          position: 'relative'
        }}>
          {Array.from({ length: roundedMax / 20 + 1 }, (_, i) => i)
            .reverse()
            .map((i) => (
              <div key={`grid-${i}`} style={{
                display: 'flex',
                height: 40,
                alignItems: 'center',
                gap: 6
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 12,
                  color: '#A1A7C4',
                  flex: 1
                }}>${i * 20}</p>
                <div style={{
                  height: 1,
                  flex: 11,
                  border: '1px dashed #D9E1EC'
                }}></div>
              </div>
            ))}
          <div
            ref={barsRef} style={{
            position: 'absolute',
            inset: 0,
            display: "flex",
            gap: 6,
          }}>
            <div style={{flex: 1}}></div>
            <div style={{ 
              flex: 11,
              height: "100%",
              padding: "20px 0",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}>
              {orderValueData.map((item, i)=>{
                return <div key={i} style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  backgroundColor: '#1E5EFF',
                  marginBottom: innerHeight / roundedMax * item.value
                }}></div>
              })}
            </div>

          </div>
        </div>
        <div style={{
          display: 'flex',
          height: 32,
          alignItems: 'center',
          gap: 6
        }}>
          <div style={{flex: 1}}></div>
          <div style={{
            display: 'flex',
            flex: 11,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {orderValueData.map((item, i)=>{
              return <p key={i} style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 12,
                color: '#A1A7C4',
              }}>{item.date}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}