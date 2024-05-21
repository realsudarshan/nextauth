import {connect} from '/workspaces/codespaces-blank/my-app/src/dbconfig/dbconfig.js'
import User from '/workspaces/codespaces-blank/my-app/src/models/userModel.js'
import bcryptjs from 'bcrypt'
import {sendEmail} from '/workspaces/codespaces-blank/my-app/src/helper/mailer.js'
import { NextResponse } from 'next/server';
import { getDatafromToken } from '../../../../helper/getDatafromToken';

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