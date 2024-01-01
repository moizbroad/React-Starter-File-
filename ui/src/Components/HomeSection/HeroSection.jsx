import React from "react";
import team from "..//..//assets/images/img-team-8.svg";
import team1 from "..//..//assets/images/Ellipse1.png";
import iphone from "../../assets/icons/icn-app-store.png";
import play from "../../assets/icons/icn-play-store.png";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#E9EAFF]">
        <div className="container-wrap ">
          <section className="  pt-8 md:pt-[107px] flex flex-col lg:flex-row pb-8  ">
            <div className="flex-col lg:w-[729px]  ">
              <div>
                {" "}
                <h5 className=" text-4xl HeroSection-text md:text-5xl font-bold text-center lg:text-start   ">
                  {" "}
                  Discover a smarter <br /> way to pay your bills{" "}
                </h5>{" "}
              </div>
              <div className="pt-6 text-center lg:text-start ">
                {" "}
                <p className="pb-6">
                  {" "}
                  Use our platform to easily upload bills for things like utilities, car payments, rent, insurance, <br/>
                  and more. Enjoy the convenience of quick bill payments, so you won't have to worry about  <br/>
                  due dates or late fees. It's a simple subscription, no fuss involved. 
                </p>
              </div>
              <div className="pb-[35px]  text-center lg:text-start ">
                {" "}
                <button className="bg-[#6161FF]  rounded-md text-white font-medium  py-2  px-2 lg:px-6 lg:py-4 ">
                  {" "}
                  Get started for free
                </button>{" "}
              </div>

              <div className="pb-6  text-center lg:text-start ">
                <p> Over 100,000 + Happy Customers! </p>
              </div>

              <div className="flex gap-x-6 w-[100%] pb-24  justify-center lg:justify-start  ">
                <button className="text-white bg-[#252849] font-semibold py-2 px-3 border border-[#252849]  rounded-md flex items-center gap-x-2">
                  {" "}
                  <img src={iphone} className="w-6 h-6 hover:rotate-180  " /> App Store{" "}
                </button>

                <button
                  className=" bg-white
           py-2 px-3 border border-black  rounded-md flex items-center gap-x-2  text-[#252849] font-semibold"
                >
                  {" "}
                  <img src={play} className="w-6 h-6 " /> App Store{" "}
                </button>
              </div>
            </div>

            <div className="  flex justify-center  lg:self-start lg:pl-[87px] pb-12 lg:pb-0 ">

              <img src={team1}  />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
