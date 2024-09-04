import React, {useState} from "react";
import "../../Style/Table/table.css";
import Pagination from "../Pagination/Pagination";
import { CiFileOn } from "react-icons/ci";

export default function AdvanceTable2() {
    const data =[
        {
          activity: "active",
          id: "23133",
          companyName: "Premium Capital",
          parentCompany: "",
          city: "",
          phone: "",
          email: "olivia@untitledui.com",
          companyType: "Service Company"
        },
        {
          activity: "active",
          id: "23133",
          companyName: "Candy Capital",
          parentCompany: "",
          city: "",
          phone: "",
          email: "olivia@untitledui.com",
          companyType: "Service Company"
        },
        {
          activity: "active",
          id: "23133",
          companyName: "Premium Capital",
          parentCompany: "",
          city: "",
          phone: "",
          email: "olivia@untitledui.com",
          companyType: "Service Company"
        },
        {
          activity: "active",
          id: "23133",
          companyName: "Candy Capital",
          parentCompany: "",
          city: "",
          phone: "",
          email: "olivia@untitledui.com",
          companyType: "Service Company"
        },
        {
            activity: "active",
            id: "23133",
            companyName: "Premium Capital",
            parentCompany: "",
            city: "",
            phone: "",
            email: "olivia@untitledui.com",
            companyType: "Service Company"
          },
          {
            activity: "active",
            id: "23133",
            companyName: "Candy Capital",
            parentCompany: "",
            city: "",
            phone: "",
            email: "olivia@untitledui.com",
            companyType: "Service Company"
          },
          {
            activity: "active",
            id: "23133",
            companyName: "Premium Capital",
            parentCompany: "",
            city: "",
            phone: "",
            email: "olivia@untitledui.com",
            companyType: "Service Company"
          },
          {
            activity: "active",
            id: "23133",
            companyName: "Candy Capital",
            parentCompany: "",
            city: "",
            phone: "",
            email: "olivia@untitledui.com",
            companyType: "Service Company"
          }
      ]
      
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    
    const dataTitle = ["Activity","ID","Company Name","City","Email","Company Type"];

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
                                <td>{item.activity}</td>
                                <td>{item.id}</td>
                                <td className="w-[200px]">{item.companyName}</td>
                                <td>{item.city}</td>
                                <td className="w-[300px]">{item.email}</td>
                                <td>{item.companyType}</td>
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
