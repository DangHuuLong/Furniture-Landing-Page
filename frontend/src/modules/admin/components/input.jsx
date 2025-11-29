export default function Input({
  label,
  inputHeight = 40,
  placeHolder,
  Icon,
  iconFunc,
  ...rest   // value, onChange, onClick, readOnly, type, style, ...
}) {
  const { style, type, ...inputProps } = rest;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: '100%',
      }}
    >
      {label && (
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}
        >
          {label}
        </p>
      )}

      <div style={{ position: 'relative' }}>
        <input
          {...inputProps}                 // value, onChange, onClick, readOnly, ...
          type={type || 'text'}
          placeholder={placeHolder}
          style={{
            height: inputHeight,
            width: '100%',
            borderRadius: 4,
            border: '1px solid #D9E1EC',
            padding: '8px 16px',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523',
            outline: 'none',
            cursor:
              inputProps.readOnly && (inputProps.onClick || iconFunc)
                ? 'pointer'
                : 'text',
            ...(style || {}),
          }}
        />

        {Icon && (
          <button
            type="button"
            style={{
              position: 'absolute',
              outline: 'none',
              backgroundColor: 'transparent',
              right: 0,
              top: '20%',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={iconFunc || inputProps.onClick}
          >
            <Icon size={24} color="#7E84A3" />
          </button>
        )}
      </div>
    </div>
  );
}
