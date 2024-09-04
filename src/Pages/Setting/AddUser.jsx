import { useState } from "react";
import Header from "../../Component/Header/Header";
import SecondHeader from "../../Component/Header/SecondHeader";
import Slidebar from "../../Component/Slidebar/Slidebar";
import LoginLabelText from "../../Component/LoginLabelText/LoginLabelText";

import { authenticationAddUser } from "../../api/APIUrl";

const loginInitialValues ={
    email:'',
    password:'',
    role:''
}

const roles = ['admin', 'agent'];

const AddUser=()=>{
    const [addUser, setAddUser] = useState(loginInitialValues); 
    const overviewMenu=[
        {
            path:"/setting/user",
            name:"Users"
        },
        {
            path:"/setting/business-profile",
            name:"Business Profile"
        },
        {
            path:"/setting/general-settings",
            name:"General Settings"
        }
        ,
        {
            path:"/setting/admin",
            name:"Admin"
        }
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddUser({
            ...addUser,
            [name]: value,
        });
    }
    const handleSubmit=async(e)=>{
        console.log(addUser)
        e.preventDefault();
        const response = await authenticationAddUser(addUser)
        console.log(response)
        if(response.status === 201){
            alert('User added Successfully')
            setAddUser(loginInitialValues);
            // setUser(JSON.parse(response))
        }
        else{
            alert('User already Exist');
        }
    }
    return(        
        <>
            <Slidebar/>
        <div className='mainContainer'>
            <Header title="Settings" option="User and administration / Add User"/>
            <div className="flex justify-between items-start">
                <SecondHeader menuData={overviewMenu}/>
            </div>
            <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-16 text-[#2D3748] w-[30%]">
                        <div className="flex flex-col gap-4">
                            <LoginLabelText label="Email" type="email" auto name="email" value={addUser.email} valueChange={handleChange} />
                            <LoginLabelText label="Password" type="password" name="password" value={addUser.password} valueChange={handleChange} />
                            {/* <LoginLabelText label="role" type="role" name="role" value={addUser.role} valueChange={handleChange} /> */}
                            <label className="font-medium " style={{color:'grey'}}>Role</label>
            <select
                name="role"
                value={addUser.role}
                onChange={handleChange}
                className="border rounded p-2"
            >
                {roles.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between gap-4">
                                {/* <div className="flex gap-4"> */}
                                    <button type="submit" className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded gap-2 w-[150px] bg-[#007AFF]">
                                        Add User
                                    </button>
                                    {/* <Link to="/" className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded gap-2 w-[200px] bg-[#007AFF]">
                                        Logout
                                    </Link> */}
                                {/* </div> */}
                                
                            </div>
                            
                        </div>
                    </form>
            </div>
        </div>
        </>
    )
}
export default  AddUser;