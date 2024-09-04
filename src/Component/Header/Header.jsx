import React, {useState} from "react";
import "../../Style/header/header.css";
import { GoBellFill } from "react-icons/go";
import { LuSettings2 } from "react-icons/lu";
import UserImg from '../../resources/User.png';
import { useSelector } from "react-redux";

export default function Header(props) {
    // const [profile, setProfile]= useState(UserImg);
    const role = useSelector((state) => state.user?.role);

    return(
        <>
        <div className="header border-b border-[#D1D1D1]" >
            <div className="select_menu">
                <span>{props.title}</span>
                <span>/</span>
                {props.option}
                {
                    role==="admin" && props.title==="Applications" ?<span className="ml-1 text-[1rem] bg-[#EDEDED] rounded-xl text-[#8da4ad] px-[0.5rem] py-[0.2rem]">Underwriting</span>:""
                } 
                
            </div>
            <div className="flex gap-16 w-[20rem] pb-[1rem] header-second">
                <div className="flex items-center justify-center text-[1.2rem] bg-[#18333E] rounded-full text-[white] w-[40px] h-[40px]">
                    <LuSettings2 />
                </div>
                <div className="flex items-center justify-center text-[1.2rem] border border-[#C6C6C6] rounded-full w-[40px] h-[40px] text-[#18333E]">
                    <GoBellFill />
                </div>
                <img src={UserImg} alt="user-img" className= "w-[40px] h-[40px]"/>
            </div>
        </div>
        </>
       
    );
}