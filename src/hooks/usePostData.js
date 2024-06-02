import axios from "axios";
import baseURL from "../API/baseURL";
const usePostDataWithDifferentFormat=async (url,params)=>{
    const config={
        headers:{"content-type":"multipart/form-data"}
    }
    const res= await baseURL.post(url,params,config)
    return res;
}
const usePostData=async (url,params)=>{
    const res= await baseURL.post(url,params)
    return res;
}
export {usePostDataWithDifferentFormat,usePostData};