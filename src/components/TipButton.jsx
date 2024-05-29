function TipButton({ children, onClick, className }) {
  return (
    <button
      className={`rounded-md bg-neutralVeryDarkCyan px-4 py-2 text-2xl text-white lg:transition-all  lg:hover:bg-[#9FE8DF] lg:hover:text-[#00474B] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TipButton;
