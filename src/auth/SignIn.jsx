import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate
import google from "../resources/google.png";
import { Link } from "react-router-dom";
import LoginLabelText from "../Component/LoginLabelText/LoginLabelText";
import { loginUser, setUser } from "../redux/action";
import { authenticationLogin } from "../api/APIUrl";
import { useDispatch } from "react-redux";

const loginInitialValues ={
    email:'',
    password:''
}

export default function SignIn() {
    const navigate = useNavigate(); // Correct usage of useNavigate
    const [login, setLogin] = useState(loginInitialValues);
    const dispatch = useDispatch();
    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await authenticationLogin(login);

        // console.log(response.status)
        // if(response.status === 200){
        //     const data = JSON.stringify(response)
        //     localStorage.setItem("user",data);
        //     // setUser(data)
        //     const store =loginUser(data);
        //     console.log("from login", data.data)
        //     navigate("/dashboard");
        // }else{
        //     alert('Wrong Credenticials  ')
        // }

        if (response.status === 200) {
            const data = response.data; 
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(setUser(data));
            // loginUser(data);
            console.log("from login", data.role); 
            navigate("/dashboard");
        } else {
            alert('Wrong Credentials');
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // console.log(formData);

    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const raw = JSON.stringify({
    //     "email": login.email,
    //     "password": login.password
    //     });

    //     const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow"
    //     };

    //     fetch("https://hfh-server.onrender.com/login", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => {
    //             result= JSON.parse(result);
    //             setUser(result);
    //             localStorage.setItem("user", JSON.stringify(result));
    //             const storedUser = localStorage.getItem('user');
    //             // const loggedUser= JSON.parse(storedUser);
    //             // console.log(result);
    //             if (storedUser) {
    //                 try {
    //                     const loggedUser = JSON.parse(storedUser);
    //                     console.log(`loggedUser data : ${loggedUser.email}`);
    //                     if(result.email!==loggedUser.email && result.password !== loggedUser.password){
    //                         navigate("/sign-up")
    //                     }
    //                     else {
    //                         navigate("/dashboard");
    //                         console.log("error");
                            
    //                     }
    //                 } catch (error) {
    //                     console.error('Error parsing stored user data:', error);
    //                 }
    //             }
    //         })
    //         .catch((error) => console.error(error));
    //         }
    
            // {
            //     "email":"prafull@gmail.com",
            //     "password":"123",
            // role:admin
            //   }
            // {
            //     "email":"neha@gmail.com",
            //     "password":"12345",
            // role:agent
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value,
        });
    }

    return (
        <>
            <div className="flex">
                <div className="w-[40vw] h-[100vh] signInContainer"></div>
                <div className="flex justify-center flex-col pl-[1rem] gap-8">
                    <div>
                        <div className="flex font-[800] text-[#101828] text-[2.5rem] items-center italic">HFH</div>
                        <div>
                            <h1 className="text-[#1D1D1D] text-[1.5rem] font-[700] leading-8">Welcome Back!</h1>
                            <p className="text-[#2D3748] text-[1rem]">Login to access your account</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-16 text-[#2D3748] w-[100%]">
                        <div className="flex flex-col gap-4">
                            <LoginLabelText label="Email" type="email" auto name="email" value={login.email} valueChange={handleChange} />
                            <LoginLabelText label="Password" type="password" name="password" value={login.password} valueChange={handleChange} />
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <input type="checkbox" /><span>Remember me</span>
                                </div>
                                <span className="text-[#007AFF]">Forgot password?</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between gap-4">
                                {/* <div className="flex gap-4"> */}
                                    <button type="submit" className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded gap-2 w-[150px] bg-[#007AFF]">
                                        Sign In
                                    </button>
                                    {/* <Link to="/" className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded gap-2 w-[200px] bg-[#007AFF]">
                                        Logout
                                    </Link> */}
                                {/* </div> */}
                                <button type="button" className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded  w-[300px] gap-2  bg-[#2D3748]">
                                    <img className="w-[20px] h-[20px]" src={google} alt="google-icon" />
                                    Sign-in with Google
                                </button>
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                                Don’t have an account? <Link to="/sign-up"><span className="text-[#007AFF] cursor-pointer">Sign Up</span></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
