import axios from 'axios';
const APIUrl = "https://hfh-server.onrender.com";
// const APIUrl = "http://localhost:8000"

export const authenticationLogin=async(data)=>{
    try{
        return await axios.post(`${APIUrl}/login`,data,{headers: {
            'Content-Type': 'application/json', 
        },});
    }catch(error){
        return error.response
    }
}

export const authenticationAddUser=async(data)=>{
    try{
        return await axios.post(`${APIUrl}/adduser`,data,{headers: {
            'Content-Type': 'application/json', 
        },});
    }catch(error){
        return error.response
    }
}

// export default APIUrl;
