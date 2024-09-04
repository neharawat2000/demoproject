import React, { useState } from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import LabelInputText from "../../Component/LabelInputText/LabelInputText";
import axios from 'axios';
import { FiEdit2 } from "react-icons/fi";
import ISODocument from "./ISODocument";
import { useSelector } from "react-redux";

export default function AddISO() {
    const initialValues = {
        ISOname: "",
        Region: "",
        WorkPhone: "",
        CellPhone: "",
        ISOManager: "",
        OwnerFirstName: "",
        OwnerLastName: "",
        OwnerEmail: "",
        OwnerWorkPhone: "",
        OwnerCellPhone: "",
        RepaymentFirstName: "",
        RepaymentLastName: "",
        RepaymentEmail: "",
        RepaymentWorkPhone: "",
        RepaymentCellPhone: "",
        RepaymentAddress: ""
    };

    const [addISO, setAddISO] = useState(initialValues);
    const [uploadedFiles,setUploadedFile]=useState([])
    const [statusFilter, setStatusFilter] = useState("General Info");
    const AgentUID = useSelector(state=>state.user.uid)

    const filtermenu = ["General Info", "Documents"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddISO(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data={
            AgentUID,
            ...addISO,
            files:uploadedFiles
        }
        console.log(data)
        try {
            const response = await axios.post('http://localhost:8000/add-iso', data);
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

    return (
        <>
            <Slidebar />
            <div className='mainContainer'>
                <Header title="ISO" option="Infinity Contracting" />
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

                <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 w-[95%]">
                    {statusFilter === "General Info" ? (
                        <>
                            <div className="flex flex-col gap-8 w-[100%]">
                                <div className="flex justify-between">
                                    <h4 className="text-[#353333] text-[1.2rem] font-[500]">DETAILS</h4>
                                    <div className="flex gap-10 items-center">
                                        <FiEdit2 />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 justify-between">
                                    <div className="flex justify-between gap-4">
                                        <LabelInputText type="text" label="ISO Name" input="" inputName="ISOname" value={addISO.ISOname} valueChange={handleChange} />
                                        <LabelInputText type="text" label="Region" input="" inputName="Region" value={addISO.Region} valueChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <LabelInputText type="text" label="Work Phone" input="" inputName="WorkPhone" value={addISO.WorkPhone} valueChange={handleChange} />
                                        <LabelInputText type="text" label="Cell Phone" input="" inputName="CellPhone" value={addISO.CellPhone} valueChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between gap-4 w-[48.5%]">
                                        <LabelInputText type="text" label="ISO Manager" input="" inputName="ISOManager" value={addISO.ISOManager} valueChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 w-[100%]">
                                <div className="flex justify-between">
                                    <h4 className="text-[#353333] text-[1.2rem] font-[500]">OWNER CONTACT</h4>
                                    <FiEdit2 />
                                </div>
                                <div className="flex flex-col gap-6 justify-between">
                                    <div className="flex justify-between gap-4">
                                        <LabelInputText type="text" label="First Name" input="" inputName="OwnerFirstName" value={addISO.OwnerFirstName} valueChange={handleChange} />
                                        <LabelInputText type="text" label="Last Name" input="" inputName="OwnerLastName" value={addISO.OwnerLastName} valueChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <LabelInputText type="email" label="Email" input="" inputName="OwnerEmail" value={addISO.OwnerEmail} valueChange={handleChange} />
                                        <LabelInputText type="text" label="Work Phone" input="" inputName="OwnerWorkPhone" value={addISO.OwnerWorkPhone} valueChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between gap-4 w-[48.5%]">
                                        <LabelInputText type="text" label="Cell Phone" input="" inputName="OwnerCellPhone" value={addISO.OwnerCellPhone} valueChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 w-[100%]">
                                <div className="flex justify-between">
                                    <h4 className="text-[#353333] text-[1.2rem] font-[500]">REPAYMENT PLAN</h4>
                                    <FiEdit2 />
                                </div>
                                <div className="flex flex-col gap-6 justify-between">
                                    <div className="flex justify-between gap-4">
                                        <LabelInputText type="text" label="First Name" input="" inputName="RepaymentFirstName" value={addISO.RepaymentFirstName} valueChange={handleChange} />
                                        <LabelInputText type="text" label="Last Name" input="" inputName="RepaymentLastName" value={addISO.RepaymentLastName} valueChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <LabelInputText type="email" label="Email" input="" inputName="RepaymentEmail" value={addISO.RepaymentEmail} valueChange={handleChange} />
                                        <LabelInputText type="text" label="Work Phone" input="" inputName="RepaymentWorkPhone" value={addISO.RepaymentWorkPhone} valueChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <LabelInputText type="text" label="Cell Phone" input="" inputName="RepaymentCellPhone" value={addISO.RepaymentCellPhone} valueChange={handleChange} />
                                        <LabelInputText type="text" label="Address" input="" inputName="RepaymentAddress" value={addISO.RepaymentAddress} valueChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <button type="button"
                                onClick={()=>setStatusFilter("Documents")}
                                className="bg-[#4AACD5] text-[0.9rem] text-white px-[1.5rem] py-[0.3rem]"
                            >
                                Next
                            </button>
                        </>
                    ) : (
                        <ISODocument onFileUpload={handleFileUpload} uploadedFiles={uploadedFiles} />
                    )}
                    {statusFilter === "Documents" && (
                        <button
                        type="submit"
                        className="bg-[#4AACD5] text-[0.9rem] text-white px-[1.5rem] py-[0.3rem]"
                        >Submit ISO</button>
                    )}
                </form>
            </div>
        </>
    );
}
