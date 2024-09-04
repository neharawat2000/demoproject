import React, {useState} from "react";
import "../../Style/Table/table.css";
import Pagination from "../Pagination/Pagination";

export default function ListingPageTable() {
    const data = [
        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Funded" 
        },
        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Miles, Esther",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Underwriting" 
        },
        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Nguyen, Shane",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Underwriting Queue" 
        },
        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Black, Marvin",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Contracts Sent" 
        },
        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Declined" 
        },
        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Disclosure Sent" 
        },
        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/34",
            status: "Offer Applied" 
        },

        {
            id: "00001",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Funded" 
        },
        {
            id: "0002",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Miles, Esther",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Underwriting" 
        },
        {
            id: "0003",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Nguyen, Shane",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Underwriting Queue" 
        },
        {
            id: "0004",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Black, Marvin",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Contracts Sent" 
        },
        {
            id: "0005",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Declined" 
        },
        {
            id: "0006",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/24",
            status: "Disclosure Sent" 
        },
        {
            id: "0007",
            client: "Infinity Coneacting, INC",
            email: "olivia@contracting.com",
            assignedTo: "Samuel Jefferson",
            refferingIso: "Sheks Capital",
            lastUpdate: "24/06/34",
            status: "Offer Applied" 
        }
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const dataTitle = ["ID", "CLIENT", "REFERRING ISO", "ASSIGNED TO", "LAST UPDATE", "STATUS"];

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
                            <th key={index} className="bg-[#E6F4F9]">{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className="w-[300px]">
                                    <span className="inline-block text-[#101828]">{item.client}</span>
                                    <span className="text-[#667085]">{item.email}</span>
                                </td>
                                <td>{item.refferingIso}</td>
                                <td>{item.assignedTo}</td>
                                <td>{item.lastUpdate}</td>
                                <td className="w-[auto] text-[0.8rem]">
                                    <span
                                        className="px-[1rem] py-[0.2rem] rounded-3xl font-[500]"
                                        style={
                                            item.status === "Funded" ? { color: "#58B08F", backgroundColor: "#58B08F1F" }
                                            : item.status === "Underwriting" ? { color: "#9E8DCF", backgroundColor: "#6400CD0A" }
                                            : item.status === "Underwriting Queue" ? { color: "#4AACD5", backgroundColor: "#DFF5FF" }
                                            : item.status === "Contracts Sent" ? { color: "#CE721E", backgroundColor: "#B097581F" }
                                            : item.status === "Disclosure Sent" ? { color: "#37B3E8", backgroundColor: "#7BC7FF1F" }
                                            : item.status === "Offer Applied" ? { color: "#CE721E", backgroundColor: "#B097581F" }
                                            : item.status === "Declined" ? { color: "#434343", backgroundColor: "#69736F1F" }
                                            : {}
                                        }
                                    >
                                        {item.status}
                                    </span>
                                </td>
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