// src/components/Table.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination';
import "../../Style/Table/table.css";

const statusStyles = {
  "Paid Off": { color: "#58B08F", backgroundColor: "#58B08F1F" },
  "Due": { color: "#1E8EBE", backgroundColor: "#DFF5FF" },
  "Overdue": { color: "#9A9404", backgroundColor: "#B0AC581F" },
  "Issue": { color: "#FF2A2A", backgroundColor: "#B058581F" },

  "Funded": { color: "#58B08F", backgroundColor: "#58B08F1F" },
  "Rejected": { color: "#FF2A2A", backgroundColor: "#B058581F" },
  "Approved": { color: "#1E8EBE", backgroundColor: "#DFF5FF" },
  "In Process": { color: "#9A9404", backgroundColor: "#B0AC581F" },

  "Paid Off" : { color: "#1E8EBE", backgroundColor: "#DFF5FF" },
  "Healthy" : { color: "#58B08F", backgroundColor: "#58B08F1F" },
  "Slow Pay" : { color: "#9A9404", backgroundColor: "#B0AC581F" },

};

const ReuseTable = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th className='bg-[#E6F4F9]' key={column}>{column.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column} className={column==='client' ? 'w-[250px]' : ''}
                >
                  {
                    column === 'status' ?
                    <span className="px-[1rem] py-[0.2rem] rounded-3xl font-[500]" style={column === 'status' ? statusStyles[row[column]] : {}}>{row[column]}</span>:
                    column==='client' ? <span>{row[column]}</span> :
                    row[column]
                  }
                  
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

ReuseTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReuseTable;
