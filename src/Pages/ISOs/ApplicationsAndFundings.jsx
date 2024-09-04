import React, { useState } from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import { CiFileOn } from "react-icons/ci";
import ReuseTable from "../../Component/Table/ReuseTable";

export default function ApplicationsAndFundings(){
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
    const columns=[ "date Created","last Status Change","client","status"]
    const data = [
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Funded" 
        },
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Rejected" 
        },
        {
           
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "In Process" 
        },
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Funded" 
        },
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Rejected" 
        },
        {
            
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Approved" 
        },
        {
           
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Approved" 
        },
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Funded" 
        },
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Rejected" 
        },
        {
           
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "In Process" 
        },
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Funded" 
        },
        {
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Rejected" 
        },
        {
            
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Approved" 
        },
        {
           
            "date Created":"October 30, 2017",
            "last Status Change":"October 30, 2017",
            "client": "abc",
            "email": "abc@gmail.com",
            "status": "Approved" 
        },
    ];
    const processedData = data.map(item => ({
        ...item,
        "client": (<div className="flex flex-col gap-2">
          <span className="text-[#101828] font-[600]">{item.client}</span>
          <span  className="text-[#667085]">{item.email}</span> 
        </div>),
    }));

    const columns2=["date Created","funding Date","funding Amt","payback Amt","payment Frequency","payment Amt","status","link"];
    const data2 = [
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Paid Off" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Healthy" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Slow Pay" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Issue" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Paid Off" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Healthy" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Slow Pay" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Issue" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Paid Off" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Healthy" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Slow Pay",
            "link":<CiFileOn/> 
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Issue" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Paid Off" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Healthy" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Slow Pay" ,
            "link":<CiFileOn/>
        },
        {
            "date Created":"May 20, 2015",
            "funding Date":"May 20, 2015",
            "funding Amt":"$202.87",
            "payback Amt":"$202.87",
            "payment Frequency":"$202.87",
            "payment Amt":"$202.87",
            "status": "Issue" ,
            "link":<CiFileOn/>
        },
    ];
    const processedData2 = data2.map(item => ({
        ...item,
        "link": (<div className="bg-[#DFF5FF] h-[40px] rounded-full w-[40px] flex items-center justify-center">
            <div className="text-[1.2rem] font-[700] text-[#A8E0F8]">{item.link}</div>
        </div>),
    }));

    const [tableFilter, setTableFilter]= useState("All Applications");
    const filtermenu=["All Applications", "All Fundings"];
    return(
        <>
        <Slidebar/>
        <div className='mainContainer'>
            <Header title="ISO" option="Infinity Contracting"/>
            <SecondHeader menuData={overviewMenu}/>
            <div className="flex flex-col gap-4 w-[95%]">
                
                <div className="flex justify-between items-center w-[95%]">
                    <div className="flex gap-2 items-center">
                        {
                        filtermenu.map((menu, index)=>{
                            return(
                            <button key={index} onClick={() => setTableFilter(menu)}
                            style={{
                                background: tableFilter === menu ? "#BEEBFF" : "white",
                                color: tableFilter === menu ? "#2C2A2A" : "#807C7C",
                                fontWeight: tableFilter === menu ? "600" : "500",
                            }}
                            className="rounded-2xl border px-[1rem] py-[0.2rem]" >
                                {menu}
                            </button>
                            );
                        })
                        }
                    </div>
                    <button className="text-[1rem] text-white bg-[#4AACD5] font-[600] rounded-2xl px-[1rem] py-[0.2rem]">
                        Export
                    </button>
                </div>
                {
                    tableFilter==="All Applications" ? <ReuseTable  columns={columns} data={processedData} />:
                    <ReuseTable  columns={columns2} data={processedData2} />
                }
                
            </div>
        </div>
        </>
    );
}