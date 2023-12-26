import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import iphone from "../../assets/icons/icn-app-store.png";
import play from "../../assets/icons/icn-play-store.png";
import avatar1 from '../..//assets/icons/avatar1.svg'
import avatar2 from '../..//assets/icons/avatar1.svg'
import Gstar from '../..//assets/icons/groupstar.svg'
import vector from '../..//assets/icons/vector.svg'

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      autoPlay: true,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      autoPlay: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      autoPlay: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      autoPlay: true,
    },
  };
  return (
    <section className="container-wrap">

             <div> 
             <div className="pb-6">  <p className="text-center text-3xl font-bold "> You're in great Hand! </p></div>
             <div className="pb-8"> <p className="text-center"> join a community of  satisfied users who have experienced the convenience and excellent 
                of our service ... <br/> you're in great hand! </p></div>

                <div className="flex space-x-4 justify-center ">
                    <section className="rounded-2xl bg-[#E9EAFF] py-1 px-2 lg:px-6 flex items-center space-x-4"> 
                    <div><img src={vector} /> </div>
                    <div> 4.9</div>
                    <div> On Facebook</div>
                    
                    </section>


                    <section className="rounded-2xl bg-[#E9EAFF] py-2 px-2 lg:px-6 flex items-center space-x-4"> 
                    <div><img src={vector} /> </div>
                    <div> 5.0 </div>
                    <div> On Google</div>
                    
                    </section>
                    

                    <section className="rounded-2xl bg-[#E9EAFF] py-2 px-2 lg:px-6  flex items-center space-x-4"> 
                    <div><img src={vector} /> </div>
                    <div> 4.9</div>
                    <div> On App Store</div>
                    
                    </section>
                </div>
             </div>

        <div className=" pb-16 pt-24
         ">  
      <Carousel responsive={responsive} swipeable showDots infinite>
        <div className="mb-24  max-w-[500px]  rounded-lg  custom-shadow space-x-1">
          <section className=" flex-col justify-center ">
          <div className=" flex justify-center pb-2"> <img src={avatar1} className="" /></div>
          <div className="text-center text-lg font-bold pb-2 "> James D</div>
          <div className=" text-center pb-5">
            {" "}
            "Absolutely fantastic! This service has made my bill <br/> payments a breeze. Highly recommended!"

          </div>
          <div className=" flex justify-center pb-8"> <img src={Gstar} className="" /></div>
          </section>
          
          
        </div>



        <div className="mb-24 max-w-[500px] space-x-1 ">
          <div className=" flex-col justify-center custom-shadow  space-x-5 ">
          <div className=" flex justify-center pb-2"> <img src={avatar1} className="" /></div>
          <div className="text-center text-lg font-bold pb-2 "> James D</div>
          <div className=" text-center pb-5">
            {" "}
            "Absolutely fantastic! This service has made my bill <br/> payments a breeze. Highly recommended!"

          </div>
          <div className=" flex justify-center pb-8"> <img src={Gstar} className="" /></div>
          </div>
          
          
        </div>


        <div className="mb-24  max-w-[500px] ">
          <div className=" flex-col justify-center  custom-shadow space-x-5">
          <div className=" flex justify-center pb-2"> <img src={avatar1} className="" /></div>
          <div className="text-center text-lg font-bold pb-2 "> James D</div>
          <div className=" text-center pb-5">
            {" "}
            "Absolutely fantastic! This service has made my bill <br/> payments a breeze. Highly recommended!"

          </div>
          <div className=" flex justify-center pb-8"> <img src={Gstar} className="" /></div>
          </div>
          
          
        </div>

        <div className="mb-24  max-w-[500px] ">
          <div className=" flex-col justify-center  custom-shadow space-x-5">
          <div className=" flex justify-center pb-2"> <img src={avatar1} className="" /></div>
          <div className="text-center text-lg font-bold pb-2 "> James D</div>
          <div className=" text-center pb-5">
            {" "}
            "Absolutely fantastic! This service has made my bill <br/> payments a breeze. Highly recommended!"

          </div>
          <div className=" flex justify-center pb-8"> <img src={Gstar} className="" /></div>
          </div>
          
          
        </div>
       
      </Carousel>
      </div>
    </section>
  );
};

export default Slider;
