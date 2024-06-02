import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
export const getDatafromToken=(request)=>{
    try{
        const token = request.cookies.get("token")?.value || "";
        const decodedToken=jwt.verify(token,process.env.NEXT_PUBLIC_TOKEN_SECRET);
        return decodedToken.id;
    }catch(error){
        throw new Error(error.message)
    }
}
