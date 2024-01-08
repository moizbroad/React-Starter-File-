import React from "react";
import { useState, useRef } from "react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import InputField from "../../CustomComponent/InputField";
import imagesign from "..//..//../assets/icons/img-sign-up-screen-4.svg";
import usalogo from "..//..//..//assets/icons/usalogo.png";
import openlock from "..//..//../assets/icons/openlock.png";
import axios from "axios";
// import baseUrl from '../../../../src/Environments/.env'

const Verification = (props) => {
  let { phoneNumber, firstName, lastName } = props;

  const [verifyotp, setVerifyOpt] = useState([]);

  let VerifyOtp = async () => {
    let data = {
      otp: String(verifyotp.otp),
      phoneNumber: phoneNumber,
    };

    try {
      ("");
      const res = await axios.post(
        "https://gn9y85je18.execute-api.us-west-1.amazonaws.com/dev/apiuser/register/otp/verify",
        data
      );

      if ((res.status = 200)) {
        console.log(Sucessful);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const inputRefs = useRef(Array(5).fill(null));

  const handleChange = (index, e) => {
    console.log(verifyotp.otp, "ppp")
    
    const value = e.target.value;
    verifyotp.push(value)
    setVerifyOpt((prevState) => ({
      ...prevState,
      otp: e.target.value[index]
    }))
    // setVerifyOpt(parseInt(e.key))

    if (/^\d$/.test(value)) {
      // Only allow one digit
      // Update the current input field value
      e.target.value = value;

      // Move focus to the next input field if available
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (e.key === "Backspace" && value === "") {
      // If backspace is pressed and the input is empty, move focus to the previous input field
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else {
      // Clear the input if it's not a digit
      e.target.value = "";
    }
  };
  console.log(verifyotp.otp, "otp")
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData
      .getData("text/plain")
      .replace(/[^\d]/g, "");

    // Iterate through the input fields and assign each digit
    for (
      let i = 0;
      i < Math.min(pastedText.length, inputRefs.current.length);
      i++
    ) {
      inputRefs.current[i].value = pastedText[i];
    }
  };
  return (
    <main className="wrap1">
      <section className="grid lg:grid-cols-2 gap-x-[260px]">
        {/*  */}
        <div>
          <div className="mt-10 flex  flex-col  ">
            <div className="flex  justify-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 110 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.0655 0.000244141C54.6469 0.000244141 55.2282 0.000244141 55.8096 0.000244141C57.5536 0.883533 59.007 1.76682 60.751 2.65011C76.1568 11.1886 91.5626 19.4326 106.968 27.9711C107.84 28.5599 108.712 29.1488 109.294 30.0321C110.456 32.0931 109.584 34.1541 107.259 35.6262C102.608 38.2761 97.9574 40.6315 93.5973 43.2814C93.3066 43.5758 93.016 43.5758 92.4346 43.8703C93.016 44.1647 93.3066 44.4591 93.5973 44.4591C98.2481 46.8146 102.608 49.4644 107.259 51.8199C107.84 52.1143 108.422 52.7032 109.003 52.9976C110.747 55.0586 110.166 57.7085 107.55 59.1806C102.899 61.8305 98.2481 64.1859 93.5973 66.8358C93.3066 67.1302 93.016 67.1302 92.4346 67.4246C93.016 67.7191 93.3066 68.0135 93.5973 68.0135C98.2481 70.3689 102.608 73.0188 107.259 75.3743C108.422 75.9631 109.294 76.552 109.584 78.0241C110.166 80.0851 109.294 81.8517 107.259 83.0294C90.6906 92.1567 74.4128 100.99 57.8443 110.117C55.8096 111.295 54.0655 111.295 52.3215 110.117C35.753 101.284 19.4752 92.4512 3.19742 83.6183C1.74405 82.735 0.58135 81.8517 0 80.3796C0 79.7907 0 79.2018 0 78.613C0.58135 77.1408 1.74405 75.9631 3.19742 75.3743C7.55755 73.0188 11.9177 70.6634 16.5685 68.0135C16.8591 67.7191 17.1498 67.7191 17.7312 67.4246C17.1498 67.1302 16.8591 66.8358 16.5685 66.8358C12.2083 64.4803 7.84822 62.1249 3.4881 59.7695C2.03472 58.8862 0.872025 58.0029 0.290675 56.5307C0.290675 55.9419 0.290675 55.353 0.290675 54.7642C0.872025 53.292 2.03472 52.1143 3.4881 51.5254C4.36012 51.231 5.23215 50.6422 6.10417 50.0533C9.88295 47.9923 13.9524 45.9313 18.0218 43.5758C17.7312 43.2814 17.1498 42.987 16.8591 42.987C12.499 40.6315 7.84822 37.9817 3.4881 35.6262C2.03472 34.7429 0.872025 33.8597 0.58135 32.3875C0.58135 31.7987 0.58135 31.2098 0.58135 30.6209C1.1627 29.4432 1.74405 28.5599 3.19742 27.6766C19.7659 18.5493 36.9157 9.422 54.0655 0.000244141ZM97.6668 31.7987C97.3761 31.5042 97.0854 31.5042 96.7947 31.2098C83.133 23.849 69.4713 16.4883 56.1003 8.83314C55.5189 8.53871 54.9376 8.53871 54.3562 8.83314C40.6945 16.1939 27.0328 23.849 13.371 31.2098C13.0804 31.2098 12.7897 31.5042 12.499 31.7987C12.7897 31.7987 12.7897 32.0931 13.0804 32.0931C26.7421 39.7483 40.6945 47.109 54.3562 54.7642C54.9376 55.0586 55.5189 55.0586 56.1003 54.7642C68.8899 47.6979 81.6796 40.926 94.1787 33.8597C95.3414 33.2708 96.2134 32.3875 97.6668 31.7987ZM12.2083 55.6475C12.499 55.9419 12.7897 55.9419 12.7897 56.2363C26.4514 63.5971 40.4038 71.2522 54.0655 78.613C54.6469 78.9074 54.9376 78.9074 55.5189 78.613C69.1806 71.2522 82.8423 63.5971 96.5041 56.2363C96.7947 56.2363 97.0854 55.9419 97.3761 55.6475C93.016 53.292 88.9465 50.9366 84.8771 48.8756C84.2957 48.5811 83.7144 48.5811 83.133 48.8756C74.7034 53.5865 66.2739 58.0029 57.5536 62.7138C55.5189 63.8915 54.0655 63.8915 52.0308 62.7138C43.6012 58.0029 34.881 53.292 26.4514 48.8756C26.1607 48.2867 25.5794 48.2867 24.998 48.5811C21.2193 50.6422 17.1498 52.9976 13.0804 55.0586C13.0804 55.353 12.7897 55.353 12.2083 55.6475ZM12.2083 79.4963C12.499 79.7907 12.7897 79.7907 12.7897 79.7907C26.4514 87.4459 40.4038 94.8066 54.0655 102.462C54.6469 102.756 55.2282 102.756 55.5189 102.462C69.1806 95.1011 82.8423 87.7403 96.2134 80.0851C96.5041 79.7907 96.7947 79.7907 97.0854 79.4963C92.7253 77.1408 88.6558 74.7854 84.2957 72.43C83.7144 72.1355 83.133 72.1355 82.5517 72.43C74.1221 77.1408 65.6925 81.5573 56.9723 86.2681C54.9376 87.4459 53.1935 87.4459 51.4495 86.2681C43.0199 81.5573 34.5903 76.8464 25.8701 72.43C25.5794 72.1355 24.998 72.1355 24.4167 72.1355C20.9286 74.7854 16.5685 77.1408 12.2083 79.4963Z"
                  fill="#2D3353"
                />
              </svg>
            </div>

            <div className=" text-center mt-5">
              <h1 className="font-bold text-3xl pb-1"> Let's gets Started </h1>
              <p className="mt-3 ">
                {" "}
                Please enter the verification code we <br />
                just sent to {phoneNumber}{" "}
              </p>
            </div>
          </div>

          <div className="flex space-x-4 justify-center mt-6">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="">
                  <label htmlFor={`myInput${index + 1}`}></label>
                  <input
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    className="border border-blue-600 py-2 px-4 rounded-lg w-11 bg-[#EAEAFF]"
                    type="text"
                    id={`myInput${index + 1}`}
                    maxLength="1" // Set maximum length to 1
                    onChange={(e) => handleChange(index, e)}
                    onPaste={handlePaste}
                    value={verifyotp.otp}

                    placeholder=" "
                  />
                </div>
              ))}
          </div>

          <div className="flex  justify-center mt-4 ">
            <p className="text-blue-500 "> Didn’t get a code? </p>
            <span className="text-blue-500 "> Resend</span>
          </div>
          <div className="flex  space-x-1 mt-5 px-4 lg:px-0">
            {" "}
            <button
              onClick={VerifyOtp}
              className=" w-[100%] justify-center py-2 flex items-center rounded-lg bg-blue-600  gap-x-2 text-white"
            >
              {" "}
              <img src={openlock} className="w-5 h-4" /> Continue{" "}
            </button>
          </div>
        </div>

        <div className="flex justify-center align-top mt-10 lg:mt-0">
          {" "}
          <img src={imagesign} />{" "}
        </div>
      </section>
    </main>
  );
};

export default Verification;
