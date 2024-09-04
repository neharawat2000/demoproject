import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
import { FiEdit2 } from "react-icons/fi";

// example for display table
import ListingPageTable from "../../Component/Table/ListingPageTable";
import OfferSyndicatorTable from "../../Component/Table/OfferSyndicatorTables";

export default function OfferSyndicator() {
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
                <div className="flex flex-col gap-2 w-[100%]">
                    <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">
                        DEALS AVAILABLE FOR SYNDICATION 
                    </h4>
                    <OfferSyndicatorTable/>
                </div>
            </div>
        </div>
        </>
    );
}