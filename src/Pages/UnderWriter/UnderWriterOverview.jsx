import React, { useState} from "react";
import { FiEdit2 } from "react-icons/fi";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
import LabelSelectInput from "../../Component/LabelSelectInput/LabelSelectInput";

export default function UnderWriterOverview(){
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
                <div className="flex flex-col gap-10 w-[95%]">
                        {/* Business */}
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    BUSINESS INFORMATION
                                </h3>
                                <FiEdit2 />
                            </div>
                            <div className="flex flex-col gap-6 justify-between">
                                <div className="w-[48.5%]">
                                    <LabelInputText type="text" label="Business Name" input=""/>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Client First name" input=""/>
                                    <LabelInputText type="text" label="Client Last name" input=""/>
                                </div>
                                <div className="w-[48.5%]">
                                    <LabelInputText type="email" label="Email Address" input=""/>
                                </div>
                            </div>
                        </div>

                        {/* funding */}
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    FUNDING DETAILS
                                </h3>
                                <FiEdit2 />
                            </div>
                            <div className="flex flex-col gap-6 justify-between">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="White Label" input="abc"/>
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <div className="w-[70%]">
                                            <LabelInputText type="text" label="Installment" input="1"/>
                                        </div>
                                        <LabelSelectInput label="Installment" option="1"/>
                                    </div>
                                </div>
                                <div className="w-[30%]">
                                    <LabelSelectInput label="Type" option="New Deal"/>
                                </div>
                            </div>
                        </div>

                        {/* iso details */}
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    ISO DETAILS
                                </h3>
                                <FiEdit2 />
                            </div>
                            <div className="flex flex-col gap-6 justify-between">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="ISO Name" input=""/>
                                    <LabelInputText type="text" label="ISO Sales Rep" input=""/>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Sales Rep" input=""/>
                                    <div className="w-[70%]">
                                        <LabelInputText type="text" label="ISO Manager" input=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* offer */}
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    OFFERS
                                </h3>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-between text-[#101828]">
                                No Records Found
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}