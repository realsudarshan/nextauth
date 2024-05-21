import {connect} from '@/dbconfig/dbconfig.js'
import User from '@/models/userModel.js'
import bcryptjs from 'bcrypt'
import {sendEmail} from '@/helper/mailer.js'
import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken";
import { getDatafromToken } from '@/helper/getDatafromToken.js';

connect();
export async function POST(req){
try {
    const userId=await getDatafromToken(req)
    const user=await User.findOne({_id:userId}).select("-password")
    return NextResponse.json({
        message:"Userfound",
        data:user
    })
} catch (error) {
    return NextResponse.json({error:error.message})
}
}