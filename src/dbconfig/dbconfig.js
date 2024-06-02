import mongoose from "mongoose";
export async function connect(){
try{
mongoose.connect(process.env.MONGOBB_URI)
const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("Connection sucessfull")
})
}
catch(e){
    console.log(e);
}
}
