import CircularMultiProgress from '../../components/circular_multi_progress'
export default function AgeDistribution(){
  const ageData = [
    {
      color: "#1E5EFF", 
      label: "0-18 years",
      percent: 50,
    },
    {
      color: "#FFC700", 
      label: "18-30 years",
      percent: 30,
    },
    {
      color: "#F99600", 
      label: "30-40 years",
      percent: 10,
    },
    {
      color: "#06A561", 
      label: "Other",
      percent: 10,
    },
  ];
  const percents = [50, 30, 10, 10];
  const colors = ["#1E5EFF", "#FFC700", "#F99600", "#06A561"];
  return (
    <div style={{
      flex: 1,
      borderRadius: 6,
      width: "100%",
      backgroundColor: "white",
      padding: 28,
      boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif', 
        fontWeight: 700, 
        fontSize: 16, 
        color: "#131523"
      }}>Age Distribution</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 24
      }}>
        <CircularMultiProgress
          percents={percents}
          colors={colors}
          size={120}
          stroke={12}
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginTop: 28
      }}>
        {ageData.map((item, i)=>{
          return <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{
              width: 12,
              height: 12,
              borderRadius: 2,
              backgroundColor: item.color
            }}></div>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: "#5A607F",
              marginLeft: 8
            }}>{item.label}</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 14,
              color: "#131523",
              marginLeft: 'auto'
            }}>{item.percent}%</p>
          </div>
        })}
      </div>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: '#E6E9F4',
        marginTop: 28
      }}></div>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: "#1E5EFF",
        marginTop: 18
      }}>Find out more</p>

    </div>
  )
}