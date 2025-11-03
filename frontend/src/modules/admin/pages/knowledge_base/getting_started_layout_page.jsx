import { NavLink, Outlet } from 'react-router-dom';
import { MoveLeft, Search } from 'lucide-react';
import InfoCard from './info_card';

export default function GettingStartedLayoutPage() {
  const options = [
    { title: 'Introduction to Product', to: '/knowledge-base/getting-started/introduction' },
    { title: 'Tutorials for Beginners', to: '/knowledge-base/getting-started/tutorials' },
    { title: 'Moving to Bolt System', to: '/knowledge-base/getting-started/move' },
    { title: 'Accessibility', to: '/knowledge-base/getting-started/accessibility' },
    { title: 'Content Management', to: '/knowledge-base/getting-started/content' },
    { title: 'Generating Reports', to: '/knowledge-base/getting-started/reports' },
  ];

  const infoCards = [
    {
      title: 'Community Forum',
      content: 'Get help from community members, ask any questions and get answers faster.',
      action: 'Join Community'
    },
    {
      title: 'Webinars',
      content: 'Join our series of webinars where you can ask questions live and see a presentation.',
      action: 'Register'
    }
  ]
  return (
    <div
      style={{
        padding: '30px 40px 40px 40px',
        display: 'flex',
        gap: 30,
        backgroundColor: '#F5F6FA',
        height: '100%'
      }}
    >
      <div style={{ flex: 1 }}>
        <NavLink
          to="/knowledge-base"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            textDecoration: 'none',
          }}
        >
          <MoveLeft size={14} color="#7E84A3" />
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}
          >
            Back
          </p>
        </NavLink>

        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 24,
            color: '#131523',
          }}
        >
          Getting Started
        </p>

        {/* Sidebar Options */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginTop: 30,
            width: '100%',
          }}
        >
          {options.map((option, i) => (
            <NavLink
              key={i}
              to={option.to}
              style={({ isActive }) => ({
                width: '100%',
                padding: '12px 20px',
                borderRadius: 5,
                backgroundColor: isActive ? '#1E2753' : 'transparent',
                textDecoration: 'none',
              })}
            >
              {({ isActive }) => (
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: 14,
                    color: isActive ? 'white' : '#151B26',
                  }}
                >
                  {option.title}
                </p>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        style={{
          flex: 3.2,
          marginTop: 42,
        }}
      >
        {/**Search */}
        <div style={{
          position: 'relative',
          marginBottom: 4
        }}>
          <input type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              height: 48,
              borderRadius: 4,
              border: '1px solid #D9E1EC',
              outline: 'none',
              paddingLeft: 40,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#A1A7C4',
            }} />
          <div style={{
            position: 'absolute',
            top: '20%',
            left: 10,
          }}>
            <Search size={24} color='#7E84A3' />
          </div>
        </div>

        <Outlet />

        <div style={{
          display: 'flex',
          gap: 30,
          marginTop: 30
        }}>
          {infoCards.map((infoCard, i) => {
            return <InfoCard key={i} infoCard={infoCard} />
          })}
        </div>
      </div>
    </div>
  );
}
