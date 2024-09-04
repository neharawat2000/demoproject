// src/components/Table.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../../Style/Table/table.css";

const statusStyles = {
  "Paid Off": { color: "#58B08F", backgroundColor: "#58B08F1F" },
  "Due": { color: "#9E8DCF", backgroundColor: "#6400CD0A" },
  "Overdue": { color: "#4AACD5", backgroundColor: "#DFF5FF" },
  "Issue": { color: "#CE721E", backgroundColor: "#B097581F" },
};
const SmallTables = ({ columns, data }) => {
  return (
    <>
      <table>
            <thead>
            <tr>
                {columns.map((column) => (
                <th className='bg-[#EAECF0]' key={column}>{column.toUpperCase()}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
            <tr key={index}>
                {columns.map((column) => (
                <td key={column}>
                    {
                    column==="file name" ? <span >{row[column]}</span>:
                    column==="action" ? <span>{row[column]}</span> : row[column]
                  }
                </td>
                ))}
            </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

SmallTables.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SmallTables;
