import React, { useState} from "react";
// import { useSelector } from "react-redux";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";

export default function UnderWriterHistory(){
    const activities=[
        {
            task:"Status",
            done:"Opportunity > Merchant Reviewing Offer",
            time:"12:00 am"
        },
        {
            task:"Status",
            done:"Opportunity > Merchant Reviewing Offer",
            time:"12:00 am"
        },
        {
            task:"DOCS",
            done:"File Uploaded > Stipulations (2).pdf",
            time:"12:00 am"
        },
        {
            task:"Email",
            done:"Trigger Sent > Status Change",
            time:"12:00 am"
        },
        {
            task:"Review",
            done:"Opportunity > Merchant Reviewing Offer",
            time:"12:00 am"
        },
    ]
    const menuu = [
        {
            path:"/application/underwriter/overview",
            name:"Overview"
        },
        {
            path:"/application/underwriter/client-details",
            name:"Client Details"
        },
        {
            path:"/application/underwriter/documents",
            name:"Documents"
        },
        // {
        //     path:"/application/underwriter/decision-logic",
        //     name:"Decision Logic"
        // },
        {
            path:"/application/under-writer",
            name:"UnderWriter"
        },
        {
            path:"/application/underwriter/notes",
            name:"Notes"
        },
        {
            path:"/application/underwriter/history",
            name:"History"
        }
    ];


    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Applications" option="Infinity Contracting"/>
                <SecondHeader menuData={menuu}/>
                <div className="flex flex-col gap-6 w-[95%]">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center w-[100%]">
                            <div className="px-[1rem] py-[0.2rem] w-[250px] text-center text-[#353333] font-[600] border border-[#D2D2D2] rounded-lg text-[1rem]">Application Approved</div>
                            <div className="px-[1rem] py-[0.2rem] w-[250px] text-center text-[#353333] font-[600] border border-[#D2D2D2] rounded-lg text-[1rem]">Offer Accepted</div>
                            <div className="px-[1rem] py-[0.2rem] w-[250px] text-center text-[#353333] font-[600] border border-[#D2D2D2] rounded-lg text-[1rem]">Contract Signed</div>
                            <div className="px-[1rem] py-[0.2rem] w-[250px] text-center text-[#353333] font-[600] border border-[#D2D2D2] rounded-lg text-[1rem]">Funding</div>
                        </div>
                        <div className="flex justify-between w-[70%]">
                            <div className="flex flex-col pl-[2rem] items-center">
                                <div className="text-[#667085] text-[15px] font-[500]">Updated by abc</div>
                                <span className="text-[#667085] text-[14px] font-[400]">Jul 7, 2023</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-4">
                                    <input type="checkbox"/> <span className="text-[#98A2B3] font-[400]">Contracts sent</span>
                                </div>
                                <div className="flex gap-4">
                                    <input type="checkbox"/> <span className="text-[#98A2B3] font-[400]">Contracts received complete</span>
                                </div>
                                <div className="flex gap-4">
                                    <input type="checkbox"/> <span className="text-[#98A2B3] font-[400]">Final review</span>
                                </div>
                                <div className="flex gap-4">
                                    <input type="checkbox"/> <span className="text-[#98A2B3] font-[400]">Final underwriting</span>
                                </div>
                                <div className="flex gap-4">
                                    <input type="checkbox"/> <span className="text-[#98A2B3] font-[400]">Final underwriting approval</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center w-[1005]">
                            <h4 className="text-[#353333] text-[1.1rem] font-[600] leading-[28.5px]">
                                ACTIVITIES
                            </h4>
                            <span  className="text-[#667085] text-[15px] font-[600]">Today, 23 June 2023</span>
                        </div>
                        {
                            activities.map((activity, index)=>{
                                return(
                                    <div className="flex gap-4 items-center justify-between border-b border-[#EAE5E5] py-[0.5rem]">
                                        <div className="flex gap-4 items-center">
                                            <div
                                            className="rounded-lg px-[1rem] py-[0.2rem] text-[0.8rem] font-[500]"
                                            style={
                                                activity.task==="Status"? {color: "#0B3547", backgroundColor:"#D6CFEB91"}
                                                :activity.task==="DOCS"? {color: "#1F7BE4", backgroundColor:"#3B85F345"}
                                                :activity.task==="Email"? {color: "#DA7F51", backgroundColor:"#FBC1A45C"}
                                                :activity.task==="Review"? {color: "#DA5151", backgroundColor:"#EBCFCF85"}
                                                :{}
                                            }>
                                                {activity.task}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="text-[0.9rem]">{activity.done}</div>
                                                <div className="flex gap-4">
                                                    <span className="flex gap-2 items-center text-[0.8rem]">
                                                        <BiSolidTimeFive />
                                                        {activity.time}
                                                    </span>
                                                    <span className="flex gap-2 items-center text-[0.8rem]">
                                                        <BsFillPersonFill />
                                                        abc
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex text-[#C9AA34] text-[0.8rem] bg-[#FAF5D1] font-[500] px-[1rem] py-[0.2rem] rounded-xl">
                                            Today
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}