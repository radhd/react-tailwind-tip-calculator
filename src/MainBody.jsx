import SplitTitle from "./components/SplitTitle";
import SectionTitle from "./components/SectionTitle";
import inputBill from "./components/InputBill";
import BodyCalculator from "./components/BodyCalculator";

function MainBody() {
  return (
    <div className="font-fontFamily bg-neutralLightGrayishCyan text-neutralVeryDarkCyan">
      <SplitTitle />
      <BodyCalculator />
    </div>
  );
}

export default MainBody;
