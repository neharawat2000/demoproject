import React from 'react'
import Slidebar from '../../Component/Slidebar/Slidebar';
import Header from '../../Component/Header/Header';
import SecondHeader from '../../Component/Header/SecondHeader';

export default function Setting() {
    const overviewMenu=[
        {
            path:"/setting/user",
            name:"Add Users"
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
            <div className="flex justify-between w-[95%] items-start">
                <SecondHeader menuData={overviewMenu}/>
                {/* <div className="flex flex-col gap-8">
                    <h4 
                    className="text-[#353333] text-[1.2rem] font-[500]">
                        BUSINESS INFORMATION
                    </h4>
                </div> */}
            </div>
        </div>
        </>
  );
}
