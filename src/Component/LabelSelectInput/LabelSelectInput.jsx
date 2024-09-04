import React from "react";

export default function LabelSelectInput(props){
    return(
        <>
            <div className="flex relative w-[100%]">
                <label 
                className="text-[#344054] text-[0.95rem] font-[400] absolute top-[-0.8rem] left-[1rem] px-[0.2rem] bg-white">
                    {props.label}
                </label>
                <select name="pets" id="pet-select" 
                className="border border-[#D0D5DD] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[#F9FAFB] px-[1rem] outline-none text-[1rem]">
                    <option value="" className="h-[2.8rem] w-[100%] text-[#707070] bg-[#F9FAFB] px-[1rem] py-[0.8rem] outline-none text-[1rem]">
                        {props.option}
                    </option>
                </select>
            </div>
        </>
    );
}
