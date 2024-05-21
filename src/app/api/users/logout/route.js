import {connect} from '@/dbconfig/dbconfig.js'
import User from '@/models/userModel.js'
import bcryptjs from 'bcrypt'
import {sendEmail} from '@/helper/mailer.js'
import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken";


connect();
export async function POST(req){
    try {
       const response=NextResponse.json({
            message:"logoutsucessfully",
            sucess:"true"
        })
        response.cookies.set("token","",{httpOnly:true,expires:new Date(0)})
        return response;
    } catch (error) {
        return NextResponse.json({error:error.message});
    }
}
