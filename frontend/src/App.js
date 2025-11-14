import './App.css';

function App() {
  const issues=[
    {id:1,title:"UI Bug",owner:"Navas",status:"Open"},
    {id:2,title:"Login Error",owner:"Sana",status:"Closed"},
    {id:3,title:"Login Error",owner:"Abhi",status:"Closed"},
    {id:4,title:"Login Error",owner:"Rafi",status:"Open"},
    {id:5,title:"Login Error",owner:"Preethi",status:"Closed"}
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
        </tr>
      </thead>
      <tbody>
        {issues.map(i=>(
          <tr key={i.id} className='hover:bg-green-50'>
            <td className='border border-gray-300 px-4 py-2'>{i.id}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.title}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.owner}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
