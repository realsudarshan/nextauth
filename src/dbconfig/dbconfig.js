import mongoose from "mongoose";
export async function connect(){
try{
mongoose.connect("mongodb+srv://code:1590@cluster0.tk6cwsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("Connection sucessfull")
})
}
catch(e){
    console.log(e);
}
}