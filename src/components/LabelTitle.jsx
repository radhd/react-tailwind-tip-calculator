function LabelTitle(props) {
  return (
    <label htmlFor={props.labelName} className="block">
      {props.h2Title}
    </label>
  );
}

export default LabelTitle;
