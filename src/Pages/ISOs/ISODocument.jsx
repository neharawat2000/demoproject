import React, { useState ,useEffect } from "react";
import { LuUploadCloud } from "react-icons/lu";
import SmallTables from "../../Component/Table/SmallTables";
import { CiFileOn } from "react-icons/ci";
import { LiaSaveSolid } from "react-icons/lia";
import axios from "axios";

export default function ISODocument({onFileUpload,uploadedFiles}){
    // const columns = ["file name","associated stipulation","created by","created date", "action"];
    const columns = ["File Name","Upload Date"];
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

    // const data = [
    //   {
    //     "file name": "Checking account.pdf",
    //     "filesize":"720 KB",
    //     "associated stipulation": "n/a",
    //     "created by": "abc",
    //     "created date": "Jul 13, 2023",
    //     "action": "Open",
    //     "isDownload": "Downloaded",
    //     "associatedto": "Associated to stipulation",
    //     "delete":"Delete"
    //   },
    //   {
    //     "file name": "Checking account.pdf",
    //     "filesize":"720 KB",
    //     "associated stipulation": "n/a",
    //     "created by": "abc",
    //     "created date": "Jul 13, 2023",
    //     "action": "Open",
    //     "isDownload": "Downloaded",
    //     "associatedto": "Associated to stipulation",
    //     "delete":"Delete"
    //   }
    // ];
    // const processedData = data.map(item => ({
    //     ...item,
    //     "file name":(
    //     <div className="flex gap-2 items-center">
    //         <div className="bg-[#DFF5FF] h-[40px] rounded-full w-[45px] flex items-center justify-center">
    //             <CiFileOn className="text-[1.2rem] font-[700] text-[#A8E0F8]"/>
    //         </div>
    //         <div className="flex flex-col w-[auto]">
    //             <span>{item["file name"]}</span>
    //             <span>{item.filesize}</span>
    //         </div>
    //     </div>),
    //     "action":(
    //     <div className="flex gap-2">
    //         <span>{item.action}</span>
    //         <span>{item.isDownload}</span>
    //         <span className="text-[#4AACD5]">{item.associatedto }</span>
    //         <span className="text-[#F04438]">{item.delete}</span>
    //     </div>)
    // }));

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]); // Store the selected file
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file to upload");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile); // Append the file to the FormData
        try {
            const response = await axios.post("https://hfh-server.onrender.com/file/upload", formData, {
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

    // const handleUpload= async ()=>{
    //     console.log("click");
    //     try {
    //         const response = await axios.post("https://hfh-server.onrender.com/file/upload", uploadFile);
    //         if(response.status=== 201){
    //             alert("upload sucessfully");
    //             setUploadFile(response.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <>
            <div className="flex flex-col gap-4 w-[100%]" id="document">
                <div className="flex flex-col gap-10 mb-[2.5rem] w-[100%]">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between  w-[100%] ">
                            <h3 
                            className="text-[#353333] text-[1.2rem] font-[500]">
                                MANUALLY UPLOADED
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
                        <SmallTables columns={columns} data={processedData}/>
                    </div>
                </div>
            </div>
        </>
    );
}