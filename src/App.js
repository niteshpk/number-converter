import React from "react";
import BinaryToDecimalCard from "./components/BinaryToDecimalCard";
import DecimalToBinaryCard from "./components/DecimalToBinaryCard";
import OctalToBinaryCard from "./components/OctalToBinaryCard";
import BinaryToOctalCard from "./components/BinaryToOctalCard";
import BinaryToHexadecimalCard from "./components/BinaryToHexadecimalCard";
import HexadecimalToBinaryCard from "./components/HexadecimalToBinaryCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DecimalToOctalCard from "./components/DecimalToOctalCard";
import OctalToDecimalCard from "./components/OctalToDecimalCard";
import DecimalToHexadecimalCard from "./components/DecimalToHexadecimalCard";
import HexadecimalToDecimalCard from "./components/HexadecimalToDecimalCard";
import HexadecimalToOctalCard from "./components/HexadecimalToOctalCard";
import OctalToHexadecimalCard from "./components/OctalToHexadecimalCard";
import BCDToDecimalCard from "./components/BCDToDecimalCard";
import DecimalToBCDCard from "./components/DecimalToBCDCard";
import BinaryToASCIICard from "./components/BinaryToASCIICard";
import ASCIIToBinaryCard from "./components/ASCIIToBinaryCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-2 col-md-1"></div>
            <div className="col-sm-4 col-md-5">
              <BinaryToDecimalCard />
              <OctalToBinaryCard />
              <BinaryToHexadecimalCard />
              <DecimalToOctalCard />
              <DecimalToHexadecimalCard />
              <HexadecimalToOctalCard />
              <BCDToDecimalCard />
              <ASCIIToBinaryCard />
            </div>
            <div className="col-sm-4 col-md-5">
              <DecimalToBinaryCard />
              <BinaryToOctalCard />
              <HexadecimalToBinaryCard />
              <OctalToDecimalCard />
              <HexadecimalToDecimalCard />
              <OctalToHexadecimalCard />
              <DecimalToBCDCard />
              <BinaryToASCIICard />
            </div>
            <div className="col-sm-2 col-md-1"></div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
