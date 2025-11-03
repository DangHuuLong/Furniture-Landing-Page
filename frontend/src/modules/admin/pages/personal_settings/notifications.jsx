import ToggleButton from "../../components/toggle_button";

export default function Notifications(){
  const notifications = [
    {
      title: "Personalized Offers",
      description: "Receive offers made special for you",
    },
    {
      title: "Online Webinars",
      description: "Get notified about upcoming webinars",
    },
    {
      title: "New Features",
      description: "Updates about new features and product releases",
    },
    {
      title: "Security and Billing",
      description: "Account security and notifications about billing",
    },
    {
      title: "Marketing",
      description: "Receive marketing newsletters about our new products.",
    },
  ];

  return (
    <div style={{
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
      {notifications.map((notification, i)=>{
        return <>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: '#131523',
              }}>{notification.title}</p>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}>{notification.description}</p>
            </div>
            <ToggleButton />
          </div>
          {i!==notifications.length-1&& (
            <div style={{
              height: 1,
              width: '100%',
              backgroundColor: '#E6E9F4'
            }}></div>
          )}
        </>
      })}
    </div>
  )
}