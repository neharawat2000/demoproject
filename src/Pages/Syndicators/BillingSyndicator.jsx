import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
import { FiEdit2 } from "react-icons/fi";

export default function BillingSyndicator() {
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
    return(
        <>
        <Slidebar/>
        <div className='mainContainer'>
            <Header title="Syndicators" option="User and Administration / Add User"/>
            <SecondHeader menuData={overviewMenu}/>
            <div className="flex justify-between w-[95%]">
                <form className="flex flex-col gap-10 items-start  w-[100%]">
                    <div className="flex flex-col gap-6 w-[100%]">
                        <div className="flex justify-between">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                            BILLING INFORMATION
                            </h4>
                            <FiEdit2 />
                        </div>
                        <div className="flex gap-6">
                            <LabelInputText type="text" label="Payment Transaction Method" input=""/>
                            <LabelInputText type="text" label="Repayment Transmission Method" input=""/>
                            <LabelInputText type="text" label="Repayment Transmission Processor" input=""/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 w-[100%]">
                        <div className="flex justify-between">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                                BANKS
                            </h4>
                            <FiEdit2 />
                        </div>
                        <div className="w-[48.5%]">
                            <LabelInputText type="text" label="Repayment Bank * ( Routing No. / Account No. )" input=""/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 w-[100%]">
                        <div className="flex justify-between">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                                REPAYMENT PLAN
                            </h4>
                            <FiEdit2 />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-6">
                                <LabelInputText type="text" label="Frequency" input="Weekly"/>
                                <LabelInputText type="text" label="Day" input="Friday"/>
                            </div>
                            <div className="flex gap-6">
                                <LabelInputText type="text" label="Method" input="Actum"/>
                                <LabelInputText type="text" label="Processor" input="ACH"/>
                            </div>
                        </div>
                    </div>
                    <button 
                    className="bg-[#4AACD5] text-[0.9rem] text-white px-[1.2rem] py-[0.3rem]">
                        Save
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}