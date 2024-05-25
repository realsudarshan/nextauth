
import {connect} from '@/dbconfig/dbconfig.js'
import User from '@/models/userModel.js'
import bcryptjs from 'bcrypt'
import {sendEmail} from '@/helper/mailer.js'
import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken";
connect();
export async function POST(req){
try{
const reqBody=await req.json()
const{username,email,password}=reqBody;
console.log('Environment Variable:', process.env.NEXT_PUBLIC_TOKEN_SECRET);
//validation
console.log(reqBody);
const user = await User.findOne({email})
    if(user){
        return NextResponse.json({error:"User already exists"});
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword=await bcryptjs.hash(password,salt)
    const newUser = new User({
        username,email,password:hashedPassword
    })
    const savedUser=await newUser.save()
  
    sendEmail({email,emailType:"VERIFY",userId:savedUser._id})   
    //send verification email
return NextResponse.json({
    message:"Sucessfull",
    sucess:true,
    savedUser
})
    
}
catch(error){
    return NextResponse.json({error:error.message})
}
}
