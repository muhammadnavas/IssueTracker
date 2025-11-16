import { useState } from "react";

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
        <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded-md max-w-md">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="owner">Owner</label>
                <input type="text" id="owner" name="owner" value={formData.owner} onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="status">Status</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="effort">Effort</label>
                <input type="number" id="effort" name="effort" value={formData.effort} onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="dueDate">Due Date (Optional)</label>
                <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md px-3 py-2"/>
            </div>
            <button type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >Submit</button>
        </form>
    )
}

export default IssueForm;