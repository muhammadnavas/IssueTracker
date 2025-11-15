import React, {useState} from "react";

function IssueForm({onSubmit}){
    const [formData,setFormData]=useState({
        title:'',
        owner:'',
        status:'Open',
        effort:'',
        dueDate:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(onSubmit){
            onSubmit(formData)
        }
        setFormData({title:'',owner:'',status:'Open',effort:'',dueDate:''})
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required/>
            </div>
            <div>
                <label>Owner</label>
                <input type="text" id="owner" name="owner" value={formData.owner} onChange={handleChange} required/>
            </div>
            <div>
                <label>Status</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange}>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                </select>
            </div>
            <div>
                <label>Effort</label>
                <input type="number" id="effort" name="effort" value={formData.effort} onChange={handleChange} required/>
            </div>
            <div>
                <label>Due Date</label>
                <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default IssueForm;