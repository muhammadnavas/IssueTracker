import axios from 'axios';
import { useEffect, useState } from 'react';
import IssueForm from './IssueForm';
import IssueTable from './IssueTable';

function App() {

  const [issues,setIssues]=useState([]);
  const [showForm, setShowForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [textFilter, setTextFilter] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:5000/issues')
    .then(response=> setIssues(response.data))
    .catch(error=>console.log('Error fetching issues :',error));
  },[])


  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const addIssue=(newIssue)=>{
    axios.post('http://localhost:5000/issues',newIssue)
    .then(response=> {
      setIssues([...issues,response.data])
      setShowForm(false); // Close form after successful submission
    })
    .catch(error=>console.log('Error adding issues :',error))
  }

  const deleteIssue=(id)=>{
    axios.delete(`http://localhost:5000/issues/${id}`)
    .then(()=>{
      setIssues((prevIssues)=>prevIssues.filter((issue)=>issue.id!==id));
    })
    .catch((error)=>console.log('Error deleting issue:',error));
  }

  const onUpdateIssue=(updatedIssue)=>{
    axios.put(`http://localhost:5000/issues/${updatedIssue.id}`,updatedIssue)
    .then(()=>{
      setIssues((prevIssues)=>prevIssues.map((issue)=>issue.id===updatedIssue.id?{...issue,...updatedIssue}:issue))
    })
    .catch((error)=>console.log('Error updating issue:',error))
  }

  return(
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-extrabold text-blue-600 mb-2'>Issue Tracker</h1>
        <p className='text-gray-600 text-lg'>Manage and track your project issues efficiently</p>
      </div>
      <div className='max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8'>
        <div className='flex justify-between items-center mb-8'>
          <button
            onClick={toggleForm}
            className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-medium'
          >
            {showForm ? 'Close Form' : 'Add Issue'}
          </button>
          <div className='flex gap-6'>
            <div>
              <label className='block text-sm font-medium mb-2 text-gray-700' htmlFor='textFilter'>Filter by Title or Owner</label>
              <input
                type='text'
                id='textFilter'
                name='textFilter'
                value={textFilter}
                onChange={(e) => setTextFilter(e.target.value)}
                className='w-64 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter title or owner name'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-2 text-gray-700' htmlFor='statusFilter'>Filter by Status</label>
              <select
                id='statusFilter'
                name='statusFilter'
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className='w-40 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              >
                <option value=''>All</option>
                <option value='Open'>Open</option>
                <option value='Closed'>Closed</option>
              </select>
            </div>
          </div>
        </div>
        {showForm && (
          <div className='mb-8 p-8 bg-white rounded-lg border border-gray-200 shadow-sm'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-bold text-gray-900'>Create New Issue</h3>
              <p className='text-gray-600 mt-2'>Fill in the details below to create a new issue</p>
            </div>
            <IssueForm onSubmit={addIssue} />
          </div>
        )}
        {issues.length === 0 ? (
          <div className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <svg className='mx-auto h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>No issues found</h3>
            <p className='text-gray-500 mb-4'>Get started by creating your first issue.</p>
            <button
              onClick={() => setShowForm(true)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
              Create First Issue
            </button>
          </div>
        ) : (
          <IssueTable issues={issues} onUpdateIssue={onUpdateIssue} onDeleteIssue={deleteIssue} statusFilter={statusFilter} textFilter={textFilter} />
        )}
      </div>
    </div>
  )
  
}

export default App;
