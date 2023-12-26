import React, { useState } from "react";

const Signup = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivClick = (index) => {
    setSelectedDiv(index);
  };

  return (
    <main className="wrap1">
      <section className="pt-48 flex space-x-10">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`bg-${selectedDiv === index ? "blue-800" : "[#EAEAFF]"} h-3 w-[201px]  rounded-full`}
            onClick={() => handleDivClick(index)}
          ></div>
        ))}
      </section>
    </main>
  );
};

export default Signup;
