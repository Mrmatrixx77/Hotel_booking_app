import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING as string);


app.get("/api/test" , async (req : Request,res : Response)=>{
    res.json({message : "api working fine"});

})

const PORT : number = 8080;
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
})