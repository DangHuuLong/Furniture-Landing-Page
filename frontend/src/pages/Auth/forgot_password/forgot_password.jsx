import { useState } from "react";
import { Link } from "react-router-dom";
import OutlinedInput from "../../../components/outlined_input";
import SocialButton from "../../../components/social_button";

function ForgotPassword() {
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
            <Link
              to="/login"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                textDecoration: 'none',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(49,49,49,1)',
                cursor: 'pointer',
              }}
              aria-label="Back to login"
            >
              <img
                src="/src/pages/Auth/images/arrow_left.png"
                alt=""
                style={{ display: 'block' }}
              />
              <span>Back to login</span>
            </Link>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 40,
              color: 'rgba(49,49,49,1)',
              marginBottom: 16
            }}>
              Forgot your password?
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'rgba(49,49,49,1)',
              textWrap: 'wrap',
              marginBottom: 36
            }}>
              Don’t worry, happens to all of us. Enter your email below to recover your password
            </p>

            {/**Form */}
            <OutlinedInput
              label="Email"
              type="email"
              placeholder="john.doe@gmail.com"
              onChange={(e) => setEmail(e.target.value)} />

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
              }}>Submit</p>
            </div>

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
              }}>Or login with</p>
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

          {/**Right */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="/src/pages/Auth/images/forgot_password.png"
              alt="login"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
