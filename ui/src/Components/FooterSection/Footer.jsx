import { useState } from "react";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import iphone from "../../assets/icons/icn-app-store.png";
import play from "../../assets/icons/icn-play-store.png";
import group1 from "../../assets/icons/group1.png";
import group2 from "../../assets/icons/group2.png";
import group3 from "../../assets/icons/group3.png";
import group4 from "../../assets/icons/group4.png";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

// const socialIcons = () => {
//   return (
//     <div className="flex  space-x-1   ">
//       <FaFacebookF className="border border-black rounded-full" />
//       <IoLogoInstagram className="border border-black rounded-full" />
//       <FaXTwitter className="border border-black rounded-full" />
//       <FaLinkedin className="border border-black rounded-full" />
//       <FaGoogle className="border border-black rounded-full" />
//     </div>
//   );
// };

const Footerr = () => {
  // const [sections, setSections] = useState([
  //   {
  //     id: 0,
  //     title1: "Company",
  //     title2: "Support",
  //     title3: "Products",
  //     title4: "Legal",
  //     title5: "Resources",
  //     title6: "Community",
  //   },
  //   {
  //     id: 1,
  //     title1: "About Us",
  //     title2: "Support Center",
  //     title3: "Bill Payment",
  //     title4: "Privacy Policy",
  //     title5: "Resource Center",
  //     title6: "Learn how to save on your ",
  //   },
  //   {
  //     id: 2,
  //     title1: "Careers",
  //     title2: "Contact Us",
  //     title3: "Card",
  //     title4: "Terms",
  //     title5: "Blog ",
  //     title6: "Ways to improve your ",
  //   },
  //   {
  //     id: 3,
  //     title1: "Billers",
  //     title2: "How it Works",
  //     title3: "Build Credit",
  //     title4: "Sign In Verification",
  //     title5: "News Letter",
  //     title6: "Security FAQ",
  //   },
  //   {
  //     id: 4,
  //     title1: "Pricing",
  //     title2: "",
  //     title3: "Other",
  //     title4: "Bills Process",
  //     title5: "Site Map",
  //     title6: socialIcons(),
  //   },
  //   {
  //     id: 5,
  //     title1: "Press",
  //     title2: "",
  //     title3: "",
  //     title4: "Bill Cancelled",
  //     title5: "Dashboard",
  //     title6: "",
  //   },
  //   {
  //     id: 6,
  //     title1: "Press",
  //     title2: "",
  //     title3: "",
  //     title4: "Settings",
  //     title5: "Payment Schedule",
  //     title6: "",
  //   },
  // ]);

  return (
    <>
      {/* <main className="w-full ">
        <main className="container-wrap pt-10  ">
          <div className=" ">
            <div>
              {sections.map((item, index) => {
                let className = "font-bold text-lg    ";
                return (
                  <div key={index} className="lg:flex text-left py-2 grid grid-cols-2">
                    <div
                      className={
                        index === 0 ? `flex-1 ${className}` : "flex-1 text-left"
                      }
                    >
                      {item.title1}
                    </div>
                    <div
                      className={
                        index === 0 ? `flex-1 ${className}` : "flex-1 text-left"
                      }
                    >
                      {item.title2}
                    </div>
                    <div
                      className={
                        index === 0 ? `flex-1 ${className}` : "flex-1 text-left"
                      }
                    >
                      {item.title3}
                    </div>
                    <div
                      className={
                        index === 0 ? `flex-1 ${className}` : "flex-1 text-left"
                      }
                    >
                      {item.title4}
                    </div>
                    <div
                      className={
                        index === 0 ? `flex-1 ${className}` : "flex-1 text-left"
                      }
                    >
                      {item.title5}
                    </div>
                    <div
                      className={
                        index === 0 ? `flex-1 ${className}` : "flex-1 text-left"
                      }
                    >
                      {item.title6}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
 
          <div className="container-wrap flex  justify-between items-center pt-8 border-b border-solid border-black pb-12">
            <div className="flex gap-x-10 w-[100%]">
              <button className="text-white bg-blue-700 py-2 px-3 border border-black  rounded-md flex items-center gap-x-2">
                {" "}
                <img src={iphone} className="w-6 h-6 " /> App Store{" "}
              </button>

              <button className="text-white bg-blue-700 py-2 px-3 border border-black  rounded-md flex items-center gap-x-2">
                {" "}
                <img src={play} className="w-6 h-6 " /> App Store{" "}
              </button>
            </div>

            <div className="w-[100%] pb-2 ">
              {" "}
              <p className="text-blue-400 text-right ">
                {" "}
                made is Los Angeles with{" "}
              </p>
            </div>
            <hr />
          </div>
 
           <div className="flex gap-x-24 ">
            <p> Copyright © 2023 Pay Me Back Later.</p>

            <div className="flex ">
              <img src={group1} />
              <p className="ml-2 mr-2">
                {" "}
                PayMeBackLater USA <span className="ml-2">|</span>
              </p>
              {""}

              <img src={group1} />
              <p className="ml-2 mr-2">
                {" "}
                PayMeBackLater USA <span className="ml-2">|</span>
              </p>
              {""}

              <img src={group1} />
              <p className="ml-2 mr-2">
                {" "}
                PayMeBackLater USA <span className="ml-2">|</span>
              </p>
              {""}

              <img src={group1} />
              <p className="ml-2 mr-2"> PayMeBackLater USA</p>
              {""}
            </div>
          </div>

        </main>
      </main> */}

      <Footer bgDark>
        <div className="w-full container-wrap">
          <div className="grid w-full grid-cols-1 place-items-center  place-content-center gap-4 px-6 py-8 lg:grid-cols-6 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" className="text-lg text-black " />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className=" text-base font-medium text-[#8E9BA6]"
                >
                  About Us{" "}
                </Footer.Link>
                <Footer.Link href="#" className="py-1 font-sans">
                  Careers
                </Footer.Link>
                <Footer.Link href="#">Billers</Footer.Link>
                <Footer.Link href="#">pricing</Footer.Link>
                <Footer.Link href="#">press</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Support Center</Footer.Link>
                <Footer.Link href="#">Contact US</Footer.Link>
                <Footer.Link href="#">How it Works</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Products" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="">
                  Bill Payments
                </Footer.Link>
                <Footer.Link href="#" className="py-6">
                  Cards
                </Footer.Link>
                <Footer.Link href="#">Build Credit</Footer.Link>
                <Footer.Link href="#">Offer</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy policy</Footer.Link>
                <Footer.Link href="#">Terms</Footer.Link>
                <Footer.Link href="#">sign in Verification </Footer.Link>
                <Footer.Link href="#">Bill process</Footer.Link>
                <Footer.Link href="#">Bill Cancelled</Footer.Link>
                <Footer.Link href="#">Setting</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Resources" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Resources Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">News Letter</Footer.Link>
                <Footer.Link href="#">Site Map</Footer.Link>
                <Footer.Link href="#">Dashboard</Footer.Link>
                <Footer.Link href="#">Payments Scheduale</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Community " />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Learn how to save your on bills{" "}
                </Footer.Link>
                <Footer.Link href="#">
                  Ways to improve your credit stories
                </Footer.Link>
                <Footer.Link href="#">Security FAQ</Footer.Link>
                <Footer.Link href="#">khjjh</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          {/* <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div> */}
        </div>
      </Footer>
    </>
  );
};

export default Footerr;
