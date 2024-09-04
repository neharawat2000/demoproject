import React, {useState} from "react";
import "../../Style/Table/table.css";
import Pagination from "../Pagination/Pagination";
import { CiFileOn } from "react-icons/ci";

export default function UserIsoTable() {
    const data =
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const dataTitle = [
        "ID",
        "Advance Type",
        "Type",
        "Amount",
        "Payment",
        "Freq",
        "Payback",
        "Factor",
        "Payback Period"
      ];

    // Calculate the indexes for slicing data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Pagination controls
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    
    return (
        <>
            <table className="mb-[1rem] mt-[0.5rem] w-[100%]">
                <thead>
                    <tr>
                        {dataTitle.map((title, index) => (
                            <th key={index} className="bg-[#E1F1F8]">{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.advanceType}</td>
                                <td>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>{item.payment}</td>
                                <td>{item.freq}</td>
                                <td>{item.payback}</td>
                                <td>{item.factor}</td>
                                <td>{item.paybackPeriod}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </>
    );
}
