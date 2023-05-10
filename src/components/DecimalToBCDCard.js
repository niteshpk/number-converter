import React, { useState } from "react";

function DecimalToBCDCard() {
  const [decimalNumber, setDecimalNumber] = useState("");
  const [BCDNumber, setBCDNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const decimalRegex = /^[0-9]+$/;
    if (!decimalRegex.test(decimalNumber)) {
      alert("Please enter a valid decimal number");
      return;
    }

    const decimalString = decimalNumber.toString();
    let BCDString = "";
    for (let i = 0; i < decimalString.length; i++) {
      const digit = parseInt(decimalString[i], 10);
      const BCD = digit.toString(2).padStart(4, "0");
      BCDString += BCD;
    }
    setBCDNumber(BCDString);
  };

  const reset = () => {
    setDecimalNumber("");
    setBCDNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Decimal to Binary Coded Decimal (BCD) Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="decimalNumberDecimalToBCDCard">
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberDecimalToBCDCard"
              onChange={(e) => setDecimalNumber(e.target.value)}
              placeholder="Enter decimal number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="BCDNumberDecimalToBCDCard">
              Binary Coded Decimal (BCD) Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={BCDNumber}
              id="BCDNumberDecimalToBCDCard"
              disabled
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary mt-4" type="submit">
              Convert
            </button>
            <button
              className="btn btn-outline-primary mt-4"
              type="button"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DecimalToBCDCard;
