const express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/issueTracker',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("MongoDB Connected"))
.catch(err=>console.error('MongoDB connection error :',err));

const issueSchema=new mongoose.Schema({
    title:String,
    owner:String,
    status:String,
    effort:Number,
    dueDate:String,
    createdAt:{type:Date,default:Date.now}
})

const Issue=mongoose.model('Issue',issueSchema);

app.get('/issues', async(req,res)=>{
    const issues=await Issue.find();
    res.json(issues);
})

app.post('/issues', async(req,res)=>{
    const newIssue=new Issue(req.body);
    await newIssue.save();
    res.json(newIssue)
})

app.listen(5000,()=> console.log("Server running on http://localhost:5000"));