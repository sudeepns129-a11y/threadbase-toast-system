export default function ToastContainer({ toasts, onDismiss }) {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => onDismiss(toast.id)}
          role="status"
          aria-live="polite"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onDismiss(toast.id);
            }
          }}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
