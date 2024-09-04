// Portfolio.jsx
import React, { useState } from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import ReuseTable from "../../Component/Table/ReuseTable";
import { LuRefreshCw } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [statusFilter, setStatusFilter]= useState("All");

  const columns = ["id","client","funded Amt","payback Amt","factor Rate","frequency","balance","status",];

  const data = [
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Paid Off",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Due",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Overdue",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Issue",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Paid Off",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Paid Off",
    }
    ,
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Overdue",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Issue",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Paid Off",
    },
    {
    "id": "0001",
      "client": "abc",
      "email": "abc@gmail.com",
      "funded Amt": "$630.44",
      "payback Amt": "$854",
      "factor Rate": 1.6,
      "frequency": "DAILY",
      "balance": "$351.02",
      "status": "Paid Off",
    }
  ];

  const filtermenu=["All","Due", "Paid Off", "Overdue", "Issue"];

  const processedData = data.map(item => ({
    ...item,
    "client": (<div className="flex flex-col gap-2">
      <span className="text-[#101828] font-[600]">{item.client}</span>
      <span  className="text-[#667085]">{item.email}</span> 
    </div>),
}));

  const filterAllData = statusFilter === "All" ? processedData : processedData.filter((item) => item.status === statusFilter);

  return (
    <>
      <Slidebar />
      <div className="mainContainer">
        <Header title="Portfolio" option="Home" />
        <div className="flex flex-col justify-between w-[95%] gap-4 items-start">
          <div className="mb-[1rem] flex gap-4 justify-between w-[60%]">
            <div className="mb-[1rem] flex gap-4 items-end">
              {
                filtermenu.map((menu, index)=>{
                  return(
                    <button key={index} onClick={() => setStatusFilter(menu)}
                    style={{
                      background: statusFilter === menu ? "#BEEBFF" : "white",
                      color: statusFilter === menu ? "#2C2A2A" : "#807C7C",
                      fontWeight: statusFilter === menu ? "600" : "500",
                    }}
                    className="rounded-2xl border px-[1rem] py-[0.2rem]" >
                      {menu}
                    </button>
                  );
                })
              }
            </div>
            <div className="flex items-center gap-4">
                <div className="flex text-[#202224] gap-1">
                    <span className="items-end">245</span> 
                    <span className="flex gap-2 items-end">Records <GoDotFill className="text-xs"/></span>
                </div>
                {/* <Link to="/application/overview" className="bg-[#4AACD5] text-[0.9rem] text-white px-[1.2rem] py-[0.3rem]">
                            Add Application
                </Link> */}
            </div>
          </div>
          <div className="flex items-center justify-between text-[#434343] w-[100%] ">
              <div className="text-[#353333] font-[700]">
                  RECENT FUNDINGS 
              </div>
              <div className="flex gap-3">
                  <div 
                  className="refresh-btn flex gap-1 text-[0.9rem] items-center border px-[0.5rem] py-[0.3rem] border-[#ECECEC] font-[400] rounded-xl borderRadius">
                      <LuRefreshCw className="text-[0.7rem]"/> Refresh
                  </div>
                  <div 
                  className="refresh-btn flex gap-1 text-[0.9rem] items-center border px-[0.5rem] py-[0.3rem] border-[#ECECEC] font-[400] rounded-xl borderRadius">
                      <CiCalendar className="font-[500]"/> All Time
                  </div>
              </div>
          </div>
          <ReuseTable columns={columns} data={filterAllData} />
        </div>
      </div>
    </>
  );
}
