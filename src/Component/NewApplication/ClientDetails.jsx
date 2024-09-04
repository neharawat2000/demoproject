import React,{useState} from "react";
import { FiEdit2 } from "react-icons/fi";
import LabelInputText from "../LabelInputText/LabelInputText";
import { useSelector } from "react-redux";
import LabelSelectInput from "../LabelSelectInput/LabelSelectInput";

export default function ClientDetails(){
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
        clientBusinessDetailIncorporationState:"", 
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddApplication(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return(
        <>
            <div className="flex flex-col gap-4 w-[95%]">
                <div className="flex flex-col gap-10 mb-[2.5rem]">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                BUSINESS INFORMATION
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6 justify-between w-[100%]">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Legal name" input="" inputName="clientBusinessLegalName" value={addApplication.clientBusinessLegalName} valueChange={handleChange}/>
                                <LabelInputText type="text" label="Doing business as" input="" inputName="clientBusinessDoingBussinessAs" value={addApplication.clientBusinessDoingBussinessAs} valueChange={handleChange}/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="email" label="Company email" input="" inputName="clientBusinessCompanyEmail" value={addApplication.clientBusinessCompanyEmail} valueChange={handleChange}/>
                                <LabelInputText type="text" label="Business phone number" input="" inputName="clientBusinessBussnessPhoneNumber" value={addApplication.clientBusinessBussnessPhoneNumber} valueChange={handleChange}/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Cell phone number" input="" inputName="clientBusinessCellPhoneNumber" value={addApplication.clientBusinessCellPhoneNumber} valueChange={handleChange}/>
                                <LabelInputText type="text" label="Primary website" input="" inputName="clientBusinessPrimaryWebsite" value={addApplication.clientBusinessPrimaryWebsite} valueChange={handleChange}/>
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
                                <LabelInputText type="text" label="SIC Description" input="" inputName="clientIndustryDetailSICDescription" value={addApplication.clientIndustryDetailSICDescription} valueChange={handleChange}/>
                                <LabelInputText type="text" label="SIC code" input="" inputName="clientIndustryDetailSICCode" value={addApplication.clientIndustryDetailSICCode} valueChange={handleChange}/>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="NAICS Description" input="" inputName="clientIndustryDetailNAICSDescription" value={addApplication.clientIndustryDetailNAICSDescription} valueChange={handleChange}/>
                                <LabelInputText type="text" label="NAICS code" input="" inputName="clientIndustryDetailNAICSCode" value={addApplication.clientIndustryDetailNAICSCode} valueChange={handleChange}/>
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
                                <LabelInputText type="text" label="Date Business Started" input="" inputName="clientBusinessDetailDateBussinessStarted" value={addApplication.clientBusinessDetailDateBussinessStarted} valueChange={handleChange}
                                />
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Length of Ownership" input="" inputName="clientBusinessDetailLengthOfOwnership" value={addApplication.clientBusinessDetailLengthOfOwnership} valueChange={handleChange}
                                    />
                                    <LabelInputText type="text" label="Incorporation Date" input="" inputName="clientBusinessDetailIncorporationState" value={addApplication.clientBusinessDetailIncorporationState} valueChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Gross Monthly Sales" input="" inputName="clientIndustryDetailSICDescription" value={addApplication.clientBusinessDetailGrossMonthlySales} valueChange={handleChange}
                                />
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Incorporation State" input="" inputName="clientBusinessDetailIncorporationState" value={addApplication.clientBusinessDetailIncorporationState} valueChange={handleChange}
                                    />
                                    <LabelInputText type="text" label="Type of Business Entity" input="" inputName="clientIndustryDetailSICDescription" value={addApplication.clientBusinessDetailAddresses} valueChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="EIN Number" input="" inputName="clientBusinessDetailEINNumber" value={addApplication.clientBusinessDetailEINNumber} valueChange={handleChange}
                                />
                                <LabelInputText type="text" label="Addresses" input="" inputName="clientBusinessDetailAddresses" value={addApplication.clientBusinessDetailAddresses} valueChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                ISO INFORMATION
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Referring ISO" input="" inputName="clientISOInfoReferringISO" value={addApplication.clientISOInfoReferringISO} valueChange={handleChange}/>
                                <LabelInputText type="text" label="ISO Sales Rep" input="" inputName="clientBusinessDetailDateBussinessStarted" value={addApplication.clientISOInfoReferringISO} valueChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="text-center py-[0.6rem] border-b-2 border-[#D0D5DD] bg-[#F2FBFF]">
                        <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                            BANKING DETAILS
                        </h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                CREDIT CARD DETAILS
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Debit / Credit" input=""/>
                                <LabelSelectInput label="Card Type*" option="1"/>
                                <LabelInputText type="text" label="Card Issuer" input="" />
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Name On Card*" input=""/>
                                <LabelInputText type="text" label="Card Number*" input="" />
                                <LabelSelectInput label="Expiration Date" option="1"/>
                                <LabelInputText type="text" label="CVV" input="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                Billing Info
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <LabelInputText type="text" label="Address" input=""/>
                                    <LabelInputText type="text" label="Address 2" input="" />
                                </div>
                                <LabelInputText type="text" label="City" input="" />
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <div className="flex justify-content gap-8 w-[50%]">
                                    <LabelSelectInput label="State" option="1"/>
                                    <LabelInputText type="text" label="ZIP Code" input="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                BANK DETAILS
                            </h3>
                            <FiEdit2 />
                        </div>
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Routing Number*" input=""/>
                                <LabelInputText type="text" label="Account Number*" input="" />
                                <LabelInputText type="text" label="Bank Name" input="" />
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelSelectInput label="Account Type" option="1"/>
                                <LabelInputText type="text" label="Holder Name" input="" />
                                <LabelInputText type="text" label="Account Holder Address" input="" />
                            </div>
                            <div className="flex justify-content gap-8 w-[100%]">
                                <LabelInputText type="text" label="Account Holder City" input=""/>
                                <LabelSelectInput label="Account Holder State*" option=""/>
                                <LabelInputText type="text" label="Account Holder ZIP Code*" input="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}