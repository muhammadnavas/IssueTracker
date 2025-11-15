function IssueTable({issues}){
  return (
    <div className='p-4'>
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
        </tr>
      </thead>
      <tbody>
        {issues.map(i=>(
          <tr key={i.id} className='hover:bg-green-50'>
            <td className='border border-gray-300 px-4 py-2'>{i.id}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.title}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.owner}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.status}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.createdAt.split('T')[0]}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.effort}</td>
            <td className='border border-gray-300 px-4 py-2'>{i.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default IssueTable;