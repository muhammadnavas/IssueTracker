const express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/issueTracker')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error('MongoDB connection error:', err));

const issueSchema=new mongoose.Schema({
    id:{type:Number,unique:true},
    title:String,
    owner:String,
    status:String,
    effort:Number,
    dueDate:{type:String,default:null},
    createdAt:{type:Date,default:Date.now}
})

const Issue=mongoose.model('Issue',issueSchema);

app.get('/issues', async(req,res)=>{
    const issues=await Issue.find();
    const formattedIssues = issues.map(issue => ({
        id: issue.id,
        title: issue.title,     
        owner: issue.owner,      
        status: issue.status,    
        effort: issue.effort,    
        dueDate: issue.dueDate,   
        createdAt: issue.createdAt.toISOString().split('T')[0] 
    }));
    res.json(formattedIssues);
})

app.put('/issues/:id',async(req,res)=>{
    const {id}=req.params;
    const updatedData=req.body;
    try{
        const updatedIssue=await Issue.findOneAndUpdate({id:parseInt(id)}, updatedData,{
            new:true,
        })
        if(!updatedIssue){
            return  res.status(404).json({message:'Issue not found'});
        }
        res.json(updatedIssue);
    }
    catch(error){
        console.log('Error updating issue:',error);
        res.status(500).json({message:'Internal server error'})
    }
})
app.post('/issues', async(req,res)=>{
    const issues = await Issue.find();
    const maxId = issues.length > 0 ? Math.max(...issues.map(issue => issue.id || 0)) : 0;
    const newIssue = new Issue({
        ...req.body,
        id: maxId + 1
    });
    await newIssue.save();
    res.json(newIssue)
})

app.delete('/issues/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedIssue = await Issue.findOneAndDelete({ id: parseInt(id) });
        if (!deletedIssue) {
            return res.status(404).json({ message: 'Issue not found' });
        }
        res.json({ message: 'Issue deleted successfully' });
    } catch (error) {
        console.error('Error deleting issue:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

app.listen(5000,()=> console.log("Server running on http://localhost:5000"));