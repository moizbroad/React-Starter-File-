import { useState } from "react";
import React from "react";

const Footer = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      parent: "Company",
      title1: "ali",
      title2: "moiz",
      title3: "waqs",
      title4: "why not",
    },
    {
      id: 2,
      parent: "Company2",
      title1: "usman",
      title2: "kashid",
      title3: "jiya",
      title4: "banana",
    },
    {
      id: 3,
      parent: "Company3",
      title1: "wahaid",
      title2: "raqab",
      title3: "graapes",
      title4: "orane",
    },

    // Add more sections as needed
  ]);
  const headers = sections.filter((item) => item.parent);
  const uniqueParents = [...new Set(sections.map((item) => item.parent))];
  console.log(uniqueParents, "unique");

  //   console.log( headers , "header")

  return (
    <>
      <table>
        <thead>
          <tr>
            {uniqueParents.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {sections.map((item) => (
            <tr key={item.id}>
              {uniqueParents.map((header) => {
                console.log(item[header], "header", item, header);

                return <td key={header}>{item[header]}</td>;
              })}
            </tr>
          ))} */}
          {
            sections.map((item) => {
                if(!item.parent){
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title1}</td>
                    </tr>
                  )
                }
              })
          }
        </tbody>
      </table>
    </>
  );
};

export default Footer;
