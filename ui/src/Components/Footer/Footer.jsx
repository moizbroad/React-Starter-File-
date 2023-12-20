import { useState } from "react";
import React from "react";

const Footer = () => {
  const [headers, setHeaders] = useState([
    "Company",
    "Support",
    "Products",
    "Legal",
    "Resources",
    "Community",
  ]);
  const [sections, setSections] = useState([
    {
      id: 1,
      title1: "About Us",
      title2: "Support Center",
      title3: "Bill Payment",
      title4: "Privacy Policy",
      title5: "Resource Center",
      title6: "Learn how to save on your bills",
    },
    {
      id: 2,
      title1: "Careers",
      title2: "Contact Us",
      title3: "Card",
      title4: "Terms",
      title5: "Blog ",
      title6: "Ways to improve your credit",
    },
    {
      id: 3,
      title1: "Billers",
      title2: "How it Works",
      title3: "Build Credit",
      title4: "Sign In Verification",
      title5: "News Letter",
      title6: "Security FAQ",
    },
    {
      id: 4,
      title1: "Pricing",
      title2: "",
      title3: "Other",
      title4: "Bills Process",
      title5: "Site Map",
      title6: "",
    },
    {
      id: 5,
      title1: "Press",
      title2: "",
      title3: "",
      title4: "Bill Cancelled",
      title5: "Dashboard",
      title6: "",
    },
    {
      id: 6,
      title1: "Press",
      title2: "",
      title3: "",
      title4: "Settings",
      title5: "Payment Schedule",
      title6: "",
    },
  ]);

  return (
    <div className="">
      <table className="w-full border-collapse ">
        <thead>
          <tr>
            {headers.map((item) => {
              return <th className="  pt-2 text-left  text-lg   font-bold w-[16px]  ">{item}</th>;
            })}
          </tr>
        </thead>
        <tbody >
          {sections.map((item) => {
            return (
              <tr className="">
                <td className=" pt-2  font-normal whitespace-no-wrap">{item.title1}</td>
                <td className=" pt-2 font-normal  whitespace-no-wrap">{item.title2}</td>
                <td className=" pt-2  font-normal whitespace-no-wrap">{item.title3}</td>
                <td className=" pt-2  font-normal whitespace-no-wrap">{item.title4}</td>
                <td className=" pt-2  font-normal whitespace-no-wrap">{item.title5}</td>
                <td className=" pt-2  font-normal whitespace-no-wrap">{item.title6}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> 
  );
};

export default Footer;
