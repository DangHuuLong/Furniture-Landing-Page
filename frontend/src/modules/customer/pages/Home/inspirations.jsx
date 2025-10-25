function Inspirations() {
  return (
    <div
      style={{
        height: '670px',
        marginTop: '69px',
        paddingLeft: '100px',
        backgroundColor: 'rgba(252, 248, 243, 1)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Left Side - Text Content */}
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '700',
            fontSize: '40px',
            color: 'rgba(58, 58, 58, 1)',
          }}
        >
          50+ Beautiful rooms<br />inspiration
        </p>
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            color: 'rgba(97, 97, 97, 1)',
            marginTop: '7px',
            marginBottom: '25px',
          }}
        >
          Our designer already made a lot of beautiful<br />prototype of rooms that inspire you
        </p>
        <div
          style={{
            width: '176px',
            height: '48px',
            backgroundColor: 'rgba(184, 142, 47, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '600',
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            Explore More
          </p>
        </div>
      </div>

      {/* Right Side - Images */}
      <div
        style={{
          marginLeft: '42px',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        <div style={{
          height: '582px',
          display: 'flex',
          alignItems: 'flex-start',
        }}>
          {/* Main Image */}
          <div
            style={{
              width: '404px',
              height: '582px',
              position: 'relative',
              display: 'inline-block',
              marginRight: '24px',
            }}
          >
            <img
              src="/src/modules/customer/pages/Home/images/Rectangle 24.png"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            {/* Overlay Content */}
            <div
              style={{
                position: 'absolute',
                left: '24px',
                bottom: '24px',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <div
                style={{
                  width: '217px',
                  height: '130px',
                  backgroundColor: 'rgba(255, 255, 255, 0.72)',
                  paddingLeft: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: 16,
                    color: 'rgba(97,97,97,1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    margin: 0,
                  }}
                >
                  <span>01</span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 27,
                      height: 1,
                      backgroundColor: 'rgba(97,97,97,1)',
                      display: 'inline-block',
                    }}
                  />
                  <span>Bed Room</span>
                </p>
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    fontSize: 28,
                    color: 'rgba(58,58,58,1)',
                    margin: '6px 0 0',
                  }}
                >
                  Inner Peace
                </p>
              </div>
              <div
                style={{
                  height: '48px',
                  width: '48px',
                  backgroundColor: 'rgba(184, 142, 47, 1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/src/modules/customer/pages/Home/images/arrow-right.png"
                  style={{
                    width: '18px',
                    height: '12px',
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '40px',
          }}>
            {/* Additional Images */}
            <div
              style={{
                display: 'inline-flex',
                gap: '24px',
                whiteSpace: 'nowrap',
              }}
            >
              <img
                src="/src/modules/customer/pages/Home/images/Rectangle 25.png"
                style={{
                  width: '372px',
                  height: '486px',
                  display: 'inline-block',
                }}
              />
              <img
                src="/src/modules/customer/pages/Home/images/Rectangle 26.png"
                style={{
                  width: '372px',
                  height: '486px',
                  display: 'inline-block',
                }}
              />
            </div>

            {/* Pagination Dots */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}>
              <div style={{
                width: '27px',
                height: '27px',
                borderRadius: '50%',
                border: '1px solid rgba(184, 142, 47, 1)',
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={{
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(184, 142, 47, 1)',
                }}></div>
              </div>

              <div style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: 'rgba(216, 216, 216, 1)',
              }}></div>

              <div style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: 'rgba(216, 216, 216, 1)',
              }}></div>

              <div style={{
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                backgroundColor: 'rgba(216, 216, 216, 1)',
              }}></div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Right Arrow Button */}
      <div style={{
        width: '48px',
        height: '48px',
        position: 'absolute',
        top: '50%',
        right: '67px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }}>
        <img src="/src/modules/customer/pages/Home/images/Right 24px.png" style={{
          width: '24px',
          height: '24px',
        }}/>
      </div>
    </div>
  );
}

export default Inspirations;