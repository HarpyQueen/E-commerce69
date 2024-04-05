import React, { useState } from "react";

function QuantityCounter({ value, setValue }) {
  //   const [value, setValue] = useState(10);

  const handleChange = (event) => {
    let newValue = parseInt(event.target.value, 10);

    // Ensure value is within the range [10, 100]
    if (isNaN(newValue)) {
      // If the input is not a number, set it to the minimum value (10)
      setValue(10);
    } else {
      // Otherwise, ensure it stays within the range [10, 100]
      setValue(Math.min(Math.max(newValue, 10), 100));
    }
  };

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={10}
        max={100}
      />
    </div>
  );
}

export default QuantityCounter;