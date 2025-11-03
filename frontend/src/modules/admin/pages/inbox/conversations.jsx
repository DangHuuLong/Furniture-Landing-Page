import { Search } from "lucide-react";
import { useState } from "react"; 

export default function Conversations({ inboxConversations }) {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div style={{
      flex: 1,
      padding: '10px 0px 18px 0px',
      height: '100%',
      borderRight: '1px solid #E6E9F4'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 26,
        color: "#131523",
        marginLeft: 32
      }}>Conversations</p>

      <div style={{
        margin: '48px 26px 0px 32px',
        position: 'relative'
      }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: '100%',
            height: 40,
            borderRadius: 5,
            border: '1px solid #D9E1EC',
            paddingLeft: 50,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: "#A1A7C4",
            outline: 'none'
          }}
        />
        <div style={{
          position: 'absolute',
          left: 15,
          top: '20%'
        }}>
          <Search size={24} color="#7E84A3" />
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        {inboxConversations.map((inboxConversation, i) => {
          const isActive = activeId === i; 

          return (
            <div
              key={i}
              onClick={() => handleClick(i)} 
              style={{
                padding: '24px 24px 24px 32px',
                display: 'flex',
                gap: 16,
                backgroundColor: isActive ? '#ECF2FF' : 'transparent',
                cursor: 'pointer', 
                transition: 'background-color 0.2s ease', 
              }}
            >
              {/* Avatar + Online */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                position: 'relative',
                flexShrink: 0
              }}>
                <img
                  src={inboxConversation.avatar}
                  alt={inboxConversation.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                {inboxConversation.isOnline && (
                  <div style={{
                    width: 16,
                    height: 16,
                    backgroundColor: '#1FD286',
                    border: '4px solid #FFFFFF',
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: -2,
                    right: -2
                  }} />
                )}
              </div>

              {/* Nội dung */}
              <div style={{
                flex: 1,
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#131523",
                      margin: 0
                    }}>
                      {inboxConversation.name}
                    </p>
                    {inboxConversation.messageNoRead > 0 && (
                      <div style={{
                        minWidth: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: '#1E5EFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 700,
                          fontSize: 10,
                          color: "#FFFFFF"
                        }}>
                          {inboxConversation.messageNoRead}
                        </span>
                      </div>
                    )}
                  </div>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#A1A7C4",
                    margin: 0
                  }}>
                    {inboxConversation.timeLastSeen}
                  </p>
                </div>

                {/* Tin nhắn cuối - cắt đẹp */}
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  maxWidth: 250,
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  margin: '4px 0 0 0'
                }}>
                  {inboxConversation.lastMessage}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}