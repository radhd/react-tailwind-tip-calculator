import LabelTitle from "./LabelTitle";
import InputBill from "./InputBill";

function BodyCalculator() {
  return (
    <div>
      <div className="px-12">
        <LabelTitle h2Title={"Bill"} labelName={"inputBill"} />
        <InputBill inputName={"inputBill"} />
      </div>
    </div>
  );
}

export default BodyCalculator;
