import { NextResponse } from "next/server";
import { Topic } from "../../../../models/topicmodel";
const { connectDB } = require("../../../../lib/db");

export async function POST(req,res){
    try {
        
        const {title,description} = await req.json()
        await connectDB()
        await Topic.create({title,description})
        return NextResponse.json({message:'Created Successfully'})
        
    } catch (error) {
        console.log(error);
    }

}