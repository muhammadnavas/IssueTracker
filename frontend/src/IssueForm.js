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
        <form onSubmit={handleSubmit} className="p-6 border border-gray-300 rounded-md w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required/>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="owner">Owner</label>
                    <input type="text" id="owner" name="owner" value={formData.owner} onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required/>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="status">Status</label>
                    <select id="status" name="status" value={formData.status} onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="effort">Effort</label>
                    <input type="number" id="effort" name="effort" value={formData.effort} onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="dueDate">Due Date (Optional)</label>
                    <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} 
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <button type="submit" 
                    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-medium w-full"
                    >Submit</button>
                </div>
            </div>
        </form>
    )
}

export default IssueForm;