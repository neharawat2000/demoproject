import React, { useState} from "react";
import { useSelector } from "react-redux";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
import SmallTables from "../../Component/Table/SmallTables";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

export default function UnderWriter(){
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

    const columns = ["name", "%", "fico", "dob", "edit"];
    const data = [
      {
        "name": "Steve Jobs",
        "%":"",
        "fico": "",
        "dob": "",
        "edit": <FiEdit2 />,
        "delete": <RiDeleteBin6Line />
      }
    ];
    const processedData = data.map(item => ({
        ...item,
        "edit": (<div className="flex gap-2">{item.delete} {item.edit}</div>)
    }));

    const columns2 = ["description", "link", "edit"];
    const data2 = [
        {
          "description": "www.apple.com",
          "link":"",
          "edit": <FiEdit2 />,
          "delete": <RiDeleteBin6Line />
        }
      ];
    const processedData2 = data2.map(item => ({
        ...item,
        "edit": (<div className="flex gap-2">{item.delete} {item.edit}</div>)
    }));

    const columns3 = ["type", "note", "date", "edit"];
    const data3 = [
        {
          "type": "Dockets / Lawsuits",
          "note":"Text for a note",
          "date":"26 Jan 2023",
          "edit": <FiEdit2 />,
          "delete": <RiDeleteBin6Line />
        },
        {
            "type": "",
            "note":"Text for a note",
            "date":"26 Jan 2023",
            "edit": <FiEdit2 />,
            "delete": <RiDeleteBin6Line />
          }
          ,
        {
            "type": "",
            "note":"Text for a note",
            "date":"26 Jan 2023",
            "edit": <FiEdit2 />,
            "delete": <RiDeleteBin6Line />
          }
          ,
        {
            "type": "",
            "note":"Text for a note",
            "date":"26 Jan 2023",
            "edit": <FiEdit2 />,
            "delete": <RiDeleteBin6Line />
          }
      ];
    const processedData3 = data3.map(item => ({
        ...item,
        "edit": (<div className="flex gap-2">{item.delete} {item.edit}</div>)
    }));
    const columns4=["Active","Position","Funder","Amount Funded", "Factor Rote","Payback Amount","Frequency","ACH", "Date","% of Gross","Approx. Date Position Closes", "Approx. Balance"];
    const data4=[];
    const columns5=["Active", "Approved","Payback","Transmissic Method","Term Length","Buy Rate","Position","Commission","Commission Percent", "Factor Rate","Bank Fee","Number Of Payments","Payments Amount","Frequency","% Gross"
      ];
      
    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Applications" option="Infinity Contracting"/>
                <SecondHeader menuData={menuu}/>
                <div className="flex flex-col gap-4 w-[95%]">
                    <div className="flex flex-col gap-10 mb-[2.5rem]">
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    BUSINESS INFORMATION
                                </h3>
                                <FiEdit2 />
                            </div>
                            <div className="flex flex-col gap-6 justify-between w-[100%]">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Gross Monthly Sales" input="" />
                                    <LabelInputText type="text" label="Length of Ownership" input="" />
                                    <LabelInputText type="text" label="Time in Business" input="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    INDUSTRY DETAILS
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-between w-[100%]">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="NAICS Description" input="" />
                                    <LabelInputText type="text" label="NAICS code" input="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    BUSINESS  DETAILS
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-between w-[100%]">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Date Business Started" input="" />
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="Length of Ownership" input="" />
                                        <LabelInputText type="text" label="Incorporation Date" input="" />
                                    </div>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Gross Monthly Sales" input="" />
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="Incorporation State" input="" />
                                        <LabelInputText type="text" label="Type of Business Entity" input="" />
                                    </div>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="EIN Number" input="" />
                                    <LabelInputText type="text" label="Addresses" input="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-[100%]">
                            <div className="flex flex-col justify-between">
                                <div className="flex flex-col gap-8">
                                    <div className="flex justify-between gap-2 w-[95%]">
                                        <h3 
                                        className="text-[#353333] text-[1.2rem] font-[500]">
                                            Ownership
                                        </h3>
                                        <button 
                                        className="bg-[#4AACD5] text-[0.9rem] rounded-lg text-white px-[1.2rem] py-[0.3rem]">
                                            Add new owner
                                        </button>
                                    </div>
                                    <SmallTables  columns={columns} data={processedData}/>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex justify-between gap-2 w-[95%]">
                                        <h3 
                                        className="text-[#353333] text-[1.2rem] font-[500]">
                                            Web Links
                                        </h3>
                                        <button 
                                        className="bg-[#4AACD5] text-[0.9rem] rounded-lg text-white px-[1.2rem] py-[0.3rem]">
                                            Add new Link
                                        </button>
                                    </div>
                                    <SmallTables  columns={columns2} data={processedData2}/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between gap-2 w-[95%]">
                                    <h3 
                                    className="text-[#353333] text-[1.2rem] font-[500]">
                                        Business Notes
                                    </h3>
                                    <button 
                                    className="bg-[#4AACD5] text-[0.9rem] rounded-lg text-white px-[1.2rem] py-[0.3rem]">
                                        Add new Note
                                    </button>
                                </div>
                                <SmallTables  columns={columns3} data={processedData3}/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    Operations Notes
                                </h3>
                                <FiEdit2 />
                            </div>
                            <div className="flex flex-col gap-6 justify-between">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Bank Name" input="" />
                                    <LabelInputText type="text" label="Routing Number" input="" />
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Account Number" input="" />
                                    <LabelInputText type="text" label="Account Type" input="" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    Saved positions
                                </h3>
                                <button 
                                className="bg-[#4AACD5] text-[0.9rem] rounded-lg text-white px-[1.2rem] py-[0.3rem]">
                                    Add position
                                </button>
                            </div>
                            <SmallTables columns={columns4} data={data4}/>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    Saved terms
                                </h3>
                                <button 
                                className="bg-[#4AACD5] text-[0.9rem] rounded-lg text-white px-[1.2rem] py-[0.3rem]">
                                    Add terms
                                </button>
                            </div>
                            <SmallTables columns={columns5} data={data4}/>
                        </div> */}
                        
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h3 
                                className="text-[#353333] text-[1.2rem] font-[500]">
                                    Underwriter Notes
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6 justify-between">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <textarea name="" rows="4" placeholder="Write your notes" 
                                    className="w-[100%] border border-[#D0D5DD px-2 py-2 bg-[#F9FAFB] rounded-lg"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button 
                            className="bg-[#4AACD5] text-[0.9rem] text-white px-[1.2rem] py-[0.3rem]">
                                Decline
                            </button>
                            <button 
                            className="bg-[#BEEBFF] text-[0.9rem] text-white px-[1.2rem] py-[0.3rem]">
                                Approve
                            </button>
                            <button 
                            className="bg-[#BEEBFF] text-[0.9rem] text-white px-[1.2rem] py-[0.3rem]">
                                Send for Revision
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}