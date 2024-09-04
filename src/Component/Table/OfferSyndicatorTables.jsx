import React, {useState} from "react";
import "../../Style/Table/table.css";
import Pagination from "../Pagination/Pagination";
import { CiFileOn } from "react-icons/ci";

export default function OfferSyndicatorTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const data=[
        {
            date:"",
            merchant:"",
            amount:"",
            factor:"",
            rate:"",
            minAmt:"",
            maxAmt:"",
            paybackAmt:"",
            termLenght:"",
        },
        {
            date:"",
            merchant:"",
            amount:"",
            factor:"",
            rate:"",
            minAmt:"",
            maxAmt:"",
            paybackAmt:"",
            termLenght:"",
        },
        {
            date:"",
            merchant:"",
            amount:"",
            factor:"",
            rate:"",
            minAmt:"",
            maxAmt:"",
            paybackAmt:"",
            termLenght:"",
        },
        {
            date:"",
            merchant:"",
            amount:"",
            factor:"",
            rate:"",
            minAmt:"",
            maxAmt:"",
            paybackAmt:"",
            termLenght:"",
        },
        {
            date:"",
            merchant:"",
            amount:"",
            factor:"",
            rate:"",
            minAmt:"",
            maxAmt:"",
            paybackAmt:"",
            termLenght:"",
        },
        {
            date:"",
            merchant:"",
            amount:"",
            factor:"",
            rate:"",
            minAmt:"",
            maxAmt:"",
            paybackAmt:"",
            termLenght:"",
        },
        {
            date:"",
            merchant:"",
            amount:"",
            factor:"",
            rate:"",
            minAmt:"",
            maxAmt:"",
            paybackAmt:"",
            termLenght:"",
        },

    ];
    const dataTitle = ["Date", "Merchant", "Amount", "Factar Rate", "% Rate", "Min. Amount","Max. Amount", "Payback Amount", "Term Length"];

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
                            <th key={index} className="bg-[#EAE6F9]">{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.merchant}</td>
                                <td>{item.amount}</td>
                                <td>{item.factor}</td>
                                <td>{item.rate}</td>
                                <td>{item.minAmt}</td>
                                <td>{item.maxAmt}</td>
                                <td>{item.paybackAmt}</td>
                                <td>{item.termLenght}</td>
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