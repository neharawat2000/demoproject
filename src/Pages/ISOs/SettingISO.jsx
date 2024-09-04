import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
import { FiEdit2 } from "react-icons/fi";
import { MdAdd } from "react-icons/md";


export default function SettingISO(){
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
                            GENERAL SETTINGS
                            </h4>
                            <FiEdit2 />
                        </div>
                        <div className="flex gap-6 flex-col">
                            <div className="flex gap-4 justify-between">
                                <LabelInputText type="text" label="Commission Payment Frequency" input="Weekly"/>
                                <LabelInputText type="text" label="Commission Payment Day" input="Friday"/>
                            </div>
                            <div className=" w-[48.5%]">
                                <LabelInputText type="text" label="White Labels" input="Weekly"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 w-[100%]">
                        <div className="flex justify-between">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                            NOTIFICATION RECIPIENTS
                            </h4>
                            <FiEdit2 />
                        </div>
                        <div className="flex gap-2 flex-col">
                            <div className="flex gap-4 justify-between w-[48.5%]">
                                <LabelInputText type="email" label="Email Address" input="steve@mail.com"/>
                            </div>
                            <div className="flex items-center gap-2 text-[#344054]">
                            <MdAdd /> <span className="text-[0.9rem]">Add New Email Address</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}