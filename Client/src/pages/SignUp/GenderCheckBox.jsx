import React from "react";

const GenderCheckBox = ({ handleCheckBoxChange, selectedGender }) => {
  return (
    <div>
      <label className="mr-2 text-lg font-semibold text-gray-500">
        <span>Male: </span>
        <input
          type="checkbox"
          className="checkbox checkbox-xs"
          checked={selectedGender === "male"}
          onChange={() => handleCheckBoxChange("male")}
        />
      </label>
      <label className="mr-2 text-lg font-semibold text-gray-500">
        <span>Female: </span>
        <input
          type="checkbox"
          className="checkbox checkbox-xs"
          checked={selectedGender === "female"}
          onChange={() => handleCheckBoxChange("female")}
        />
      </label>
    </div>
  );
};

export default GenderCheckBox;
