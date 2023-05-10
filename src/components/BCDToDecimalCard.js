import React, { useState } from "react";

function BCDToDecimalCard() {
  const [BCDNumber, setBCDNumber] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const BCDRegex = /^[01]+$/;
    if (!BCDRegex.test(BCDNumber)) {
      alert("Please enter a valid Binary Coded Decimal (BCD) number");
      return;
    }

    let decimalNumber = 0;
    for (let i = 0; i < BCDNumber.length; i += 4) {
      const BCDSubset = BCDNumber.substring(i, i + 4);
      decimalNumber = decimalNumber * 10 + parseInt(BCDSubset, 2);
    }
    setDecimalNumber(decimalNumber);
  };

  const reset = () => {
    setBCDNumber("");
    setDecimalNumber("");
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>Binary Coded Decimal (BCD) to Decimal Conversion</strong>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="BCDNumberBCDToDecimalCard">
              Binary Coded Decimal (BCD) Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={BCDNumber}
              id="BCDNumberBCDToDecimalCard"
              onChange={(e) => setBCDNumber(e.target.value)}
              placeholder="Enter Binary Coded Decimal (BCD) number"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="decimalNumberBCDToDecimalCard">
              Decimal Number:
            </label>
            <input
              className="form-control"
              type="text"
              value={decimalNumber}
              id="decimalNumberBCDToDecimalCard"
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

export default BCDToDecimalCard;
