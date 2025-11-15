import './App.css';
import React from 'react';
import IssueTable from './IssueTable';
import IssueForm from './IssueForm';

function App() {

  const [issues,setIssues]=React.useState([]);

  // const issues=[
  //   {id:1,title:"UI Bug",owner:"Navas",status:"Open",createdAt:"2025-11-10",effort:2,dueDate:"2025-11-12"},
  //   {id:2,title:"Login Error",owner:"Sana",status:"Closed",createdAt:"2025-11-14",effort:1,dueDate:"2025-11-15"},
  //   {id:3,title:"Data Base Error",owner:"Abhi",status:"Closed",createdAt:"2025-11-21",effort:2,dueDate:"2025-11-23"},
  //   {id:4,title:"Login Error",owner:"Rafi",status:"Open",createdAt:"2025-11-10",effort:4,dueDate:"2025-11-14"},
  //   {id:5,title:"Not Responsive",owner:"Preethi",status:"Closed",createdAt:"2025-11-10",effort:1,dueDate:"2025-11-11"}
  // ]

  const addIssue = (newIssue) => {
    const issueWithId = { ...newIssue, id: issues.length + 1, createdAt: new Date().toISOString().split('T')[0] };
    setIssues([...issues, issueWithId]);
  };

  return(
    <div>
      <IssueForm  onSubmit={addIssue}/>
      <IssueTable issues={issues}/>
    </div>
  )
  
}

export default App;
