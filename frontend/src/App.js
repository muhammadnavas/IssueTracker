import React, {useEffect, useState} from 'react';
import axios from 'axios';
import IssueTable from './IssueTable';
import IssueForm from './IssueForm';

function App() {

  const [issues,setIssues]=useState([]);

  // const issues=[
  //   {id:1,title:"UI Bug",owner:"Navas",status:"Open",createdAt:"2025-11-10",effort:2,dueDate:"2025-11-12"},
  //   {id:2,title:"Login Error",owner:"Sana",status:"Closed",createdAt:"2025-11-14",effort:1,dueDate:"2025-11-15"},
  //   {id:3,title:"Data Base Error",owner:"Abhi",status:"Closed",createdAt:"2025-11-21",effort:2,dueDate:"2025-11-23"},
  //   {id:4,title:"Login Error",owner:"Rafi",status:"Open",createdAt:"2025-11-10",effort:4,dueDate:"2025-11-14"},
  //   {id:5,title:"Not Responsive",owner:"Preethi",status:"Closed",createdAt:"2025-11-10",effort:1,dueDate:"2025-11-11"}
  // ]

  useEffect(()=>{
    axios.get('http://localhost:5000/issues')
    .then(response=> setIssues(response.data))
    .catch(error=>console.log('Error fetching issues :',error));
  },[])


  const addIssue=(newIssue)=>{
    axios.post('http://localhost:5000/issues',newIssue)
    .then(response=> setIssues([...issues,response.data]))
    // const issueId={...newIssue,id:issues.length+1,createdAt:new Date().toISOString().split('T')[0]}
    // setIssues([...issues,issueId]);
    .catch(error=>console.log('Error adding issues :',error))
  }

  const onUpdateIssue=(updatedIssue)=>{
    axios.put(`http://localhost:5000/issues/${updatedIssue.id}`,updatedIssue)
    .then(()=>{
      setIssues((prevIssues)=>prevIssues.map((issue)=>issue.id===updatedIssue.id?{...issue,...updatedIssue}:issue))
    })
    .catch((error)=>console.log('Error updating issue:',error))
  }
  return(
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Issue Tracker</h1>
      <IssueForm  onSubmit={addIssue}/>
      <IssueTable issues={issues} onUpdateIssue={onUpdateIssue}/>
    </div>
  )
  
}

export default App;
