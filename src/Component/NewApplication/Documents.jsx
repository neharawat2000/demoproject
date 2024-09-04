import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { LuUploadCloud } from "react-icons/lu";
import axios from "axios";
import SmallTables from "../Table/SmallTables";

export default function Documents({onFileUpload, uploadedFiles}){
    const [filename, setFilename] = useState("No file selected");
    const [uploadFile, setUploadFile]=useState({
        filename: " ", 
        isodoc_id: " ", 
        updatedTime: " "
    });
    const [selectedFile, setSelectedFile] = useState(null);
    useEffect(() => {
        if (!selectedFile) {
            setFilename("No file selected");
        }
    }, [selectedFile]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]); // Store the selected file
    };

    const columns = ["file name","associated stipulation","created by","created date", "action"];
    const data = [];
    const columns2 = ["file name","created by","created date"];
    const data2=[];

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file to upload");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile); // Append the file to the FormData
        try {
            const response = await axios.post("https://hfh-server.onrender.com/applicaƟon/uploads", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.status === 200) {
                alert("File uploaded successfully");
                const uploadedAt = new Date().toLocaleString();
                const data = response.data
                // setUploadFile(response.data); // Update the uploadFile state with response data
                const newFileData={
                    filename:selectedFile.name,
                    docid:data.isodoc_id,
                    uploadedAt:uploadedAt
                };
                onFileUpload(newFileData);
                setSelectedFile("")
            }
        } catch (error) {
            console.error("Error uploading file", error);
        }
    }
    const processedData=uploadedFiles.map((file)=>({
        "File Name":file.filename,
        "Upload Date":file.uploadedAt,
    }))

    return(
        <>
            <div className="flex flex-col gap-4 w-[95%]">
                <div className="flex flex-col gap-10 mb-[2.5rem] w-[100%]">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between w-[100%] ">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                MANUALLY UPLOADED
                            </h3>
                            <button 
                            className="flex gap-2 bg-[#4AACD5] text-[0.9rem] items-center text-white px-[1.2rem] py-[0.3rem]">
                                <LuUploadCloud className="text-[1.2rem]"/> Upload
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <SmallTables columns={columns} data={data}/>
                            <div className="h-[80px]  w-[100%]  text-center border-b border-[#EAECF0]">No record found</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between  w-[100%]">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                SYSTEM GENERATED
                            </h3>
                            <div className="flex gap-4">
                                <input type="file" onChange={handleFileChange} /> {/* Add file input */}
                                <button
                                    onClick={handleUpload}
                                    type="button"
                                    className="flex gap-2 bg-[#4AACD5] text-[0.9rem] items-center text-white px-[1.2rem] py-[0.3rem]"
                                >
                                    <LuUploadCloud className="text-[1.2rem]" /> Upload
                                </button>
                                {/* <button onClick={handleUpload}
                                className="flex gap-2 bg-[#4AACD5] text-[0.9rem] items-center text-white px-[1.2rem] py-[0.3rem]">
                                    <LuUploadCloud className="text-[1.2rem]"/> Upload
                                </button> */}
                                {/* <button type="submit"
                                className="flex gap-2 bg-[#4AACD5] text-[0.9rem] items-center text-white px-[1.2rem] py-[0.3rem]">
                                    <LiaSaveSolid className="text-[1.2rem]"/> Save
                                </button> */}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <SmallTables columns={columns2} data={processedData}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}