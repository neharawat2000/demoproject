import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";

export default function AddSyndicator() {
    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Syndicators" option="Advances"/>
                <div className="flex flex-col gap-8 w-[95%]">
                    <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                        ADD NEW SYNDICATOR
                    </h4>
                    <form className="flex flex-col gap-10 items-start">
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <LabelInputText type="text" label="Name" input=""/>
                                <LabelInputText type="email" label="Email" input=""/>
                                <LabelInputText type="text" label="Phone Number 1" input=""/>
                                <LabelInputText type="text" label="Phone Number 2" input=""/>
                            </div>
                            <div className="flex gap-4">
                                <LabelInputText type="text" label="Address 1" input=""/>
                                <LabelInputText type="text" label="Address 2" input=""/>
                                <LabelInputText type="text" label="City" input=""/>
                                <LabelInputText type="text" label="State" input=""/>
                                <LabelInputText type="text" label="ZIP Code" input=""/>
                            </div>
                            <div className="flex gap-4">
                                <LabelInputText type="text" label="URL" input=""/>
                                <LabelInputText type="text" label="FAX" input=""/>
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