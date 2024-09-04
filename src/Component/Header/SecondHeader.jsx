import React from "react";
import { NavLink } from "react-router-dom";

export default function SecondHeader(props) {

    return(
        <>
            <div className="flex gap-2 mb-[2rem]">
                {
                    props.menuData.map((data, index)=>{
                        return(
                            <NavLink to= {data.path} key={index}
                            style={({ isActive }) => ({
                                color: isActive ? "white" : "#256884", 
                                backgroundColor: isActive ? "#4AACD5" : "transparent",borderRadius:"20px",
                                padding: "0.2rem 1rem",
                                border: isActive ? "0px solid " : "1px solid #E8E8E8" ,
                                fontWeight: isActive ? "600" : "500" 
                            })}>
                                {data.name}
                            </NavLink>
                        );
                    })
                }
            </div>
        </>
    );
}