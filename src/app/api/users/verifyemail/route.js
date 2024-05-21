import {connect} from '/workspaces/codespaces-blank/my-app/src/dbconfig/dbconfig.js'
import User from '/workspaces/codespaces-blank/my-app/src/models/userModel.js'
import bcryptjs from 'bcrypt'
import {sendEmail} from '/workspaces/codespaces-blank/my-app/src/helper/mailer.js'
import { NextResponse } from 'next/server';
import { getTestMessageUrl } from 'nodemailer';
connect();
export async function POST(req){
    try {
        const reqBody=await req.json()
const {token}=reqBody;
const user=await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}});
if(!user){
    return NextResponse.json("token invalid");
}
user.isVerified=true;
user.verifyToken=undefined;
user.verifyTokenExpiry=undefined;
await user.save()

return NextResponse.json("email verified");


        
    } catch (error) {
        return NextResponse.json({error:error.message});
    }
}