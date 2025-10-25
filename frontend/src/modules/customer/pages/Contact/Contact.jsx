import Banner from '../Shop/Banner'
import FeaturesBar from '../Shop/FeaturesBar'
function Contact(){
  return (
    <>
      <Banner name='Contact'/>
      <div style={{
        width: '100%',
        paddingTop: '98px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 600,
          fontSize: '36px',
          color: 'rgba(0,0,0,1)',
          marginBottom: '7px'
        }}>Get In Touch With Us</p>
        <p style={{
          width: '644px',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          color: 'rgba(159,159,159,1)',
          textAlign: 'center',
          marginBottom: '14px'
        }}>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div style={{
          display: 'flex',
          width: '1058px',
          padding: '100px 52px 62px 52px',
          justifyContent: 'space-between'
        }}>
          {/**Left */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '42px'
          }}>
            {/**1 */}
            <div style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'flex-start',
            }}>
              <img src='/src/modules/customer/pages/Contact/images/locate.png' style={{
                width: '22px',
                objectFit: 'cover'
              }}/>
              <div style={{
                width: '212px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: '24px',
                  color: 'rgba(0,0,0,1)',
                }}>Address</p>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgba(0,0,0,1)',
                }}>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            {/**2 */}
            <div style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'flex-start',
            }}>
              <img src='/src/modules/customer/pages/Contact/images/bxs_phone.png' style={{
                width: '30px',
                objectFit: 'cover'
              }} />
              <div style={{
                width: '212px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: '24px',
                  color: 'rgba(0,0,0,1)',
                }}>Phone</p>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgba(0,0,0,1)',
                }}>Mobile: +(84) 546-6789</p>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgba(0,0,0,1)',
                }}>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/**3 */}
            <div style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'flex-start',
            }}>
              <img src='/src/modules/customer/pages/Contact/images/bi_clock-fill.png' style={{
                width: '23px',
                objectFit: 'cover'
              }} />
              <div style={{
                width: '212px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: '24px',
                  color: 'rgba(0,0,0,1)',
                }}>Working Time</p>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgba(0,0,0,1)',
                }}>Monday-Friday: 9:00 - 22:00</p>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgba(0,0,0,1)',
                }}>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/**Right */}
          <div style={{
            width: '528px',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px'
          }}>
            {/**Your name*/}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}>
              {/**Label */}
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)'
              }}>Your name</p>
              {/**Input */}
              <input type='text' placeholder='Abc' style={{
                padding: '20px',
                width: '100%',
                height: '75px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(159,159,159,1)',
                borderRadius: '10px'
              }}></input>
            </div>

            {/**Email address*/}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}>
              {/**Label */}
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)'
              }}>Email address</p>
              {/**Input */}
              <input type='text' placeholder='Abc@def.com' style={{
                padding: '20px',
                width: '100%',
                height: '75px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(159,159,159,1)',
                borderRadius: '10px'
              }}></input>
            </div>

            {/**Subject*/}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}>
              {/**Label */}
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)'
              }}>Subject</p>
              {/**Input */}
              <input type='text' placeholder='This is an optional' style={{
                padding: '20px',
                width: '100%',
                height: '75px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(159,159,159,1)',
                borderRadius: '10px'
              }}></input>
            </div>

            {/**Message*/}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px'
            }}>
              {/**Label */}
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                color: 'rgba(0,0,0,1)'
              }}>Message</p>
              {/**Text Area */}
              <textarea type='text' placeholder='Hi! i’d like to ask about' style={{
                padding: '20px',
                width: '100%',
                height: '120px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(159,159,159,1)',
                borderRadius: '10px'
              }}></textarea>
            </div>

            <div style={{
              width: '238px',
              height: '55px',
              backgroundColor: 'rgba(184, 142, 47, 1)',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '14px'
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                color: 'rgba(255,255,255,1)'
              }}>Submit</p>
            </div>
          </div>
        </div>
      </div>
      <FeaturesBar/>
    </>
  )
}
export default Contact