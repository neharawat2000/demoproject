import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Slidebar from "../Slidebar/Slidebar";
import Header from "../Header/Header";
import SecondHeader from "../Header/SecondHeader";
import { useSelector } from "react-redux";

export default function DecisionLogic(){
    const menuu = [
        {
            path:"/application/overview",
            name:"Overview"
        },
        {
            path:"/application/client-details",
            name:"Client Details"
        },
        {
            path:"/application/documents",
            name:"Documents"
        },
        // {
        //     path:"/application/decision-logic",
        //     name:"Decision Logic"
        // },
        {
            path:"/application/notes",
            name:"Notes"
        },
        {
            path:"/application/history",
            name:"History"
        }
    ];
    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Applications" option="Infinity Contracting"/>
                <SecondHeader menuData={menuu}/>
                <div className="flex flex-col w-[95%]">
                    <div className="flex justify-between mb-[3rem]">
                        <h3
                        className="text-[#353333] text-[1.2rem] font-[500]">
                            DECISION LOGIC
                        </h3>
                        <button
                        className="flex items-center gap-2 text-white bg-[#7DD8FE] px-[1rem] py-[0.5rem] rounded">
                            Initiate decision logic 
                            <FaArrowRight />
                        </button>
                    </div>
                    <div className="flex justify-between items-center px-[1rem] py-[0.5rem] w-[300px] border border-[#D0CACA] rounded-3xl text-[#595555]">
                        James Vincent - Pending
                        <MdOutlineKeyboardArrowDown 
                        className="text-[#ABA6A6] text-[1.5rem]"/>
                    </div>
                </div>
            </div>
        </>
    );
}