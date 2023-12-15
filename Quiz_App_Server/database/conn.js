import mongoose from "mongoose";


export default async function connect(){
    await mongoose.connect("mongodb+srv://karlmarxa1b2:Naveennavi123@cluster0.tlbjwk5.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}