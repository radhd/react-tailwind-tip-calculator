import LabelTitle from "./LabelTitle";
import InputBill from "./InputBill";
import TipButton from "./TipButton";

function BodyCalculator() {
  return (
    <div className="rounded-t-3xl bg-white">
      <div className="px-12">
        <div>
          <LabelTitle h2Title={"Bill"} labelName={"inputBill"} />
          <InputBill inputName={"inputBill"} />
        </div>
        <LabelTitle h2Title={"Select Tip %"} labelName={"selectTip"} />
        <div className="grid grid-cols-2  gap-4">
          <TipButton>5%</TipButton>
          <TipButton>5%</TipButton>
          <TipButton>5%</TipButton>
        </div>
      </div>
    </div>
  );
}

export default BodyCalculator;
