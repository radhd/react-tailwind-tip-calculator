function TipButton({
  children,
  className = "bg-neutralVeryDarkCyan text-white",
}) {
  return (
    <button className={`rounded-md px-4 py-2 text-2xl  ${className}`}>
      {children}
    </button>
  );
}

export default TipButton;
