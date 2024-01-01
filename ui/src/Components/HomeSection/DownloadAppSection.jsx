import React from "react";
import iphone from "../../assets/icons/icn-app-store.png";
import play from "../../assets/icons/icn-play-store.png";

const GetStartedFree = () => {
  return (
    <main className="container-wrap px-6 lg:px-0">
      <section className="flex-cols pb-14 ">
        <div>
          {" "}
          <h1 className="text-center text-3xl font-bold font-nunito  ">
            {" "}
            Get the free app <br /> on your phone{" "}
          </h1>{" "}
        </div>

        <div>
          {" "}
          <p className="text-center pt-4  ">
            {" "}
            join over <span className="text-blue-500">100,000</span> happy
            customers!
          </p>{" "}
        </div>
        <div className="flex     pt-4  flex-wrap items-center justify-center sm:space-x-8 ">
          <button className="text-white bg-[#252849] font-semibold py-2 px-3 border border-black  rounded-md flex items-center gap-x-2  ">
            {" "}
            <img src={iphone} className="w-6 h-6 " /> App Store{" "}
          </button>

          <button
            className=" bg-white
           py-2 px-3 border border-black  rounded-md flex items-center gap-x-2   text-[#252849] font-semibold "
          >
            {" "}
            <img src={play} className="w-6 h-6 " /> App Store{" "}
          </button>
        </div>
      </section>

      <section className="bg-[#E9EAFF]  text-start lg:text-center rounded-xl pb-12   ">
        <p className="text-3xl font-bold pb-4 pt-6 text-center"> Ready to get Started ? </p>
        <p className="pb-8 text-center">
          Life is full of surprises amet, consectetur adipisicing elit. Animi,
          earum. Nulla, quibusdam quo harum sapiente cupiditate quisquam,
          consectetur distinctio veniam dolor quos corporis aut quasi neque,
          we've got you covered{" "}
        </p>

       <div className="flex justify-center">  <button className="bg-white text-black py-3 px-3  rounded-md  "> Get Started for free  </button></div>
      </section>
    </main>
  );
};

export default GetStartedFree;
