import React from "react";
import pay1 from "..//..//assets/icons/pay1.png";
import pay2 from "..//..//assets/icons/pay2.png";
import pay3 from "..//..//assets/icons/pay3.png";

const BillPaySetups = () => {
  return (
    <section className="w-[100%] bg-[#E9EAFF] ">
      <section className="container-wrap pt-12 pb-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 px-6 ">
          <section className="">
            <div className="flex justify-center pb-4">
              {" "}
              <img src={pay1} />
            </div>
            <div className="font-bold text-lg flex justify-center text-center  ">
              The quickest and most effortless  <br/> {"   "}method to pay any bill{" "}
            </div>
            <div className="pt-4 flex justify-center text-center">
             Simply take a photo of your bill and we take<br/> care of the rest 
            </div>
          </section>


          <section>
            <div className="flex justify-center pb-4 pt-6 lg:pt-0">
              {" "}
              <img src={pay2} />
            </div>
            <div className="font-bold text-lg flex justify-center text-center ">
              Enhance and build your credit <br/>history {" "}
            </div>
            <div className="pt-4 flex justify-center text-center"> 
             watch your credit history flourish as<br/> PayMeBackLater reports each paytments to<br/> credits burease
            </div>
          </section>


          <section>
            <div className="flex justify-center pb-4 pt-6 lg:pt-0">
              {" "}
              <img src={pay3} />
            </div>
            <div className="font-bold text-lg  flex justify-center  text-center">
              No More due datses or late fees,<br/> and financial pressure  {" "}
            </div>
            <div className="pt-4 flex justify-center text-center">
             take amount to upload bills now and <br/>enjoy the iunparallel flexibility of paying<br/> later in just few easy  installments 
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default BillPaySetups;
