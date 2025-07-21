import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../../../serverice/Endpoint';

const DashboardCards = () => {
  const [post,Setpost] = useState([])
  const [user,Setuser] = useState([])
  const [comment,Setcomment] = useState([])

const getAllpostComent = async()=>{
 try {
   const res = await get('/deshboard');
  const data = res.data;
  console.log('datausercompost',data)
  Setpost(data.post);
  Setuser(data.users);
  Setcomment(data.comments)
 } catch (error) {
  console.log(error)
 }

};


useEffect(()=>{
getAllpostComent()
},[])

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#0e1220]  items-center justify-center">
      {/* Total Users */}
      <div className="w-64 p-6 rounded-md bg-blue-600 text-white shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Total Users</h2>
        <p className="text-3xl font-bold">{user && user.length}</p>
      </div>

      {/* Total Posts */}
      <div className="w-64 p-6 rounded-md bg-green-600 text-white shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Total Posts</h2>
        <p className="text-3xl font-bold">{post && post.length}</p>
      </div>

      {/* Total Comments */}
      <div className="w-64 p-6 rounded-md bg-yellow-400 text-white shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Total Comments</h2>
        <p className="text-3xl font-bold">{comment && comment.length}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
