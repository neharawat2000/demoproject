import React, { useState} from "react";
import { useSelector } from "react-redux";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";

export default function UnderWriterClient(){
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
                <div className="flex flex-col gap-4 w-[95%]">
                    <div className="flex flex-col gap-10 mb-[2.5rem]">
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    BUSINESS INFORMATION
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-between w-[100%]">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Legal name" input="" />
                                    <LabelInputText type="text" label="Doing business as" input="" />
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="email" label="Company email" input="" />
                                    <LabelInputText type="text" label="Business phone number" input="" />
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Cell phone number" input="" />
                                    <LabelInputText type="text" label="Primary website" input="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    INDUSTRY DETAILS
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-between w-[100%]">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="SIC Description" input="" />
                                    <LabelInputText type="text" label="SIC code" input="" />
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="NAICS Description" input="" />
                                    <LabelInputText type="text" label="NAICS code" input="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    BUSINESS  DETAILS
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-between w-[100%]">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Date Business Started" input="" />
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="Length of Ownership" input="" />
                                        <LabelInputText type="text" label="Incorporation Date" input="" />
                                    </div>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Gross Monthly Sales" input="" />
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="Incorporation State" input="" />
                                        <LabelInputText type="text" label="Type of Business Entity" input="" />
                                    </div>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="EIN Number" input="" />
                                    <LabelInputText type="text" label="Addresses" input="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    ISO INFORMATION
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-between">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Referring ISO" input="" />
                                    <LabelInputText type="text" label="ISO Sales Rep" input="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}