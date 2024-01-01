import React from "react";
import { useState } from "react";
import Header from "../../HeaderSection/Header";
import imagesign from "..//..//../assets/icons/img-sign-up-screen-4.svg";
import usalogo from "..//..//..//assets/icons/usalogo.png";
import InputField from "../../CustomComponent/InputField";
import Button from '../../CustomComponent/Button';

const login = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  // const [isActive, setIsActive] = useState(false); // checkbox

  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input matches the USA phone number format
    const isValidInput = /^\d{0,10}$/.test(inputValue);

    // Update the valid status
    setIsValid(isValidInput);

    // If the input is valid, update the state
    if (isValidInput) {
      setValue(inputValue);
    }
  };
  return (
    <main className="wrap1">
      <div  className="login-screen"> <Header className="login-screen" /></div>

      <section className="grid grid-cols-2 gap-x-[260px] mt-16">
        <div>
          <div className="mt-8 flex  flex-col  justify-center ">
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

            <div className=" text-center mt-2  ">
              <h1 className="font-bold text-3xl pb-1 "> Login </h1>
              <p> Tell us a bit about yourself. We just need the basics</p>
            </div>
          </div>

          <div className="flex  flex-col gap-y-2 relative mt-4  ">
          <img src={usalogo} className="w-5 h-5 absolute top-3 left-1" />
            <input
              className="border border-blue-600 py-2 px-9 rounded-lg "
              type=""
              id="number"
              value={value}
              onChange={handleChange}
              // onChange={handleChange}
              placeholder="Usa number"
            />

            <div className="flex  space-x-1 mt-5 text-center  ">
              {" "}
             
              <div className="flex  space-x-1 mt-2"> <button className="px-[170px] py-2 flex items-center rounded-lg bg-blue-600  gap-x-2 text-white">  Continue </button></div>




            </div>
          </div>

          <p className="text-center text-blue-600 text-sm mt-5 border border-blue-600 py-2 rounded-lg hover">
            {" "}
            I don’t have an account{" "}
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

export default login;
