"use client";
import Avatar from "@/components/Avatar/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

export default function App({}) {
  const [card, setCard] = useState("");
  const { push } = useRouter();

  const handleClick = () => {
    console.log(card);
    if (card == "mada") {
      // if we chhose mada card then we pass Mada entity id for genrate checkout id
      push(`/hyperPayConnection?${card}`);
    } else if (card == "VISA" || card == "MASTER_CARD") {
      // if we chhose mada card then we pass VISA entity id for genrate checkout id
      push(`/hyperPayConnection?card=${card}`);
    }
  };
  return (
    <div className="bg-white dark:bg-[#232323] px-5 py-5 mt-10 w-[90%] xl:w-[90%] lg:w-[90%] md:w-[100%] mobileView:w-[100%] rounded-2xl">
      <div className="mb-7">
        <div>
          <legend className="text-black dark:text-white font-['Poppins'] text-lg xs:text-lg xss:text-md">
            Add Card
          </legend>
        </div>
        <div className="text-black dark:text-white font-['Poppins'] inline-flex flex-wrap">
          <label
            htmlFor="mada"
            className="flex items-center cursor-pointer py-2 px-2"
          >
            <input
              type="radio"
              id="mada"
              value="mada"
              className="hidden peer"
              name="card"
              onChange={(e) => {
                setCard(e.target.id);
              }}
            />
            <Avatar
              path="/selectbtn.svg"
              className="w-7 hidden peer-checked:block"
            />
            <Avatar
              path="/unselect.svg"
              className="w-7 block peer-checked:hidden"
            />

            <span className="ml-3">Mada</span>
          </label>
          <label
            htmlFor="visa"
            className="flex items-center cursor-pointer py-2 px-2"
          >
            <input
              type="radio"
              id="visa"
              value="visa"
              className="hidden peer"
              name="card"
              onChange={(e) => {
                setCard(e.target.id);
              }}
            />
            <Avatar
              path="/selectbtn.svg"
              className="w-7 hidden peer-checked:block"
            />
            <Avatar
              path="/unselect.svg"
              className="w-7 block peer-checked:hidden"
            />

            <span className="ml-3">Visa</span>
          </label>
          <label
            htmlFor="master"
            className="flex items-center cursor-pointer py-2 px-2"
          >
            <input
              type="radio"
              id="master"
              value="master"
              className="hidden peer"
              name="card"
              onChange={(e) => {
                setCard(e.target.id);
              }}
            />
            <Avatar
              path="/selectbtn.svg"
              className="w-7 hidden peer-checked:block"
            />
            <Avatar
              path="/unselect.svg"
              className="w-7 block peer-checked:hidden"
            />

            <span className="ml-3">MASTER CARD</span>
          </label>
        </div>
        <div className="  dark:border-white pb-1 rounded-xl mt-3">
          <button
            className={
              "bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black font-['Poppins'] p-3 rounded-tl-[9px] rounded-tr-[9px] rounded-xl dark:m-[-1px]"
            }
            onClick={() => handleClick()}
          >
            Add Card{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
