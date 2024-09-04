import React, { useState } from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import ReuseTable from "../../Component/Table/ReuseTable";

export default function Dashboard() {
    const results=[
        {
            title:"In Process",
            count:"04",
            date:"In Last 7 Days"
        },
        {
            title:"Submitted",
            count:"06",
            date:"In Last 7 Days"
        },
        {
            title:"Approved",
            count:"12",
            date:"In Last 7 Days"
        },
        {
            title:"Funded",
            count:"05",
            date:"In Last 7 Days"
        },
        {
            title:"Rejected",
            count:"03",
            date:"In Last 7 Days"
        }
    ];

    const columns = [ "name", "id", "amount requested", "industry", "status"];
    const data = [
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Funded" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "In Process" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Rejected" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Approved" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Submitted" 
        },

        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Funded" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "In Process" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Rejected" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Approved" 
        },
        {
            "name":"abc",
            "id": "00001",
            "amount requested": "$12,300",
            "industry":"Business",
            "status": "Submitted" 
        },
    ];
    
    
    const [statusFilter, setStatusFilter]= useState("All");
    const filtermenu=["In Process", "Submitted", "Approved", "Funded", "Rejected"];

    const filterAllData =statusFilter === "All" ? data : data.filter((item) => item.status ===statusFilter);
    return(
        <>
        <Slidebar/>
        <div className='mainContainer'>
            <Header title="Dashboard" option="Overview"/>
            <div className="flex flex-col justify-between w-[95%] items-start">
                <div className="mb-[1rem] flex flex-col gap-4 justify-between w-[100%]">
                    <div className="grid grid-cols-[repeat(5,200px)] gap-8">
                        {
                            results.map((result, index)=>{
                                return(
                                    <>
                                        <div key={index} onClick={() => setStatusFilter(result.title)}
                                        className="bg-[#FAFAFA] border border-[#ECECEC] flex flex-col gap-2 px-[1rem] py-[0.5rem] rounded-xl">
                                            <div className="text-[#475467] text-[1.2rem] font-[700]">
                                                {result.title}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#1E8EBE] text-[1.8rem] font-[700]">
                                                    {result.count}
                                                </span>
                                                <span className="text-[#475467] text-[12px] font-[500]">
                                                    {result.date}
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                    <div className="flex items-center justify-between text-[#434343]">
                        <div className="text-[#353333] font-[700]">
                            RECENT APPLICATIONS 
                        </div>
                    </div>
                    <ReuseTable columns={columns} data={filterAllData} />
                </div>
            </div>
        </div>
        </>
    );
}