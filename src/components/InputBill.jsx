import { useState } from "react";

function InputBill(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <label className="relative">
      <span className="absolute left-5 top-1">
        <img src={props.iconName} alt="" />
      </span>
      <input
        className="w-full cursor-pointer rounded-md bg-neutralVeryLightGrayishCyan px-5 py-3 text-right focus:outline-none focus:ring-1 focus:ring-primaryCyan"
        type="numeric"
        value={value}
        onChange={handleChange}
        name={props.inputName}
        placeholder={props.placeholder || "0"}
      />
    </label>
  );
}

export default InputBill;
