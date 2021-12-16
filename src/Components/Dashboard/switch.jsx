import React, { useState } from "react";
import Switch from "react-switch";

const CustomSwitch = ({ checkChecked }) => {
  const [checked, setChecked] = useState(checkChecked);
  const handleChange = (checked) => {
    setChecked(checked);
  };
  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      offColor="#434A59"
      onColor="#39BD45"
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
};
export default CustomSwitch;
