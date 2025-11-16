import { useState } from 'react';

function IssueTable({ issues, onUpdateIssue, onDeleteIssue, statusFilter, textFilter }) {
  // States
  const [editIssue, setEditIssue]=useState(null)
  const [deleteIssue,setDeleteIssue]=useState(null)
  
  // Filters
  const filteredIssues = issues.filter(issue => {
    const matchesStatus = statusFilter === '' || 
    issue.status.toLowerCase() === statusFilter.toLowerCase();
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

  // Delete
  const handleDeleteClick=(id)=>{
    setDeleteIssue(id);
  }
  //Confirm Delete
  const handleConfirmDelete=()=>{
    onDeleteIssue(deleteIssue)
    setDeleteIssue(null)
  }
  // Cancel delete
  const handleCancelDelete = () => {
    setDeleteIssue(null); // Cancel the delete action
  };

  return (
    <div className='px-0'>
      <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Issues List</h2>
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
              {editIssue?.id === i.id ? (
                <>
                  <td className='border border-gray-300 px-4 py-2'>{i.id}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <input
                      type='text'
                      name='title'
                      value={editIssue.title}
                      onChange={handleChange}
                      className='w-full border border-gray-300 rounded-md px-2 py-1'
                    />
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
                      onChange={handleChange}
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
                    <div className='flex gap-2'>
                      <button
                        onClick={handleSaveClick}
                        className='bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 text-sm'
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className='bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600 text-sm'
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td className='border border-gray-300 px-4 py-2'>{i.id}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.title}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.owner}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <select
                      value={i.status}
                      onChange={(e) => {
                        const updatedIssue = { ...i, status: e.target.value };
                        onUpdateIssue(updatedIssue);
                      }}
                      className='w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    >
                      <option value='Open'>Open</option>
                      <option value='Closed'>Closed</option>
                    </select>
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>{i.createdAt.split('T')[0]}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.effort}</td>
                  <td className='border border-gray-300 px-4 py-2'>{i.dueDate}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <div className='flex gap-2'>
                      {deleteIssue === i.id ? (
                        <>
                          <button
                            onClick={handleConfirmDelete}
                            className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 text-sm'
                          >
                            Confirm
                          </button>
                          <button
                            onClick={handleCancelDelete}
                            className='bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600 text-sm'
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditClick(i)}
                            className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 text-sm'
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(i.id)}
                            className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 text-sm'
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
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