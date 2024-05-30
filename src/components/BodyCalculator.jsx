// Function imports
import { useState, useEffect } from "react";
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
  const [billValue, setBillValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [peopleValue, setPeopleValue] = useState(0);

  const onChangePeople = (event, totalValue) => {
    const people = parseFloat(event.target.value);
    setPeopleValue(people);
    // const peopleCalculations = peopleCalculator(totalValue, people);
    // setTotalValue(peopleCalculations);
    // if (isNaN(people) || people == 0) {
    //   setTotalValue(totalValue);
    // } else {
    //   setTotalValue(totalValue / people);
    // }
  };

  // Bill and Select Tip %
  const onChange = (event, activeButton, peopleValue) => {
    const value = parseFloat(event.target.value);
    console.log(value);
    console.log("People Value: ", peopleValue);
    const tip = tipCalculator(value, activeButton);

    if (isNaN(value)) {
      setTotalValue(0);
      setBillValue(0);
    } else {
      setTotalValue(value);
      setBillValue(tip);
    }

    if (isNaN(peopleValue) || peopleValue === 0) {
      setTotalValue(value);
    } else {
      setTotalValue(value / peopleValue);
    }
  };

  // Select Tip and Bill
  const handleClick = (type, totalValue) => {
    if (activeButton === type) {
      setActiveButton(null);
      setBillValue(0);
    } else {
      setActiveButton(type);
      const tip = tipCalculator(totalValue, type);
      setBillValue(tip);
    }
  };

  function tipCalculator(value, type) {
    return (value * type) / 100;
  }

  function peopleCalculator(value, people) {
    return value / people;
  }

  return (
    <div className="mx-auto  my-8 max-w-[920px] rounded-t-3xl bg-white lg:rounded-3xl">
      <div className=" px-12 py-8 lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8">
          <div>
            <LabelTitle h2Title={"Bill"} labelName={"inputBill"} />
            <InputBill
              inputName={"inputBill"}
              iconName={iconDollar}
              onChange={() => onChange(event, activeButton, peopleValue)}
            />
          </div>
          <div className="space-y-4">
            <LabelTitle h2Title={"Select Tip %"} labelName={"selectTip"} />
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <TipButton
                className={`${activeButton === 5 ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick(5, totalValue)}
              >
                5%
              </TipButton>
              <TipButton
                className={`${activeButton === 10 ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick(10, totalValue)}
              >
                10%
              </TipButton>
              <TipButton
                className={`${activeButton === 15 ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick(15, totalValue)}
              >
                15%
              </TipButton>
              <TipButton
                className={`${activeButton === 25 ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick(25, totalValue)}
              >
                25%
              </TipButton>
              <TipButton
                className={`${activeButton === 50 ? "bg-primaryCyan text-black" : ""}`}
                onClick={() => handleClick(50, totalValue)}
              >
                50%
              </TipButton>
              <InputBill placeholder={"Custom"} />
            </div>
          </div>
          <div className="space-y-4">
            <LabelTitle h2Title={"Number of People"} />
            <InputBill
              iconName={iconPerson}
              onChange={() => onChangePeople(event, totalValue)}
            />
          </div>
        </div>
        <CalculationBody
          billValue={billValue}
          totalValue={totalValue}
          // onClick={}
        />
      </div>
    </div>
  );
}

export default BodyCalculator;
