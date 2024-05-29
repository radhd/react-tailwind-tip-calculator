// Function imports
import { useState } from "react";
// Images
import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";
// Components
import LabelTitle from "./LabelTitle";
import InputBill from "./InputBill";
import TipButton from "./TipButton";
import CalculationBody from "./CalculationBodyComponents/CalculationBody";

function BodyCalculator() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (type) => {
    if (activeButton === type) {
      setActiveButton(null);
    } else {
      setActiveButton(type);
    }
  };

  return (
    <div className="mx-auto  my-8 max-w-[920px] rounded-t-3xl bg-white lg:rounded-3xl">
      <div className=" px-12 py-8 lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8">
          <div>
            <LabelTitle h2Title={"Bill"} labelName={"inputBill"} />
            <InputBill inputName={"inputBill"} iconName={iconDollar} />
          </div>
          <div className="space-y-4">
            <LabelTitle h2Title={"Select Tip %"} labelName={"selectTip"} />
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <TipButton
                className={`${activeButton === "5%" ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick("5%")}
              >
                5%
              </TipButton>
              <TipButton
                className={`${activeButton === "10%" ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick("10%")}
              >
                10%
              </TipButton>
              <TipButton
                className={`${activeButton === "15%" ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick("15%")}
              >
                15%
              </TipButton>
              <TipButton
                className={`${activeButton === "25%" ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick("25%")}
              >
                25%
              </TipButton>
              <TipButton
                className={`${activeButton === "50%" ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick("50%")}
              >
                50%
              </TipButton>
              <InputBill placeholder={"Custom"} />
            </div>
          </div>
          <div className="space-y-4">
            <LabelTitle h2Title={"Number of People"} />
            <InputBill iconName={iconPerson} />
          </div>
        </div>
        <CalculationBody />
      </div>
    </div>
  );
}

export default BodyCalculator;
