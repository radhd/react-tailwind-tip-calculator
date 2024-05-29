import iconDollar from "../assets/icon-dollar.svg";

function InputBill(props) {
  return (
    <label className="relative">
      <span className="absolute left-5 top-1">
        <img src={iconDollar} alt="" />
      </span>
      <input
        className="rounded-md bg-neutralVeryLightGrayishCyan px-5 py-2 text-right focus:outline-none focus:ring-1 focus:ring-primaryCyan"
        type="number"
        name={props.inputName}
        placeholder="0"
      />
    </label>
  );
}

export default InputBill;
