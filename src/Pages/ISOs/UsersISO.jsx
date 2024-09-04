import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import { Link} from "react-router-dom";

// example table just for design
import ListingPageTable from "../../Component/Table/ListingPageTable";

export default function UsersISO(){
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
                <div className="flex justify-between w-[100%]">
                    <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">USERS</h4>
                    <div className="flex gap-2 items-center">
                        <Link to="/syndicators/add-syndicator">
                            <button 
                            className="bg-[#4AACD5] text-[0.9rem] text-white rounded-2xl px-[1rem] py-[0.2rem]"
                            >Add Users</button>
                        </Link>
                        <Link to="/syndicators/edit-syndicator">
                            <button 
                            className="bg-[#4AACD5] text-[0.9rem] text-white rounded-2xl px-[1rem] py-[0.2rem]"
                            >Delete Users</button>
                        </Link>
                    </div>
                </div>
                <ListingPageTable/>
            </div>
        </div>
        </>
    );
}