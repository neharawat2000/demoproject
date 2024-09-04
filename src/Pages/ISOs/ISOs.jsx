import React from "react";
import Slidebar from "../../Component/Slidebar/Slidebar";
import Header from "../../Component/Header/Header";
import { Link } from "react-router-dom";
import ReuseTable from "../../Component/Table/ReuseTable";
import { GoDotFill } from "react-icons/go";

export default function ISOs(){
    const columns = [ "id","name","total Amt Funded","region","iso Manager","activity","date Created"];

    const data = [
        {
          "id": "3066",
          "name": "abc",
          "total Amt Funded": "$778.35",
          "region": "-",
          "iso Manager": "abc",
          "iso Manager Email": "abc@gmail.com",
          "activity": "Active",
          "date Created": "October 30, 2012"
        },
        {
          "id": "3065",
          "name": "abc",
          "total Amt Funded": "$601.13",
          "region": "-",
          "iso Manager": "abc",
          "iso Manager Email": "abc@gmail.com",
          "activity": "Inactive",
          "date Created": "October 30, 2012"
        },
        {
          "id": "3064",
          "name": "abc",
          "total Amt Funded": "$293.01",
          "region": "-",
          "iso Manager": "bccd",
          "iso Manager Email": "bccd@gmail.com",
          "activity": "Active",
          "date Created": "October 30, 2012"
        },
        {
          "id": "3063",
          "name": "abc",
          "total Amt Funded": "$219.78",
          "region": "-",
          "iso Manager": "abc",
          "iso Manager Email": "abc@gmail.com",
          "activity": "Active",
          "date Created": "October 30, 2012"
        },
        {
          "id": "3062",
          "name": "cdb",
          "total Amt Funded": "$202.87",
          "region": "-",
          "iso Manager": "abd",
          "iso Manager Email": "abd@gmail.com",
          "activity": "Active",
          "date Created": "October 30, 2012"
        },
        {
          "id": "3061",
          "name": "abc",
          "total Amt Funded": "$767.50",
          "region": "-",
          "iso Manager": "cdb",
          "iso Manager Email": "cdb@gmail.com",
          "activity": "Inactive",
          "date Created": "October 30, 2012"
        },
        {
          "id": "3058",
          "name": "abc",
          "total Amt Funded": "$450.54",
          "region": "-",
          "iso Manager": "gdf",
          "iso Manager Email": "gdf@gmail.com",
          "activity": "Active",
          "date Created": "October 30, 2012"
        },
        {
          "id": "3057",
          "name": "abc",
          "total Amt Funded": "$599.99",
          "region": "-",
          "iso Manager": "dbf",
          "iso Manager Email": "dbf@gmail.com",
          "activity": "Active",
          "date Created": "October 30, 2012"
        },
        {
            "id": "3064",
            "name": "abc",
            "total Amt Funded": "$293.01",
            "region": "-",
            "iso Manager": "bccd",
            "iso Manager Email": "bccd@gmail.com",
            "activity": "Active",
            "date Created": "October 30, 2012"
          },
          {
            "id": "3063",
            "name": "abc",
            "total Amt Funded": "$219.78",
            "region": "-",
            "iso Manager": "abc",
            "iso Manager Email": "abc@gmail.com",
            "activity": "Active",
            "date Created": "October 30, 2012"
          },
          {
            "id": "3062",
            "name": "cdb",
            "total Amt Funded": "$202.87",
            "region": "-",
            "iso Manager": "abd",
            "iso Manager Email": "abd@gmail.com",
            "activity": "Active",
            "date Created": "October 30, 2012"
          },
    ];
    const processedData = data.map(item => ({
        ...item,
        "id":(<div className="flex gap-2">
          <input type="checkbox"/> <span >{item.id}</span> 
        </div>),
        "activity":
        (<div className="flex gap-2 items-center border border-[#D0D5DD] rounded-lg w-[100px] px-[0.5rem] py-[0.2rem] shadow-sm">
            <GoDotFill className={item.activity==="Active"? "text-[#58B08F]": "text-[#FF2A2A]"}/><span>{item.activity}</span>
        </div>),
        "iso Manager": (<div className="flex flex-col gap-2">
          <span className="text-[#101828] font-[600]">{item["iso Manager"]}</span>
          <span  className="text-[#667085]">{item["iso Manager Email"]}</span> 
        </div>),
    }));

    return(
        <>
            <Slidebar/>
            <div className='mainContainer'>
                <Header title="ISO (s)" option=""/>
                <div className="flex flex-col gap-6 w-[95%]">
                    <div className="flex justify-between items-center w-[100%] ">
                        <h4 className="text-[#353333] text-[1.1rem] font-[500] leading-[28.5px]">ISO</h4>
                        <div className="flex gap-2 items-center">
                            <Link to="/isos/add-iso/general-info">
                                <button 
                                className="bg-[#4AACD5] text-[0.9rem] text-white rounded-2xl px-[1rem] py-[0.2rem]"
                                >Add ISO</button>
                            </Link>
                            <button 
                                className="bg-[#4AACD5] text-[0.9rem] text-white rounded-2xl px-[1rem] py-[0.2rem]"
                                >Delete ISO(s)</button>
                            {/* <Link to="/syndicators/edit-syndicator">
                                <button 
                                className="bg-[#4AACD5] text-[0.9rem] text-white rounded-2xl px-[1rem] py-[0.2rem]"
                                >Delete ISO(s)</button>
                            </Link> */}
                        </div>
                    </div>
                    <ReuseTable columns={columns} data={processedData} />
                </div>
            </div>
        </>
    );
}