import React,{useState} from "react";
import "../../Style/Table/table.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination(props) {
    return(
        <>
            <div className="pagination">
                <button className="arrow-btn"
                    onClick={() => props.handlePageChange(props.currentPage - 1)}
                    disabled={props.currentPage === 1}
                >
                    <FaArrowLeft /> Previous
                </button>
                <div>
                    {[...Array(props.totalPages).keys()].map((number) => (
                        <button
                            key={number + 1}
                            onClick={() => props.handlePageChange(number + 1)}
                            className={props.currentPage === number + 1 ? "active" : ""}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>
                <button className="arrow-btn"
                    onClick={() => props.handlePageChange(props.currentPage + 1)}
                    disabled={props.currentPage === props.totalPages}
                >
                   Next <FaArrowRight />
                </button>
            </div>
        </>
    );
}