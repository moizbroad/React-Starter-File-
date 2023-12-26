import React from "react";
import { useState } from "react";

import rent from '..//..//assets/cards/rent.svg';
import carpaymnets from '..//..//assets/cards/carpayment.svg';
import mortage from '..//..//assets/cards/mortgage.svg';
import gas from '..//..//assets/cards/gas&Electric.svg';
import hospital from '..//..//assets/cards/Hospital.svg';
import car from '..//..//assets/cards/Car-repair.svg';
import daycare from '..//..//assets/cards/daycare.svg';
import insurance from '..//..//assets/cards/insurance.svg';
import water from '..//..//assets/cards/Water-bills.svg';
import dental from '..//..//assets/cards/dentals.svg';
import phone  from '..//..//assets/cards/phone-bills.svg';
import cabel from '..//..//assets/cards/cables.svg';
import pet from '..//..//assets/cards/pet.svg';
import eduaction from '..//..//assets/cards/Eduaction.svg';



const Cards = () => {
  const [cards, setCards] = useState([
    {
      image: rent,
      title: "Rent",
      detail: "Stay in your comfort zone without worry our rent bill solutions, provide a reliable path to keeping a roof over your head" ,
    },
    {
      image: carpaymnets,
      title: "Rent",
      detail: "Keep your wheels in motion – our car note bill assistance, offers a dependable solution when finances are tight",
    },
    {
      image: mortage,
      title: "Rent",
      detail: "Protect your home and ease financial strain – our mortgage bill support, offers stability during challenging times",
    },
    {
      image: gas,
      title: "Rent",
      detail: "fEase your financial burden and keep the lights on with our supportive gas and electric services with flexible bill payment solutions.",
    },
    {
      image: hospital,
      title: "Rent",
      detail: "Your health is a priority, and so is your financial well-being – our hospital bill solutions, provide a lifeline to manage medical expenses",
    },
    {
      image: car,
      title: "Rent",
      detail: "Get your car back on the road without straining your wallet – PayMeBackLater offers affordable car repair options.",
    },
    {
      image: daycare,
      title: "Rent",
      detail: "Ensure your child's care and well-being – our day care bill assistance, offers a helping hand during financial constraints",
    },
    {
      image: insurance,
      title: "Rent",
      detail: "Secure your peace of mind even when funds are limited – our insurance bill support offers a safety net to keep your coverage intact.",
    },
    {
      image: water,
      title: "Rent",
      detail: "Keep your taps flowing and your budget in check – our water bill assistance, ensures you never compromise on this vital resource.",
    },
    {
      image: dental,
      title: "Rent",
      detail: "Maintain your oral health without compromise – our dental bill assistance, ensures you can smile confidently",
    },
    {
      image: phone,
      title: "Rent",
      detail: "Keep your lines open and worry-free – our phone bill solutions, offer a reliable way to stay connected without straining your budget.",
    },
    {
      image: cabel,
      title: "Rent",
      detail: "Don't miss out on your favorite shows – our cable bill solutions, ensure you can relax and enjoy without the worry of late payments.",
    },
    {
      image: pet,
      title: "Rent",
      detail: "Upload your pet-related bills and split payments into convenient installments. You can ensure the best care.",
    },
    {
      image: eduaction,
      title: "Rent",
      detail: "Upload tuition bills and educational expenses, dividing the cost into affordable installments, so you can focus on learning",
    },
    {
        image: eduaction,
        title: "Rent",
        detail: "Upload tuition bills and educational expenses, dividing the cost into affordable installments, so you can focus on learning",
      },
  ]);

  return (
    <section className="container-wrap pt-6 pb-10 px-6 lg:px-0">

<h1 className="text-center font-bold text-xl" > pay and ant types of bill with<br/> PayMEBackLater</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 pt-12">

       
        {cards.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded  shadow-xl shadow-gray custom-shadow">
            <div className="flex justify-center">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="text-center mt-2 ">{item.title}</div>
            <div className="mt-2 text-center">{item.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
