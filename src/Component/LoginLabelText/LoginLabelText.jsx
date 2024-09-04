import React from 'react'

export default function LoginLabelText(props) {
    return(
        <>
            <div className="flex flex-col gap-2 w-[100%]">
                <label>{props.label}</label>
                <input
                    name={props.name}
                    type= {props.type}
                    value={props.value}
                    onChange={props.valueChange}
                    className="border border-[#D0D5DD] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[#F9FAFB] px-[1rem] py-[0.8rem] outline-none text-[1rem]"
                    required
                />
                
            </div>
        </>
    );
}
