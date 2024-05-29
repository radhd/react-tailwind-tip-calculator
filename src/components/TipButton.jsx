function TipButton({
  children,
  className = "bg-neutralVeryDarkCyan text-white",
  onClick,
}) {
  // const [isToggled, setIsToggled] = useState(false);

  // const toggleButton = () => {
  //   setIsToggled(!isToggled);
  // };

  // ${isToggled ? `bg-primaryCyan text-black` : className}

  return (
    <button
      className={`rounded-md px-4 py-2 text-2xl lg:transition-all lg:hover:bg-[#9FE8DF] lg:hover:text-[#00474B]  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TipButton;
