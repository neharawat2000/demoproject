import React,{useState} from "react";
import SecondHeader from "../Header/SecondHeader";
import Slidebar from "../Slidebar/Slidebar";
import Header from "../Header/Header";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import LabelSelectInput from "../LabelSelectInput/LabelSelectInput";

export default function Notes(){
    const menuu = [
        {
            path:"/application/overview",
            name:"Overview"
        },
        {
            path:"/application/client-details",
            name:"Client Details"
        },
        {
            path:"/application/documents",
            name:"Documents"
        },
        // {
        //     path:"/application/decision-logic",
        //     name:"Decision Logic"
        // },
        {
            path:"/application/notes",
            name:"Notes"
        },
        {
            path:"/application/history",
            name:"History"
        }
    ];
    const initialValues = {
        overviewBussinessInfoBusinessName:"",
        overviewBussinessInfoEmailAddress:"", 
        overviewBussinessInfoClientFirstName:"", 
        overviewBussinessInfoClientLastName:"", 
        overviewBussinessInfoWeb:"", 
        overviewBussinessInfoPhoneNumber :"",
        overviewFundingWhiteLabel:"",
        overviewFundingInstallment:"", 
        overviewFundingType :"",
        // ISOSalesRep: OverviewISOSalesRep, 
        overviewISODetailISOName:"",
        overviewISODetailSalesRep:"", 
        overviewISODetailISOManager :"",
        clientIndustryDetailSICDescription:"", 
        clientIndustryDetailSICCode:"", 
        clientIndustryDetailNAICSDescription:"", 
        clientIndustryDetailNAICSCode :"",
        clientBusinessDetailDateBussinessStarted:"", 
        clientBusinessDetailLengthOfOwnership:"", 
        clientBusinessDetailGrossMonthlySales:"", 
        clientBusinessDetailIncorporaƟonState:"", 
        clientBusinessDetailEINNumber:"", 
        clientBusinessDetailAddresses :"",
        clientISOInfoReferringISO:"",
        // ISOSalesRep: ClientDetailsISOSalesRep 
        clientBusinessLegalName:"", 
        clientBusinessDoingBussinessAs:"", 
        clientBusinessCompanyEmail:"", 
        clientBusinessBussnessPhoneNumber:"", 
        clientBusinessCellPhoneNumber:"", 
        clientBusinessPrimaryWebsite:"" ,
        noteType:"",
        noteTemplate:"",
        noteContent:""
    };
    const [addApplication, setAddApplication] = useState(initialValues);
    return(
        <>
            <div className="flex flex-col gap-4 w-[95%]">
                <div className="flex flex-col gap-10 mb-[2.5rem]">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                Notes
                            </h3>
                            <button 
                            className="bg-[#4AACD5] text-[0.9rem] text-white px-[1.2rem] py-[0.3rem]">
                                Save
                            </button>
                        </div>
                        <div className="flex flex-col gap-6 justify-between w-[100%]">
                            <div className="flex justify-content gap-8 w-[50%]">
                                <LabelSelectInput label="Note Type" option="General"/>
                                <LabelSelectInput label="Note Template - Optional" option="General"/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <div className="flex flex-col gap-2 relative w-[100%]">
                                    <label 
                                    className="text-[#344054] text-[0.95rem] font-[400] absolute top-[-0.8rem] left-[1rem] px-[0.2rem] bg-white">
                                        Note Content
                                    </label>
                                    <textarea name="" id="" rows="5"
                                    className="border border-[#D0D5DD] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[#F9FAFB] px-[1rem] py-[0.8rem] outline-none text-[1rem] h-[150px]" placeholder="Write your notes here....">

                                    </textarea>
                                    <span className="text-[#595555] font-[400] text-[14px]">
                                        Note: Search for users or notify them by entering their email followed by a comma (i.e. email@domain.com,)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                Existing Notes
                            </h3>
                            <div className=" flex justify-between border border-[#D0D5DD] h-[2.6rem] w-[30%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[#F9FAFB] px-[1rem] py-[0.8rem] outline-none text-[1rem]">
                                <input type="text" name="" className="bg-[transparent]"
                                    required
                                placeholder="Search Notes"/>
                                <CiSearch className="text-[1.2rem]"/>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start justify-between py-[0.5rem]">
                            <div className="flex gap-4 items-start">
                                <div
                                className="rounded-lg px-[1rem] py-[0.2rem] text-[0.8rem] font-[500] items-start"
                                style={{color: "#58B08F", backgroundColor:"#58B08F2B"}}>
                                    General
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col text-[0.9rem]">
                                        <div> Merchant Reviewing Offer</div>
                                        <div>Loan Paid</div>
                                        <div>Return / Reversal</div>
                                        <div>a) Feb = $1256</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="flex gap-2 items-center text-[0.8rem]">
                                            <BiSolidTimeFive /> 12:00 am
                                        </span>
                                        <span className="flex gap-2 items-center text-[0.8rem]">
                                            <BsFillPersonFill />
                                            abc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start text-[#C9AA34] text-[0.8rem] bg-[#FAF5D1] font-[500] px-[1rem] py-[0.2rem] rounded-xl">
                                Today
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}