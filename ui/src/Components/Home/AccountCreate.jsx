import React from "react";
import mobile from "..//..//assets/images/mobile.png";
import account from '..//..//assets/icons/account1.png'
import account3 from '..//..//assets/icons/account3.png'
import account4 from '..//..//assets/icons/account4.png'
import account5 from '..//..//assets/icons/account5.png'
import account6 from '..//..//assets/icons/account6.png'
const AccountCreate = () => {
  return (
    <main className="container-wrap  pb-11">
      <section className="grid grid-cols-3 space-x-6 pt-10  ">
        <div className="bg-red  pt-40  text-5xl font-bold leading-tight	 ">
          {" "}
          <p className=" "> Pay Your Bills <br/> On Time with PayMeBackLater</p>
        </div>


        <div> <img src={mobile}/> </div>


        <div className=" pt-12 "> 
        <div className="flex items-start"> 
             <div className=""> <img src={account4} className=" pr-2"/></div>
            <div>
            <p className="font-bold text-lg pb-3 "> Create account and upload your bills </p>
            <p className=""> Create account to start managing your bills effortlessly.</p>
            </div>
        </div>


    


        <div className="flex items-start pt-4"> 
             <div className=""> <img src={account3} className=" pr-2"/></div>
            <div>
            <p className="font-bold text-lg pb-3 "> Verify Yours Identity </p>
            <p className=""> Verify Yours Identity easily. it's asimple process</p>
            </div>
        </div>

        <div className="flex items-start pt-4"> 
             <div className=""> <img src={account6} className=" pr-2"/></div>
            <div>
            <p className="font-bold text-lg pb-3 "> Connect your Bank Account </p>
            <p className="">  Connect your Bank Account with our secure partner,paid</p>
            </div>
        </div>

        <div className="flex items-start pt-4"> 
             <div className=""> <img src={account5} className=" pr-2"/></div>
            <div>
            <p className="font-bold text-lg pb-3 ">Your Bills Get Paid </p>
            <p className=""> Let us handle the heavy lifting.see your bills smoothly get paid   </p>
            </div>
        </div>

        <div className="flex  justify-center pt-4"> <button class="bg-blue-600 border  rounded-md  font-medium  py-4  lg:px-6 lg:py-3"> Get Started</button></div>

        </div>


      </section>
    </main>
  );
};

export default AccountDetails;
