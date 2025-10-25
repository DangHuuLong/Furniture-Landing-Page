import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../../../contexts/ToastContext";
import OutlinedInput from "../../components/outlined_input";

function SetNewPassword() {
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [rePwd, setRePwd] = useState("");
  const [showRePwd, setShowRePwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSetPassword = async () => {
    if (!pwd || !rePwd) { showToast("Please fill both password fields", "warning"); return; }
    if (pwd !== rePwd) { showToast("Passwords do not match", "warning"); return; }

    const email = localStorage.getItem("fp_email");
    const resetToken = localStorage.getItem("fp_token");
    if (!email || !resetToken) { showToast("Reset session expired. Start over.", "warning"); return; }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resetToken, newPassword: pwd })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { showToast(data?.message || "Failed to reset password", "error"); return; }

      // cleanup & điều hướng
      localStorage.removeItem("fp_email");
      localStorage.removeItem("fp_token");
      showToast("Password updated. Please log in.", "success");
      navigate("/");
    } catch {
      showToast("Network error. Please try again", "error");
    } finally {
      setLoading(false);
    }
  };

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
        <img src="/src/modules/Auth/pages/images/logo.png" alt="logo" />
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
              to="/"
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
                src="/src/modules/Auth/pages/images/arrow_left.png"
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
              Set a password
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'rgba(49,49,49,1)',
              textWrap: 'wrap',
              marginBottom: '48px'
            }}>
              Your previous password has been reseted. Please set a new password for your account.
            </p>

            {/**Form */}
            <OutlinedInput
              label="Create Password"
              type={showPwd ? "text" : "password"}
              icon={showPwd
                ? "/src/modules/Auth/pages/images/eye-off.png"
                : "/src/modules/Auth/pages/images/eye.png"}
              onIconClick={() => setShowPwd((v) => !v)}
              onChange={(e) => setPwd(e.target.value)} />

            <OutlinedInput
              label="Re-enter Password"
              type={showRePwd ? "text" : "password"}
              icon={showRePwd
                ? "/src/modules/Auth/pages/images/eye-off.png"
                : "/src/modules/Auth/pages/images/eye.png"}
              onIconClick={() => setShowRePwd((v) => !v)}
              onChange={(e) => setRePwd(e.target.value)} />

            {/**Button login */}
            <button 
              onClick={handleSetPassword}
              disabled={loading}
            style={{
              width: '100%',
              height: '48px',
              outline: 'none',        
              boxShadow: 'none',
              border: 'none',
              backgroundColor: 'rgba(81,93,239,1)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: 14,
                color: 'rgba(243,243,243,1)',
              }}>
              {loading ? "Setting password..." : "Set password"}
              </p>
            </button>
          </div>

          {/**Right */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="/src/modules/Auth/pages/images/set_new_password.png"
              alt="login"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetNewPassword;
