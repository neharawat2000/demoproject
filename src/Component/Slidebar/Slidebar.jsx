import React from "react";
import "../../Style/slidebar/slidebar.css";

import { TbLayoutDashboard } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/action";

export default function Slidebar(props){

    const navigate= useNavigate();

    const menuLists= [
        {
            path:"/dashboard",
            name:'Dashboard'
        },
        {
            path:"/application",
            name:'Applications'
        },
        {
            path:"/portfolio",
            name:'Portfolio'
        },
        // {
        //     path:"/syndicators/overview",
        //     name:'Syndicators'
        // },
        {
            path:"/isos",
            name:'ISOs'
        }
    ];

    const handleLogout=()=>{
        localStorage.clear()
        setUser(null)
        navigate("/");
    }

    return(
        <nav>
            <div className="slidebar-menu">
                <div>
                    {/* <img src={logo} alt="logo" className="h-[30px] w-[165px] mt-[1.5rem] mb-[1rem]"/> */}
                    <div className="flex font-[800] text-[#101828] text-[2.5rem] items-center italic">HFH</div>
                    {/* <div className="beta">{props.beta}</div> */}
                </div>
                <div className="box">
                    <div className="first">
                        {
                            menuLists.map((menuList, index)=>{
                                return(
                                    <NavLink key={index} to= {menuList.path} style={({ isActive }) => ({
                                        color: isActive ? "#0F475F" : "#262525", 
                                        backgroundColor: isActive ? "#DFF5FF" : "transparent",
                                        borderRadius:"5px"
                                    })}>
                                        <TbLayoutDashboard className="icon"/>
                                        <span>{menuList.name}</span>
                                    </NavLink>
                                );
                            })
                        }
                    </div>
                    <div className="end">
                        <NavLink to= "/setting" style={({ isActive }) => ({
                            color: isActive ? "#0F475F" : "#262525", 
                            backgroundColor: isActive ? "#DFF5FF" : "transparent",borderRadius:"5px"
                        })}>
                            <TbLayoutDashboard className="icon"/><span>Settings</span>
                        </NavLink>
                        <button 
                         onClick={handleLogout}
                        className="flex gap-6 items-center font-[500] pl-[0rem] px-[1rem] py-[0.5rem] justify-center text-[#262525] bg-[transparent] hover:bg-[#DFF5FF] hover:text-[#0F475F] rounded-lg"
                        // style={{
                        //     color: isActive ? "#0F475F" : "#262525",
                        //     backgroundColor: isActive ? "#DFF5FF" : "transparent",
                        //   }}
                         >
                            <TbLayoutDashboard className="text-[1.5rem]"/><span>Log out</span>
                        </button>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}
