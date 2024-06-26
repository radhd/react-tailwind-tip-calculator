function InputBill(props) {
  return (
    <label className="relative">
      <span className="absolute left-5 top-1">
        <img src={props.iconName} alt="" />
      </span>
      <input
        className="w-full cursor-pointer rounded-md bg-neutralVeryLightGrayishCyan px-5 py-3 text-right focus:outline-none focus:ring-1 focus:ring-primaryCyan"
        type="text"
        value={props.value}
        onChange={props.onChange}
        name={props.inputName}
        placeholder={props.placeholder || "0"}
        maxLength={6}
      />
    </label>
  );
}

export default InputBill;
