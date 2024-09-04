import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
import { FiEdit2 } from "react-icons/fi";
// example table just for design

export default function BillingISO(){
    const overviewMenu=[
        {
            path:"/isos/add-iso/general-info",
            name:"General Info"
        },
        {
            path:"/isos/add-iso/applications-&-fundings/all-application",
            name:"Applications & Fundings"
        },
        // {
        //     path:"/isos/add-iso/users",
        //     name:"Users"
        // },
        // {
        //     path:"/isos/add-iso/billing",
        //     name:"Billing"
        // },
        {
            path:"/isos/add-iso/documents",
            name:"Documents"
        },
        // {
        //     path:"/isos/add-iso/settings",
        //     name:"Settings"
        // }
    ];

    return(
        <>
        <Slidebar/>
        <div className='mainContainer'>
            <Header title="ISO" option="Infinity Contracting"/>
            <SecondHeader menuData={overviewMenu}/>
            <div className="flex flex-col gap-6 w-[95%]">
                <form className="flex flex-col gap-10 items-start">
                    <div className="flex flex-col gap-6 w-[100%]">
                        <div className="flex justify-between">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                                DETAILS
                            </h4>
                            <FiEdit2 />
                        </div>
                        <div className="flex gap-4 justify-between">
                            <LabelInputText type="text" label="Transmission Method" input="Other"/>
                            <LabelInputText type="text" label="Transmission Processor" input="Actum"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}