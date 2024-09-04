// import React, {useState} from "react";
// import "../../Style/Table/table.css";
// import Pagination from "../Pagination/Pagination";
// import { CiFileOn } from "react-icons/ci";

// export default function FundingDataTable() {
//     const data = [
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Paid Off" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Healthy" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Slow Pay" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Payment Issue" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Paid Off" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Healthy" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Slow Pay" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Payment Issue" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Paid Off" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Healthy" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Slow Pay" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Payment Issue" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Paid Off" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Healthy" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Slow Pay" 
//         },
//         {
//             "date Created":"May 20, 2015",
//             "funding Date":"May 20, 2015",
//             "funding Amt":"$202.87",
//             "payback Amt":"$202.87",
//             "payment Frequency":"$202.87",
//             "payment Amt":"$202.87",
//             "status": "Payment Issue" 
//         },
//     ];
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 3;

//     // const dataTitle = ["Date Created","Funding Date", "Funding Amt", "Payback Amt", "Payment Frequency", ""payment Amt"",""status"", "Link"];

//     // Calculate the indexes for slicing data
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

//     // Calculate the total number of pages
//     const totalPages = Math.ceil(data.length / itemsPerPage);

//     // Pagination controls
//     const handlePageChange = (pageNumber) => {
//         if (pageNumber > 0 && pageNumber <= totalPages) {
//             setCurrentPage(pageNumber);
//         }
//     };
    
//     return (
//         <>
//             <table className="mb-[1rem] mt-[0.5rem] w-[100%]">
//                 <thead>
//                     <tr>
//                         {dataTitle.map((title, index) => (
//                             <th key={index} className="bg-[#E6F4F9]">{title}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentData.map((item, index) => {
//                         return (
//                             <tr key={index}>
//                                 <td className="w-[200px]" >{item."date Created"}</td>
//                                 <td className="w-[200px]" >{item."funding Date"}</td>
//                                 <td >{item."funding Amt"}</td>
//                                 <td >{item."payback Amt"}</td>
//                                 <td >{item."payment Frequency"}</td>
//                                 <td >{item."payment Amt"}</td>
//                                 <td className="w-[200px] text-[0.8rem]">
//                                     <span
//                                         className="px-[1rem] py-[0.2rem] rounded-3xl font-[500]"
//                                         style={
//                                             item."status" === "Paid Off" ? { color: "#1E8EBE", backgroundColor: "#DFF5FF" }
//                                             : item."status" === "Healthy" ? { color: "#58B08F", backgroundColor: "#58B08F1F" }
//                                             : item."status" === "Slow Pay" ? { color: "#9A9404", backgroundColor: "#B0AC581F" }
//                                             : item."status" === "Payment Issue" ? { color: "#FF2A2A", backgroundColor: "#B058581F" }
//                                             : {}
//                                         }
//                                     >
//                                         {item."status"}
//                                     </span>
//                                 </td>
//                                 <td className="text-center">
//                                     <span>
//                                         <CiFileOn className="text-[#475467] font-[700] text-[1rem]"/>
//                                     </span>
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 handlePageChange={handlePageChange}
//             />
//         </>
//     );
// }