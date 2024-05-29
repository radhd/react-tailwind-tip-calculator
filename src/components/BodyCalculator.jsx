// Images
import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";
// Components
import LabelTitle from "./LabelTitle";
import InputBill from "./InputBill";
import TipButton from "./TipButton";
import CalculationBody from "./CalculationBodyComponents/CalculationBody";

function BodyCalculator() {
  return (
    <div className="rounded-t-3xl bg-white py-8">
      <div className="space-y-8 px-12">
        <div>
          <LabelTitle h2Title={"Bill"} labelName={"inputBill"} />
          <InputBill inputName={"inputBill"} iconName={iconDollar} />
        </div>
        <div className="space-y-4">
          <LabelTitle h2Title={"Select Tip %"} labelName={"selectTip"} />
          <div className="grid grid-cols-2 gap-4">
            <TipButton>5%</TipButton>
            <TipButton>10%</TipButton>
            <TipButton className={`bg-primaryCyan text-black`}>15%</TipButton>
            <TipButton>25%</TipButton>
            <TipButton>50%</TipButton>
            <TipButton className={`bg-[#F3F9FA] text-right text-[#547878]`}>
              Custom
            </TipButton>
          </div>
        </div>
        <div className="space-y-4">
          <LabelTitle h2Title={"Number of People"} />
          <InputBill iconName={iconPerson} />
        </div>
        <CalculationBody />
      </div>
    </div>
  );
}

export default BodyCalculator;
