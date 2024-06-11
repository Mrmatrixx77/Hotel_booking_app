import { RegisterFormData } from "./pages/Register";

const apiUrl = import.meta.env.VITE_API_URL

export const register = async (FormData : RegisterFormData)=>{
    const response = await fetch(`${apiUrl}/api/users/register`,{
        method : "POST",
        credentials : "include",
        headers :{
            "Content-type" : "application/json",

        },
        body: JSON.stringify(FormData)
    })

    const responseBody = await response.json();
    if(!response.ok){
        throw new Error(responseBody.message)
    }
} 