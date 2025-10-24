import OutlinedInput from "../../components/outlined_input";
import SocialButton from "../../components/social_button";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',  
        margin: 0,
        display: 'grid',
        gridTemplateAreas: '"stack"', 
      }}
    >
      {/* Logo */}
      <div
        style={{
          gridArea: 'stack',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          paddingTop: 52,
          paddingLeft: 62,
          placeSelf: 'start start',   
          zIndex: 2,                
        }}
      >
        <img src="/src/pages/Auth/images/logo.png" alt="logo" />
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 36,
          color: 'rgba(49,49,49,1)'
        }}>
          Your Logo
        </p>
      </div>

      {/* */}
      <div
        style={{
          gridArea: 'stack',
          display: 'grid',
          placeItems: 'center',
          padding: 104,
          zIndex: 1,
        }}
      >
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/**Left */}
          <div style={{
            width: '512px',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 40,
              color: 'rgba(49,49,49,1)',
              marginBottom: 16
            }}>
              Login
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'rgba(49,49,49,1)',
              marginBottom: 36
            }}>
              Login to access your travelwise account
            </p>

            {/**Form */}
            <OutlinedInput
              label="Email"
              type="email"
              placeholder="john.doe@gmail.com"
              onChange={(e) => setEmail(e.target.value)} />
            <OutlinedInput
              label="Password"
              type={showPwd ? "text" : "password"}
              icon={showPwd
                ? "/src/pages/Auth/images/eye-off.png"
                : "/src/pages/Auth/images/eye.png"}
              onIconClick={() => setShowPwd((v) => !v)}
              onChange={(e) => setPwd(e.target.value)} />

            <div style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'flex',
                gap: 8
              }}>
                <input type="checkbox" style={{
                  width: '24px',
                  height: '24px',
                }} />
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  color: 'rgba(49,49,49,1)',
                }}>Remember me</p>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(255,134,130,1)',
              }}>Forgot Password</p>
            </div>

            {/**Button login */}
            <div style={{
              width: '100%',
              height: '48px',
              backgroundColor: 'rgba(81,93,239,1)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: 14,
                color: 'rgba(243,243,243,1)',
              }}>Login</p>
            </div>

            <p style={{
              width: '100%',
              textAlign: 'center',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 14,
              color: 'rgba(49,49,49,1)',
              marginBottom: '40px'
            }}>
              Don’t have an account? <span style={{ color: 'rgba(255,134,130,1)', }}>Sign up</span>
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px'
            }}>
              <div style={{
                height: '1px',
                width: '196px',
                backgroundColor: 'rgba(49,49,49,0.25)'
              }}>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(49,49,49,0.25)',
              }}>Or login with</p>
              <div style={{
                height: '1px',
                width: '196px',
                backgroundColor: 'rgba(49,49,49,0.25)'
              }}>
              </div>
            </div>

            <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between'
            }}>
              <SocialButton iconPath="/src/pages/Auth/images/facebook.png" />
              <SocialButton iconPath="/src/pages/Auth/images/google.png" />
              <SocialButton iconPath="/src/pages/Auth/images/apple.png" />
            </div>
          </div>

          {/**Right */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="/src/pages/Auth/images/login.png"
              alt="login"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />

            {/* Indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            >
              <div style={{
                width: 32, height: 10, borderRadius: 5, backgroundColor: 'rgba(81,93,239,1)'
              }} />
              <div style={{
                width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,1)'
              }} />
              <div style={{
                width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,1)'
              }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
