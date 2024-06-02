import mongoose from "mongoose";
export async function connect(){
try{
mongoose.connect(MONGODB_URI)
const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("Connection sucessfull")
})
}
catch(e){
    console.log(e);
}
}
