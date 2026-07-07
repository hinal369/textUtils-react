export default function Alert({ alert}) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    alert && <div className={`alert alert-${alert.type}`} role="alert">
      <strong>{capitalize(alert.type)}</strong>: {alert.message}
    </div>
  );
}
