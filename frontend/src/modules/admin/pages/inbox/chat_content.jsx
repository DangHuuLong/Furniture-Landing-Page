import { UserRound, Video, Settings, Paperclip } from 'lucide-react';
export default function ChatContent(){
  return (
    <div style={{
      flex: 2.2,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        padding: 28,
        flex: 1,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: "#131523",
            }}>Luis Pittman</p>
            <div style={{
              width: 16,
              height: 16,
              marginLeft: 4,
              backgroundColor: '#1FD286',
              border: '4px solid #FFFFFF',
              borderRadius: '50%',
            }}></div>
          </div>
          <div style={{
            display: 'flex',
            gap: 20
          }}>
            <UserRound size={24} color='#7E84A3' />
            <Video size={24} color='#7E84A3' />
            <Settings size={24} color='#7E84A3' />
          </div>
        </div>
        <div style={{
          height: 1,
          width: '100%',
          backgroundColor: '#E6E9F4',
          marginTop: 24
        }}></div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 28,
          gap: 28,
          flex: 1
        }}>
          {/**Outgoing Text*/}
          <div style={{
            display: 'flex',
            gap: 16
          }}>
            {/**Avatar */}
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}>
              <img src='https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q' style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              maxWidth: 460,
              minWidth: 0,
            }}>
              <div style={{
                width: '100%',
                borderRadius: 4,
                backgroundColor: '#1E5EFF',
                padding: 12
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#FFFFFF",
                }}>Hi, I wonder when if there is going to be anything new for spring?</p>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 12,
                color: "#A1A7C4",
              }}>12:24 AM</p>
            </div>
          </div>
          {/**Incoming Text*/}
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'flex-end'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              maxWidth: 460,
              minWidth: 0,
              alignItems: 'flex-end'
            }}>
              <div style={{
                width: '100%',
                borderRadius: 4,
                backgroundColor: '#E6E9F4',
                padding: 12
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#131523",
                }}>Hi Luis, can you please be more specific?</p>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 12,
                color: "#A1A7C4",
              }}>12:31 AM</p>
            </div>
            {/**Avatar */}
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xZ-Dad8MElzAFU9iBlSx4qAMtYpnKzEt_Q&s' style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
          </div>
          {/**Incoming Image*/}
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'flex-end'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              maxWidth: 460,
              minWidth: 0,
              alignItems: 'flex-end'
            }}>
              <div style={{
                display: 'flex',
                gap: 12
              }}>
                <div style={{
                  width: 96,
                  height: 96,
                  borderRadius: 4,
                  backgroundColor: '#ECF2FF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  <img src='https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg' style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}/>
                </div>
                <div style={{
                  width: 96,
                  height: 96,
                  borderRadius: 4,
                  backgroundColor: '#ECF2FF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  <img src='https://contents.mediadecathlon.com/p2875053/k$4e8f06bf8a684d9ac7f74e5ffc48c4b1/qu%E1%BA%A7n-short-tennis-pickleball-nam-dry-tsh-100-xanh-navy-kuikma-962194.jpg' style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                </div>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 12,
                color: "#A1A7C4",
              }}>12:59 AM</p>
            </div>
            {/**Avatar */}
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xZ-Dad8MElzAFU9iBlSx4qAMtYpnKzEt_Q&s' style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
          </div>
        </div>
      </div>
      {/**Send Message */}
      <div style={{
        height: 54,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 42,
        paddingInline: 28,
        borderTop: '1px solid #E6E9F4'
      }}>
        <input type='text' 
          placeholder='Your message…'
          style={{
            border: 'none',
            outline: 'none',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: "#A1A7C4",
          }}/>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20
        }}>
          <Paperclip size={24} color='#7E84A3'/>
          <button style={{
            width: 74,
            height: 36,
            borderRadius: 4,
            backgroundColor: '#1E5EFF',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: "#FFFFFF",
            }}>Send</p>
          </button>
        </div>
      </div>
    </div>
  )
}