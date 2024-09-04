import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
// example table just for show
import AdvanceTable2 from "../../Component/Table/AdvanceTable2";

export default function EditSyndicator() {
    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Syndicators" option="User and Administration / Add User"/>
                <div className="flex flex-col gap-4 w-[95%]">
                    <div className="flex justify-between">
                        <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                            ADD / EDIT COMPANY
                        </h4>
                        <button 
                        className="bg-[#4AACD5] text-white text-[0.9rem] rounded-2xl px-[1rem] py-[0.2rem]">
                            Login as User
                        </button>
                    </div>  
                    <form className="flex flex-col gap-8 items-start">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                                Company Information
                            </h4>
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <LabelInputText type="text" label="Company Name" input=""/>
                                    <LabelInputText type="text" label="Parent Company" input=""/>
                                    <LabelInputText type="text" label="Company Name" input=""/>
                                    <LabelInputText type="text" label="Contact Name" input=""/>
                                </div>
                                <div className="flex gap-4">
                                    <LabelInputText type="text" label="Company Code" input=""/>
                                    <LabelInputText type="text" label="EIN" input=""/>
                                    <LabelInputText type="email" label="Email" input=""/>
                                    <LabelInputText type="text" label="Phone 1" input=""/>
                                    <LabelInputText type="text" label="Phone 2" input=""/>
                                </div>
                                <div className="flex gap-4">
                                    <LabelInputText type="text" label="Address 1" input=""/>
                                    <LabelInputText type="text" label="Address 2" input=""/>
                                    <LabelInputText type="text" label="City" input=""/>
                                    <LabelInputText type="text" label="State" input=""/>
                                    <LabelInputText type="text" label="ZIP Code" input=""/>
                                </div>
                                <div className="flex gap-4">
                                    <LabelInputText type="text" label="Time Zone" input=""/>
                                    <LabelInputText type="text" label="Account Exec" input=""/>
                                    <LabelInputText type="text" label="Theme" input=""/>
                                    <LabelInputText type="text" label="Logo" input=""/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                                Custom Fields
                            </h4>
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <LabelInputText type="text" label="Userfield 1" input=""/>
                                    <LabelInputText type="text" label="Userfield 2" input=""/>
                                    <LabelInputText type="text" label="Userfield 3" input=""/>
                                    <LabelInputText type="text" label="Userfield 4" input=""/>
                                </div>
                                <div className="flex gap-4">
                                    <LabelInputText type="text" label="Userfield 5" input=""/>
                                    <LabelInputText type="text" label="Userfield 6" input=""/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                                Sub Companies
                            </h4>
                            {/* example  */}
                            <AdvanceTable2/>
                        </div>
                        <button 
                        className="bg-[#4AACD5] text-white text-[0.9rem] rounded-2xl px-[1rem] py-[0.2rem]">
                           Save Company
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}