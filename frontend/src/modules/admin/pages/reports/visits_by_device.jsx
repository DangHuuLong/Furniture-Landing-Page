import { Smartphone, Laptop, Tablet, Monitor } from "lucide-react";
export default function VisitsByDevice(){
  const deviceData = [
    {
      icon: Smartphone,
      device: "Mobile",
      percent: 62,
    },
    {
      icon: Laptop,
      device: "Laptop",
      percent: 20,
    },
    {
      icon: Tablet,
      device: "Tablet",
      percent: 13,
    },
    {
      icon: Monitor,
      device: "Other",
      percent: 5,
    },
  ];

  return (
    <div style={{
      flex: 1.6,
      borderRadius: 6,
      backgroundColor: "white",
      boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
      padding: 28,
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Visits by Device</p>
      <div style={{
        marginTop: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
        {deviceData.map((item, i)=>(
          <div key={i} style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
            <item.icon size={24} color='#7E84A3' />
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
              marginLeft: 8
            }}>{item.device}</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 14,
              color: '#131523',
              marginLeft: 'auto'
            }}>{item.percent}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}