import './App.css';

function App() {
  const issues=[
    {id:1,title:"UI Bug",owner:"Navas",status:"Open",createdAt:"2025-11-10",effort:2,dueDate:"2025-11-12"},
    {id:2,title:"Login Error",owner:"Sana",status:"Closed",createdAt:"2025-11-14",effort:1,dueDate:"2025-11-15"},
    {id:3,title:"Data Base Error",owner:"Abhi",status:"Closed",createdAt:"2025-11-21",effort:2,dueDate:"2025-11-23"},
    {id:4,title:"Login Error",owner:"Rafi",status:"Open",createdAt:"2025-11-10",effort:4,dueDate:"2025-11-14"},
    {id:5,title:"Not Responsive",owner:"Preethi",status:"Closed",createdAt:"2025-11-10",effort:1,dueDate:"2025-11-11"}
  ]

  return (
    <div className='p-4'>
    <table className='table-auto border-collapse border border-gray-300 w-full text-left'>
      <thead>
        <tr className='bg-blue-100'>
          <th className='border border-gray-300 px-4 py-2'>ID</th>
          <th className='border border-gray-300 px-4 py-2'>Title</th>
          <th className='border border-gray-300 px-4 py-2'>Owner</th>
          <th className='border border-gray-300 px-4 py-2'>Status</th>
          <th className='border border-gray-300 px-4 py-2'>CreatedAt</th>
          <th className='border border-gray-300 px-4 py-2'>Effort</th>
          <th className='border border-gray-300 px-4 py-2'>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {issues.map(i=>(
          <tr key={i.id} className='hover:bg-green-50'>
            <td className='border border-gray-300 px-4 py-2'>{i.id}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.title}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.owner}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.status}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.createdAt}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.effort}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
