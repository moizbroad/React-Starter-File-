import React, { useState } from "react";
import Header from "../Components/HeaderSection/Header";
// import LetGetStarted from '../Components/Auth/Signup/LetGetStarted'
import LetGetStarted from "../Components/Auth/Signup/LetGetStarted";
import Verification from "../Components/Auth/Signup/Verification";
import CreateUserAccount from "../Components/Auth/Signup/CreateUserAccount";

const Signup = () => {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleDivClick = (index) => {
    setSelectedDiv(index);
  };

  return (
    <main className="wrap1">
      {/* <div> <Header/> </div> */}
      <section className="pt-20 flex space-x-4 justify-center lg:justify-start ">
        <div
          className={`${
            selectedDiv === 0 ? "bg-[#6161FF]" : "bg-gray-200"
          }   h-2.5 w-[150px]  rounded-full`}
          onClick={() => handleDivClick(0)}
        ></div>

        <div
          className={`${
            selectedDiv === 1 ? "bg-[#6161FF]" : "bg-gray-200"
          } h-2.5 w-[150px]  rounded-full`}
          onClick={() => handleDivClick(1)}
        ></div>

        <div
          className={`${
            selectedDiv === 2 ? "bg-[#6161FF]" : "bg-gray-200"
          } h-2.5 w-[150px]  rounded-full`}
          onClick={() => handleDivClick(2)}
        ></div>
      </section>

      {selectedDiv === 0 && <LetGetStarted />}
      {selectedDiv === 1 && <Verification />}
      {selectedDiv === 2 && <CreateUserAccount />}
    </main>
  );
};

export default Signup;
