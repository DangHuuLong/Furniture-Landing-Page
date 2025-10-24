import { useState } from "react";
import { Link } from "react-router-dom";
import OutlinedInput from "../../components/outlined_input";
import SocialButton from "../../components/social_button";

function SignUp() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [confPwd, setConfPwd] = useState("");
  const [showConfPwd, setShowConfPwd] = useState(false);
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
          paddingRight: 108,
          placeSelf: 'start end',
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
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="/src/pages/Auth/images/signup.png"
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

          {/**Right */}
          <div style={{
            width: '640px',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 40,
              color: 'rgba(49,49,49,1)',
              marginBottom: 16
            }}>
              Sign up
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'rgba(49,49,49,1)',
              marginBottom: 36
            }}>
              Let’s get you all st up so you can access your personal account.
            </p>

            {/**Form */}
            <div style={{
              display: 'flex',
              width: '100%',
              gap: '24px',
            }}>
              <OutlinedInput 
                label="First Name"
                type="text"
                placeholder="Huu Long"
                onChange={(e) => setFirstName(e.target.value)} />
              <OutlinedInput
                label="Last Name"
                type="text"
                placeholder="Dang"
                onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div style={{
              display: 'flex',
              width: '100%',
              gap: '24px',
            }}>
              <OutlinedInput
                label="Email"
                type="email"
                placeholder="danghuulong@gmail.com"
                onChange={(e) => setEmail(e.target.value)} /> 
              <OutlinedInput
                label="Phone Number"
                type="text"
                placeholder="0912345678"
                onChange={(e) => setPhone(e.target.value)} />
            </div>
            <OutlinedInput
              label="Password"
              type={showPwd ? "text" : "password"}
              icon={showPwd
                ? "/src/pages/Auth/images/eye-off.png"
                : "/src/pages/Auth/images/eye.png"}
              onIconClick={() => setShowPwd((v) => !v)}
              onChange={(e) => setPwd(e.target.value)} />
            <OutlinedInput
              label="Confirm Password"
              type={showConfPwd ? "text" : "password"}
              icon={showConfPwd
                ? "/src/pages/Auth/images/eye-off.png"
                : "/src/pages/Auth/images/eye.png"}
              onIconClick={() => setShowConfPwd((v) => !v)}
              onChange={(e) => setConfPwd(e.target.value)} />

            <div style={{
              display: 'flex',
              gap: 8,
              marginBottom: '40px'
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
              }}>I agree to all the <span style={{ color: 'rgba(255,134,130,1)' }}>Terms</span> and <span style={{ color: 'rgba(255,134,130,1)' }}>Privacy Policies</span></p>
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
              }}>Create account</p>
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
              Already have an account? <Link to="/login" style={{ textDecoration: "none", color: "inherit", font: "inherit", color: 'rgba(255,134,130,1)' }}>Login</Link>
            </p>

            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',
              gap: '16px'
            }}>
              <div style={{
                height: '1px',
                width: '100%',
                backgroundColor: 'rgba(49,49,49,0.25)'
              }}>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: 'rgba(49,49,49,0.25)',
                textWrap: 'nowrap'
              }}>Or Sign up with</p>
              <div style={{
                height: '1px',
                width: '100%',
                backgroundColor: 'rgba(49,49,49,0.25)'
              }}>
              </div>
            </div>

            <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              gap: '16px'
            }}>
              <SocialButton iconPath="/src/pages/Auth/images/facebook.png" />
              <SocialButton iconPath="/src/pages/Auth/images/google.png" />
              <SocialButton iconPath="/src/pages/Auth/images/apple.png" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
