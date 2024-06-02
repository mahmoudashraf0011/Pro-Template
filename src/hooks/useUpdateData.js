import axios from "axios";
import baseURL from "../API/baseURL";
const usePutDataWithDifferentFormat=async (url,params)=>{
    const config={
        headers:{"content-type":"multipart/form-data"}
    }
    const res= await baseURL.put(url,params,config)
    return res;
}
const usePutDate=async (url,params)=>{
    const res= await baseURL.put(url,params)
    return res;
}
export {usePutDataWithDifferentFormat,usePutDate};