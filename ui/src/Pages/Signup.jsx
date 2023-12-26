import React, { useState } from "react";

const Signup = () => {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleDivClick = (index) => {
    setSelectedDiv(index);
  };

  return (
    <main className="wrap1">
      <section className="pt-48 flex space-x-10">
        <div
          className={`bg-${selectedDiv === 0 ? "blue-800" : "[#EAEAFF]"} h-3 w-[201px]  rounded-full`}
          onClick={() => handleDivClick(0)}
        ></div>

        <div
          className={`bg-${selectedDiv === 1 ? "blue-800" : "[#EAEAFF]"} h-3 w-[201px]  rounded-full`}
          onClick={() => handleDivClick(1)}
        ></div>

        <div
          className={`bg-${selectedDiv === 2 ? "blue-800" : "[#EAEAFF]"} h-3 w-[201px]  rounded-full`}
          onClick={() => handleDivClick(2)}
        ></div>
      </section>
    </main>
  );
};

export default Signup;
