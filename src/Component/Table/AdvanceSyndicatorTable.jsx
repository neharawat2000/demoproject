import React, {useState} from "react";
import "../../Style/Table/table.css";
import Pagination from "../Pagination/Pagination";
import { CiFileOn } from "react-icons/ci";

export default function AdvanceSyndicatorTable() {
    const data = [
            {
              id: "3066",
              name: "Premium Capital",
              totalAmtFunded: "$778.35",
              region: "-",
              isoManager: "Olivia Rhye",
              isoManagerEmail: "olivia@untitledui.com",
              activity: "active",
              dateCreated: "October 30, 2012"
            },
            {
              id: "3065",
              name: "Candy Capital",
              totalAmtFunded: "$601.13",
              region: "-",
              isoManager: "Phoenix Boker",
              isoManagerEmail: "phoenix@untitledui.com",
              activity: "not active",
              dateCreated: "October 30, 2012"
            },
            {
              id: "3064",
              name: "Premium Capital",
              totalAmtFunded: "$293.01",
              region: "-",
              isoManager: "Lana Stainer",
              isoManagerEmail: "lana@untitledui.com",
              activity: "active",
              dateCreated: "October 30, 2012"
            },
            {
              id: "3063",
              name: "Candy Capital",
              totalAmtFunded: "$219.78",
              region: "-",
              isoManager: "Demi Wlkinson",
              isoManagerEmail: "demi@untitledui.com",
              activity: "active",
              dateCreated: "October 30, 2012"
            },
            {
              id: "3062",
              name: "Label Capital",
              totalAmtFunded: "$202.87",
              region: "-",
              isoManager: "Candice Wu",
              isoManagerEmail: "candice@untitledui.com",
              activity: "active",
              dateCreated: "October 30, 2012"
            },
            {
              id: "3061",
              name: "Premium Capital",
              totalAmtFunded: "$767.50",
              region: "-",
              isoManager: "Natali Craig",
              isoManagerEmail: "natali@untitledui.com",
              activity: "not active",
              dateCreated: "October 30, 2012"
            },
            {
              id: "3058",
              name: "Candy Capital",
              totalAmtFunded: "$450.54",
              region: "-",
              isoManager: "Andi Lane",
              isoManagerEmail: "andi@untitledui.com",
              activity: "active",
              dateCreated: "October 30, 2012"
            },
            {
              id: "3057",
              name: "Candy Capital",
              totalAmtFunded: "$599.99",
              region: "-",
              isoManager: "Kate Morrision",
              isoManagerEmail: "kate@untitledui.com",
              activity: "active",
              dateCreated: "October 30, 2012"
            } 
    ];
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const dataTitle = ["ID", "Name", "Total Amount Funding", "Region", "ISO Manager", "Activity", "Date Created"];

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
                    {currentData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                  <span className="flex gap-2 items-center"><input type="checkbox" />{item.id}</span>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.totalAmtFunded}</td>
                                <td>{item.region}</td>
                                <td className="w-[300px]">
                                  <span className="flex flex-col gap-2">
                                    <span className="font-[600]">{item.isoManager}</span>
                                    <span>{item.isoManagerEmail}</span>
                                  </span>
                                </td>
                                <td>{item.activity}</td>
                                <td>{item.dateCreated}</td>
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
