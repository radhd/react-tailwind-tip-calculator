import TipButton from "../TipButton";

function CalculationBody() {
  return (
    <div className="mt-8 flex flex-col justify-between space-y-5 rounded-2xl bg-neutralVeryDarkCyan p-6 lg:mt-0 lg:p-10">
      <div className="space-y-5 lg:space-y-10">
        <div className="flex items-center justify-between">
          <PerPerson>Tip Amount</PerPerson>
          <CalculatedNumber>4.27</CalculatedNumber>
        </div>
        <div className="flex items-center justify-between">
          <PerPerson>Total</PerPerson>
          <CalculatedNumber>32.79</CalculatedNumber>
        </div>
      </div>

      <TipButton
        className={
          "w-full bg-primaryCyan px-0 py-0 text-xl !text-[#00474B] hover:bg-[#9FE8DF] "
        }
      >
        RESET
      </TipButton>
    </div>
  );
}

function PerPerson({ children }) {
  return (
    <div className="block text-white">
      <span className="block">{children}</span>
      <span className="block text-sm opacity-40">/ person</span>
    </div>
  );
}

function CalculatedNumber({ children }) {
  return (
    <span className="text-3xl text-primaryCyan lg:text-5xl">${children}</span>
  );
}

export default CalculationBody;
