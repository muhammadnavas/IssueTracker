import React, { useState } from 'react';

function IssueTable({ issues, onUpdateIssue }) {
  // States
  const [statusFilter, setStatusFilter] = useState('');
  const [textFilter, setTextFilter] = useState('');
  const [editIssue, setEditIssue]=useState(null)
  
  // Filters
  const filteredIssues = issues.filter(issue => {
    const matchesStatus = statusFilter === '' || issue.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesText =
      issue.owner.toLowerCase().includes(textFilter.toLowerCase()) ||
      issue.title.toLowerCase().includes(textFilter.toLowerCase());
    return matchesStatus && matchesText;
  });

  // Edit
  const handleEditClick=(issue)=>{
    setEditIssue(issue)
  }

  //Save
  const handleSaveClick=()=>{
    onUpdateIssue(editIssue);
    setEditIssue(null)
  }
  // Cancel
  const handleCancelClick = () => {
    setEditIssue(null);
  };

  //update state
  const handleChange=(e)=>{
    const {name,value}=e.target
    setEditIssue({...editIssue,[name]:value})
  }

  

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1 ' htmlFor='textFilter'>Filter by Title or Owner</label>
        <input
          type='text'
          id='textFilter'
          name='textFilter'
          value={textFilter}
          onChange={(e) => setTextFilter(e.target.value)}
          className='w-full border border-gray-300 rounded-md px-3 py-2 max-w-md'
          placeholder='Enter title or owner name'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-1' htmlFor='statusFilter'>Filter by Status</label>
        <select
          id='statusFilter'
          name='statusFilter'
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className='w-full border border-gray-300 rounded-md px-3 py-2 max-w-md'
        >
          <option value=''>All</option>
          <option value='Open'>Open</option>
          <option value='Closed'>Closed</option>
        </select>
      </div>

      <table className='table-auto border-collapse border border-gray-300 w-full text-left'>
        <thead>
          <tr className='bg-blue-100'>
            <th className='border border-gray-300 px-4 py-2'>ID</th>
            <th className='border border-gray-300 px-4 py-2'>Title</th>
            <th className='border border-gray-300 px-4 py-2'>Owner</th>
            <th className='border border-gray-300 px-4 py-2'>Status</th>
            <th className='border border-gray-300 px-4 py-2'>Creation Date</th>
            <th className='border border-gray-300 px-4 py-2'>Effort</th>
            <th className='border border-gray-300 px-4 py-2'>Due Date</th>
            <th className='border border-gray-300 px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map(i => (
            <tr key={i.id} className='hover:bg-green-50'>
              {editIssue?.id===i.id?(
                <>
                <td className='border border-gray-300 px-4 py-2'>{i.id}</td>
                <td className='border border-gray-300 px-4 py-2'>
                <input type='text'name='title' value={editIssue.title} onChange={handleChange}
                className='w-full border border-gray-300 rounded-md  px-2 py-1'/>
                </td> 
                <td className='border border-gray-300 px-4 py-2'>
                    <input
                      type='text'
                      name='owner'
                      value={editIssue.owner}
                      onChange={handleChange}
                      className='w-full border border-gray-300 rounded-md px-2 py-1'
                    />
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <select
                      name='status'
                      value={editIssue.status}
                      onChange={handleChange} // Update status
                      className='w-full border border-gray-300 rounded-md px-2 py-1'
                    >
                      <option value='Open'>Open</option>
                      <option value='Closed'>Closed</option>
                    </select>
                    </td>
                    <td className='border border-gray-300 px-4 py-2'>{i.createdAt.split('T')[0]}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <input
                      type='number'
                      name='effort'
                      value={editIssue.effort}
                      onChange={handleChange}
                      className='w-full border border-gray-300 rounded-md px-2 py-1'
                    />
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <input
                      type='date'
                      name='dueDate'
                      value={editIssue.dueDate}
                      onChange={handleChange}
                      className='w-full border border-gray-300 rounded-md px-2 py-1'
                    />
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <button onClick={handleSaveClick}
                    className='bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600'>
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className='bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600 ml-2'
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ):(
                <>
                  <td className='border border-gray-300 px-4 py-2'>{i.id}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.title}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.owner}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.status}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.createdAt.split('T')[0]}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.effort}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.dueDate}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <button onClick={()=>handleEditClick(i)}
                    className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600'>
                    Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssueTable;