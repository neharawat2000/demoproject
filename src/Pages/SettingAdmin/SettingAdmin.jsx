import React from 'react'
import Slidebar from '../../Component/Slidebar/Slidebar';
import Header from '../../Component/Header/Header';
import SecondHeader from '../../Component/Header/SecondHeader';
import LabelInputText from '../../Component/LabelInputText/LabelInputText';

export default function SettingAdmin() {
    const overviewMenu=[
        {
            path:"/setting/user",
            name:"Users"
        },
        {
            path:"/setting/business-profile",
            name:"Business Profile"
        },
        {
            path:"/setting/general-settings",
            name:"General Settings"
        }
        ,
        {
            path:"/setting/admin",
            name:"Admin"
        }
    ];
    return(
        <>
       <Slidebar/>
        <div className='mainContainer'>
            <Header title="Settings" option="User and administration / Add User"/>
            <div className="flex justify-between items-start">
                <SecondHeader menuData={overviewMenu}/>
            </div>
            <div className="flex flex-col gap-8 w-[95%]">
                <div className="flex justify-between">
                    <h4 
                    className="text-[#353333] text-[1.2rem] font-[500]">
                        Shared Enrollment Plans for Ikhan Capital
                    </h4>
                    <button 
                    className="bg-[#4AACD5] text-[0.9rem] text-white px-[1.2rem] py-[0.3rem]">
                        Save Program Options
                    </button>
                </div>
                <form className="flex flex-col gap-6 items-start w-[100%]">
                    <div className="flex flex-col gap-4">
                        <h4 
                        className="text-[#353333] text-[1.2rem] font-[500]">
                            Set Up Fee
                        </h4>
                        <div className="flex gap-4 w-[100%]">
                            <LabelInputText type="text" label="Minimum" input=""/>
                            <LabelInputText type="email" label="Maximum" input=""/>
                            <LabelInputText type="text" label="Default" input=""/>
                            <LabelInputText type="text" label="Increment" input=""/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 
                        className="text-[#353333] text-[1.2rem] font-[500]">
                            Enrollment Fee
                        </h4>
                        <div className="flex gap-4">
                            <LabelInputText type="text" label="Minimum" input=""/>
                            <LabelInputText type="email" label="Maximum" input=""/>
                            <LabelInputText type="text" label="Default" input=""/>
                            <LabelInputText type="text" label="Increment" input=""/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 
                        className="text-[#353333] text-[1.2rem] font-[500]">
                            Down Payment Period
                        </h4>
                        <div className="flex gap-4">
                            <LabelInputText type="text" label="Minimum" input=""/>
                            <LabelInputText type="email" label="Maximum" input=""/>
                            <LabelInputText type="text" label="Default" input=""/>
                            <LabelInputText type="text" label="Increment" input=""/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 
                        className="text-[#353333] text-[1.2rem] font-[500]">
                            Total Fee Period
                        </h4>
                        <div className="flex gap-4">
                            <LabelInputText type="text" label="Minimum" input=""/>
                            <LabelInputText type="email" label="Maximum" input=""/>
                            <LabelInputText type="text" label="Default" input=""/>
                            <LabelInputText type="text" label="Increment" input=""/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 
                        className="text-[#353333] text-[1.2rem] font-[500]">
                            Monthly Fee
                        </h4>
                        <div className="flex gap-4">
                            <LabelInputText type="text" label="Minimum" input=""/>
                            <LabelInputText type="email" label="Maximum" input=""/>
                            <LabelInputText type="text" label="Default" input=""/>
                            <LabelInputText type="text" label="Increment" input=""/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 
                        className="text-[#353333] text-[1.2rem] font-[500]">
                            Settlement Fee
                        </h4>
                        <div className="flex gap-4">
                            <LabelInputText type="text" label="Minimum" input=""/>
                            <LabelInputText type="email" label="Maximum" input=""/>
                            <LabelInputText type="text" label="Default" input=""/>
                            <LabelInputText type="text" label="Increment" input=""/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
  );
}
