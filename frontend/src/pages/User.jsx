import React, { useState } from 'react'
import { useEffect } from 'react';
import { get } from '../serverice/Endpoint';

export default function User() {
  const [table,Settable] = useState([])

const Getusertalble = async()=>{
try {
    const res = await get('/deshboard/users');
  const data = await res.data;
  Settable(data.users)
} catch (error) {
   console.log(error)
}

};

useEffect(()=>{
  Getusertalble()
},[])

  return (
   <>
   <div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {
        table.map((user,id)=>{
          return(
            <>
            <tr key={id}>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.fullname}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.role == 'admin' ? 'Admin':'user'}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer">Edit</td>
      </tr>
            </>
          )
        })
      }
      
    
      {/* <!-- More rows --> */}
    </tbody>
  </table>
</div>

   </>
  )
}
