import SplitTitle from "./components/SplitTitle";
import SectionTitle from "./components/LabelTitle";
import inputBill from "./components/InputBill";
import BodyCalculator from "./components/BodyCalculator";

function MainBody() {
  return (
    <div className="font-fontFamily bg-neutralLightGrayishCyan font-bold text-neutralVeryDarkCyan">
      <SplitTitle />
      <BodyCalculator />
    </div>
  );
}

export default MainBody;
