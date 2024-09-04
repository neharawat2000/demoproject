import React, { useState} from "react";
import { useSelector } from "react-redux";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import { LuUploadCloud } from "react-icons/lu";
import SmallTables from "../../Component/Table/SmallTables";
import { CiFileOn } from "react-icons/ci";

export default function UnderWriterDocuments(){
    const menuu = [
        {
            path:"/application/underwriter/overview",
            name:"Overview"
        },
        {
            path:"/application/underwriter/client-details",
            name:"Client Details"
        },
        {
            path:"/application/underwriter/documents",
            name:"Documents"
        },
        // {
        //     path:"/application/underwriter/decision-logic",
        //     name:"Decision Logic"
        // },
        {
            path:"/application/under-writer",
            name:"UnderWriter"
        },
        {
            path:"/application/underwriter/notes",
            name:"Notes"
        },
        {
            path:"/application/underwriter/history",
            name:"History"
        }
    ];

    const columns = ["file name","associated stipulation","created by","created date", "action"];

    const data = [
      {
        "file name": "Checking account.pdf",
        "filesize":"720 KB",
        "associated stipulation": "n/a",
        "created by": "abc",
        "created date": "Jul 13, 2023",
        "action": "Open",
        "isDownload": "Downloaded",
        "associatedto": "Associated to stipulation",
        "delete":"Delete"
      },
      {
        "file name": "Checking account.pdf",
        "filesize":"720 KB",
        "associated stipulation": "n/a",
        "created by": "abc",
        "created date": "Jul 13, 2023",
        "action": "Open",
        "isDownload": "Downloaded",
        "associatedto": "Associated to stipulation",
        "delete":"Delete"
      }
    ];
    const columns2 = ["file name","created by","created date"];
    const data2=[];
    const processedData = data.map(item => ({
        ...item,
        "file name":(
        <div className="flex gap-2 items-center">
            <div className="bg-[#DFF5FF] h-[40px] rounded-full w-[40px] flex items-center justify-center">
                <CiFileOn className="text-[1.2rem] font-[700] text-[#A8E0F8]"/>
            </div>
            <div className="flex flex-col w-[auto]">
                <span>{item["file name"]}</span>
                <span>{item.filesize}</span>
            </div>
        </div>),
        "action":(
        <div className="flex gap-2">
            <span>{item.action}</span>
            <span>{item.isDownload}</span>
            <span className="text-[#4AACD5]">{item.associatedto }</span>
            <span className="text-[#F04438]">{item.delete}</span>
        </div>)
    }));
    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Applications" option="Infinity Contracting"/>
                <SecondHeader menuData={menuu}/>
                <div className="flex flex-col gap-4 w-[95%]">
                    <div className="flex flex-col gap-10 mb-[2.5rem] w-[100%]">
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between w-[95%]">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    MANUALLY UPLOADED
                                </h3>
                                <button 
                                className="flex gap-2 bg-[#4AACD5] text-[0.9rem] items-center text-white px-[1.2rem] py-[0.3rem]">
                                    <LuUploadCloud className="text-[1.2rem]"/> Upload
                                </button>
                            </div>
                            <SmallTables columns={columns} data={processedData}/>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between w-[95%]">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    SYSTEM GENERATED
                                </h3>
                                <button 
                                className="flex gap-2 bg-[#4AACD5] text-[0.9rem] items-center text-white px-[1.2rem] py-[0.3rem]">
                                    <LuUploadCloud className="text-[1.2rem]"/> Upload
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <SmallTables columns={columns2} data={data2}/>
                                <div className="flex shadow-lg h-[80px] w-[95%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}