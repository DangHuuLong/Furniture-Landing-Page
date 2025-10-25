import Toast from './Toast';
import { useToast } from '../src/contexts/ToastContext';

function ToastContainer() {
  const { toasts, removeToast } = useToast();

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000
  };

  return (
    <div style={containerStyle}>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onDismiss={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}

export default ToastContainer;