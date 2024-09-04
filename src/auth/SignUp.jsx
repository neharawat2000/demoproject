import React, { useState } from "react";
import playstore from "../resources/playstore.png";
import apple from "../resources/apple.png";
import google from "../resources/google.png";
import logo from "../resources/logo.png";
import { Link, Navigate } from "react-router-dom";
import LoginLabelText from "../Component/LoginLabelText/LoginLabelText";

export default function SignUp() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        dob: "",
        password: "",
        confirm_password: "",
        remember_me: false,
        agree_terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirm_password) {
            console.error("Passwords do not match!");
            return;
        }

        console.log("Form submitted:", formData);

        // Reset form fields
        setFormData({
            first_name: "",
            last_name: "",
            email: "",
            dob: "",
            password: "",
            confirm_password: "",
            remember_me: false,
            agree_terms: false,
        });
    }

    Navigate('/');
    
    return (
        <>
            <div className="flex">
                <div className="w-[40vw] h-[100vh] signUpContainer"></div>
                <div className="flex justify-center flex-col pl-[1rem] gap-4">
                    <div>
                        {/* <img className="mb-[2rem]" src={logo} alt="company-logo" /> */}
                        <div className="flex font-[800] text-[#101828] text-[2.5rem] items-center italic">HFH</div>
                        <div>
                            <h1 className="text-[#1D1D1D] text-[1.5rem] font-[700] leading-8">Create account</h1>
                            <p className="text-[#2D3748] text-[1rem]">Create account to continue</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-[#2D3748]">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-8">
                                <LoginLabelText label="First name" type="text" name="first_name" value={formData.first_name} valueChange={handleChange}/>
                                <LoginLabelText label="Last name" type="text" name="last_name" value={formData.last_name} valueChange={handleChange}/>
                            </div>
                            <div className="flex gap-8">
                                <LoginLabelText label="Email or phone number" type="email" name="email" value={formData.email} valueChange={handleChange}/>
                                <LoginLabelText label="Date of birth (MM/DD/YY)" type="date" name="dob" value={formData.dob} valueChange={handleChange}/>
                            </div>
                            <div className="flex gap-8">
                                <LoginLabelText label="Password" type="password" name="password" value={formData.password} valueChange={handleChange}/>
                                <LoginLabelText label="Confirm Password" type="password" name="confirm_password" value={formData.confirm_password} valueChange={handleChange}/>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-4">
                                            <input
                                                name="remember_me"
                                                type="checkbox"
                                                checked={formData.remember_me}
                                                onChange={handleChange}
                                            />
                                            <span>Remember me</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <input
                                                name="agree_terms"
                                                type="checkbox"
                                                checked={formData.agree_terms}
                                                onChange={handleChange}
                                            />
                                            <span>
                                                I agree to all the 
                                                <span className="text-[#007AFF]"> Terms</span> and 
                                                <span className="text-[#007AFF]"> Privacy policy</span>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[#007AFF]">Forgot password?</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <Link to="/application" 
                                className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded gap-2 w-[250px] bg-[#007AFF]">
                                    Create account
                                </Link>
                                {/* <button
                                    type="submit"
                                    className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded gap-2 w-[250px] bg-[#007AFF]"
                                >
                                    Create account
                                </button> */}
                                <button type="button" className="flex items-center justify-center text-white px-[1rem] py-[0.5rem] rounded gap-2 w-[250px] bg-[#2D3748]">
                                    <img className="w-[20px] h-[20px]" src={google} alt="google-icon" />
                                    Sign-in with Google
                                </button>
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                                Do have an account? <Link to="/"><span className="text-[#007AFF] cursor-pointer">Log In</span></Link>
                            </div>
                        </div>
                        <div className="flex gap-2 text-white">
                            <div className="flex items-center gap-2 bg-[#000000] py-[0.2rem] rounded-lg px-[0.7rem]">
                                <img src={playstore} alt="playstore icon" className="w-[30px] h-[30px]" />
                                <div className="flex flex-col text-[0.8rem]">
                                    <span>GET IN ON</span>
                                    <span className="text-[1rem] leading-[14px]">Google Play</span>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#000000] py-[0.2rem] rounded-lg px-[0.7rem]">
                                <img src={apple} alt="apple icon" className="w-[50px] h-[50px]" />
                                <div className="flex flex-col text-[0.8rem]">
                                    <span>Download on the</span>
                                    <span className="text-[1rem] leading-[14px]">App Store</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
