import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import { FaCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
// example table just for design
import ListingPageTable from "../../Component/Table/ListingPageTable";
import AdvanceSyndicatorTable from "../../Component/Table/AdvanceSyndicatorTable";
import ExampleTable from "../../Component/Table/ExampleTable";

export default function Syndicators(){
    const overviewMenu=[
        {
            path:"/syndicators/overview",
            name:"Overview"
        },
        {
            path:"/syndicators/offers",
            name:"Offers"
        },
        {
            path:"/syndicators/billing",
            name:"Billing"
        }
    ];
    const results=[
        {
            title:"Total Advances",
            total:"12"
        },
        {
            title:"Advance Total",
            total:"$180,900"
        },
        {
            title:" Declined Advance Total",
            total:"$180,900"
        },
        {
            title:"Payback Total",
            total:"$34,000"
        },
        {
            title:"Avg Advance Size",
            total:"$34,000"
        }
    ];

    return(
        <>
        <Slidebar/>
        <div className='mainContainer'>
            <Header title="Syndicators" option="Advances"/>
            <SecondHeader menuData={overviewMenu}/>
            <div className="flex flex-col gap-6 w-[95%]">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between w-[100%]">
                        <div className="flex items-center gap-4">
                                <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">iKhan Capital</h4>
                                <span className="flex items-center gap-2 text-[0.8rem] border border-[#D0D5DD] px-[0.5rem] py-[2px] rounded-lg shadow">
                                    <FaCircle className="text-[0.4rem] text-[#58B08F]"/> Active
                                </span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Link to="/syndicators/add-syndicator">
                                <button 
                                className="bg-[#4AACD5] text-[0.9rem] text-white rounded-2xl px-[1rem] py-[0.2rem]"
                                >Add Syndicator</button>
                            </Link>
                            <Link to="/syndicators/edit-syndicator">
                                <button 
                                className="bg-[#4AACD5] text-[0.9rem] text-white rounded-2xl px-[1rem] py-[0.2rem]"
                                >Edit Syndicator</button>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-8">
                        {
                            results.map((result, index)=>{
                                return(
                                    <>
                                        <div key={index}
                                        className="bg-[#FAFAFA] border border-[#ECECEC] flex flex-col px-[1rem] py-[0.5rem] rounded-xl">
                                            <div className="text-[#475467] text-[14px] font-[400]">
                                                {result.title}
                                            </div>
                                            <span className="text-[#1E8EBE] text-[1.3rem] font-[700]">
                                                {result.total}
                                            </span>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">Contacts</h4>
                    </div>
                    <div className="flex flex-col gap-6 w-[50%]">
                        <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">Notes</h4>
                        <textarea name="" rows="3" className="border border-[#DEDEDE] rounded-lg bg-[#FEFEFE] outline-none px-[1rem] py-[0.5rem]"></textarea>
                    </div>
                </div>
                <div className="flex justify-between w-[100%] items-center">
                    <div className="flex gap-2 items-center">
                        <NavLink  to="/syndicators/overview" style={({isActive})=>({
                            color : isActive ? "white" : "#256884",
                            backgroundColor: isActive ? "#4AACD5" : "#FDFDFD",
                            border : isActive ? "0px" : "1px solid #E8E8E8"
                        })} className="text-[1rem] rounded-2xl px-[1rem] py-[0.2rem]">
                            Advances
                        </NavLink>
                        <NavLink  to="/" style={({isActive})=>({
                            color : isActive ? "white" : "#256884",
                            backgroundColor: isActive ? "#4AACD5" : "#FDFDFD",
                            border : isActive ? "0px" : "1px solid #E8E8E8"
                        })} className="text-[1rem] rounded-2xl px-[1rem] py-[0.2rem]">
                            Submissions
                        </NavLink>
                    </div>
                    <div 
                    className="refresh-btn flex gap-1 text-[14px] items-center border px-[0.5rem] py-[0.3rem] border-[#ECECEC] font-[400] rounded-xl borderRadius">
                        <CiCalendar className="font-[500]"/> Export Current View
                    </div>
                </div>
                <ExampleTable/>
            </div>
        </div>
        </>
    );
}