import React from "react";
import { useState } from "react";
import InputField from "../../CustomComponent/InputField";
import imagesign from "..//..//../assets/icons/img-sign-up-screen-4.svg";
import usalogo from "..//..//..//assets/icons/usalogo.png";
import openlock from "..//..//../assets/icons/openlock.png";
const CreateUserAccount = () => {
  return (
    <main className="wrap1">
      <section className="grid lg:grid-cols-2 gap-x-[260px] px-4 lg:px-0">
        <div>
          <div className="mt-6 flex  flex-col  ">
            <div className=" text-center ">
              <h1 className="font-bold  font-nunito text-3xl pb-1 mt-1">
                {" "}
                Create Your Account{" "}
              </h1>
            </div>
          </div>

          <div className="flex  flex-col gap-y-2 relative mt-2 ">
            <InputField
              type="text"
              id="First Name"
              placeholder="Email Address "
            />

            <InputField
              type="text"
              id="First Name"
              placeholder="Date of Birth "
            />

            <InputField
              type="text"
              id="First Name"
              placeholder="Home Address "
            />

            <InputField
              type="text"
              id="First Name"
              placeholder="Social Security "
            />
          </div>

          <div className="flex  space-x-1">
            {" "}
            <button className="w-[100%] justify-center py-2 flex items-center rounded-lg bg-blue-600  gap-x-2 text-white mt-10">
              {" "}
              Submit{" "}
            </button>
          </div>

          <p className="text-center text-xs mt-4">
            {" "}
            We’ll send you a verification code via SMS. By continuing, I agree
            to <br />
            PayMeBackLater
          </p>

          <p className="text-center text-xs">
            <span className="text-blue-600"> Terms of Service </span>and{" "}
            <span className="text-blue-600"> Privacy Policy</span>{" "}
          </p>
        </div>

        <div className="flex justify-center align-top">
          {" "}
          <img src={imagesign} />{" "}
        </div>
      </section>
    </main>
  );
};

export default CreateUserAccount;
