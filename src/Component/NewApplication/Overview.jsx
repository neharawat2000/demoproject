import React, { useState} from "react";
import Slidebar from "../Slidebar/Slidebar";
import Header from "../Header/Header";
import { FiEdit2 } from "react-icons/fi";
import LabelInputText from "../LabelInputText/LabelInputText";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import LabelSelectInput from "../LabelSelectInput/LabelSelectInput";
import axios from "axios";
import ClientDetails from "./ClientDetails";
import Notes from "./Notes";
import Documents from "./Documents";
import History from "./History";

export default function Overview(){
    const timeLine=[
        {
            title:"Notes",
            about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            category:"General",
            time:"12:00 am"
        },
        {
            title:"Status",
            about:"Opportunity > Merchant Reviewing Offer",
            time:"12:00 am"
        },
        {
            title:"Status",
            about:"Opportunity > Merchant Reviewing Offer",
            time:"12:00 am"
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
    const [uploadedFiles,setUploadedFile]=useState([])
    const AgentUID = useSelector(state=>state.user.uid);

    const [addApplication, setAddApplication] = useState(initialValues);
    const [statusFilter, setStatusFilter] = useState("Overview");

    const filtermenu = ["Overview", "Client Details", "Documents", "Notes", "History"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddApplication(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data={
            AgentUID,
            ...addApplication,
            files:uploadedFiles
        }
        console.log(data)
        try {
            const response = await axios.post('http://localhost:8000/add-application', data);
            if (response.status === 201) {
                alert('ISO added successfully');
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleFileUpload=(fileData)=>{
        setUploadedFile(prevFiles=>[...prevFiles,fileData]);
    }

    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="Applications" option="Infinity Contracting"/>
                <div className="mb-[1rem] flex gap-4 items-end">
                    {filtermenu.map((menu, index) => (
                        <button
                            key={index}
                            onClick={() => setStatusFilter(menu)}
                            style={{
                                background: statusFilter === menu ? "rgb(74, 172, 213)" : "white",
                                color: statusFilter === menu ? "white" : "rgb(37, 104, 132)",
                                fontWeight: statusFilter === menu ? "600" : "500",
                            }}
                            className="rounded-2xl border px-[1rem] py-[0.2rem]"
                        >
                            {menu}
                        </button>
                    ))}
                </div>
                <form>
                {statusFilter === "Overview" ?(
                    <div className="flex gap-10 w-[95%]">
                        <div className="flex flex-col gap-10 pr-[1.5rem] border-r w-[70%]">
                            {/* Business */}
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between">
                                    <h3 
                                    className="text-[#353333] text-[1.2rem] font-[500]">
                                        BUSINESS INFORMATION
                                    </h3>
                                    <FiEdit2 />
                                </div>
                                <div className="flex flex-col gap-6 justify-between">
                                    <div className="w-[48.5%]">
                                        <LabelInputText type="text" label="Business Name" input=""  inputName="overviewBussinessInfoBusinessName" value={addApplication.overviewBussinessInfoBusinessName} valueChange={handleChange}/>
                                    </div>
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="Client First name" input=""  inputName="overviewBussinessInfoClientFirstName" value={addApplication.overviewBussinessInfoClientFirstName} valueChange={handleChange}/>
                                        <LabelInputText type="text" label="Client Last name" input=""  inputName="overviewBussinessInfoClientLastName" value={addApplication.overviewBussinessInfoClientLastName} valueChange={handleChange}/>
                                    </div>
                                    <div className="w-[48.5%]">
                                        <LabelInputText type="email" label="Email Address" input=""  inputName="overviewBussinessInfoEmailAddress" value={addApplication.overviewBussinessInfoEmailAddress} valueChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            {/* funding */}
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between">
                                    <h3 
                                    className="text-[#353333] text-[1.2rem] font-[500]">
                                        FUNDING DETAILS
                                    </h3>
                                    <FiEdit2 />
                                </div>
                                <div className="flex flex-col gap-6 justify-between">
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="White Label" input=""  inputName="overviewFundingWhiteLabel" value={addApplication.overviewFundingWhiteLabel} valueChange={handleChange}/>
                                        <div className="flex justify-content gap-8 w-[100%]">
                                            <div className="w-[70%]">
                                                <LabelInputText type="text" label="Installment" input=""  inputName="overviewFundingInstallment" value={addApplication.overviewFundingInstallment} valueChange={handleChange}/>
                                            </div>
                                            <LabelSelectInput label="Installment" option="1"/>
                                        </div>
                                    </div>
                                    <div className="w-[30%]">
                                        <LabelSelectInput label="Type" option="New Deal"/>
                                    </div>
                                </div>
                            </div>

                            {/* iso details */}
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between">
                                    <h3 
                                    className="text-[#353333] text-[1.2rem] font-[500]">
                                        ISO DETAILS
                                    </h3>
                                    <FiEdit2 />
                                </div>
                                <div className="flex flex-col gap-6 justify-between">
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="ISO Name" input=""   inputName="overviewISODetailISOName" value={addApplication.overviewISODetailISOName} valueChange={handleChange}/>
                                        <LabelInputText type="text" label="ISO Sales Rep" input=""   inputName="overviewISODetailSalesRep" value={addApplication.overviewISODetailSalesRep} valueChange={handleChange}/>
                                    </div>
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <LabelInputText type="text" label="Sales Rep" input=""   inputName="overviewISODetailSalesRep" value={addApplication.overviewISODetailSalesRep} valueChange={handleChange}/>
                                        <div className="w-[70%]">
                                            <LabelInputText type="text" label="ISO Manager" input=""   inputName="overviewISODetailISOManager" value={addApplication.overviewISODetailISOManager} valueChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* offer */}
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between">
                                    <h3 
                                    className="text-[#353333] text-[1.2rem] font-[500]">
                                        OFFERS
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-4 items-center justify-between text-[#101828]">
                                    No Records Found
                                </div>
                            </div>

                            {/* Stipulations */}
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between">
                                    <h3 
                                    className="text-[#353333] text-[1.2rem] font-[500]">
                                        Stipulations
                                    </h3>
                                    <button
                                    className="flex items-center px-[1rem] py-[0.6rem] text-white bg-[#4AACD5] border border-[#FAF5D1]">
                                        Request Documents
                                    </button>
                                </div>
                                <div className="flex flex-col gap-4 items-center justify-between text-[#101828]">
                                    No Records Found
                                </div>
                            </div>
                            <button type="button"
                                onClick={()=>setStatusFilter("Client Details")}
                                className="bg-[#4AACD5] w-[100px] text-[0.9rem] text-white px-[1.5rem] py-[0.3rem] my-[1rem]"
                            >
                                Next
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 pl-[1rem] w-[30%]">
                            <div className="flex justify-between text-[#101010] pb-[0.5rem] text-[13px] font-[500] border-b border-[#171717]">
                                Timeline
                            </div>
                            {
                                timeLine.map((item ,index)=>{
                                    return(
                                        <>
                                        <div key={index} className="flex flex-col items-start gap-4">
                                                <div
                                                className="rounded-lg px-[1rem] py-[0.2rem] text-[0.8rem] font-[500]"
                                                style={
                                                    item.title==="Status"? {color: "#0B3547", backgroundColor:"#D6CFEB91"}
                                                    :item.title==="Notes"? {color: "#DA5151", backgroundColor:"#EBCFCF85"}
                                                    :{}
                                                }>
                                                    {item.title}
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="text-[0.9rem]">{item.about}</div>
                                                    <div className="flex gap-4">
                                                        <span className="flex gap-2 items-center text-[0.8rem]">
                                                            <BiSolidTimeFive />
                                                            {item.time}
                                                        </span>
                                                        <span className="flex gap-2 items-center text-[0.8rem]">
                                                            <BsFillPersonFill />
                                                            Isaac Greene
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                        
                    </div>
                    ): statusFilter === "Client Details"?(
                    <>
                    <ClientDetails/>
                    <button type="button"
                        onClick={()=>setStatusFilter("Documents")}
                        className="bg-[#4AACD5] w-[100px] text-[0.9rem] text-white px-[1.5rem] py-[0.3rem] my-[1rem]"
                    >
                        Next
                    </button>
                    </>
                ): statusFilter === "Documents"? (
                    <>
                    <Documents onFileUpload={handleFileUpload} uploadedFiles={uploadedFiles} />
                    <button type="button"
                        onClick={()=>setStatusFilter("Notes")}
                        className="bg-[#4AACD5] w-[100px] text-[0.9rem] text-white px-[1.5rem] py-[0.3rem] my-[1rem]"
                    >
                        Next
                    </button>
                    </>): statusFilter === "Notes"?(
                        <>
                        <Notes/>
                        <button type="button"
                            onClick={()=>setStatusFilter("History")}
                            className="bg-[#4AACD5] w-[100px] text-[0.9rem] text-white px-[1.5rem] py-[0.3rem] my-[1rem]"
                        >
                            Next
                        </button>
                        </>): (<History/> )
                }
                </form>
            </div>
        </>
    );
}