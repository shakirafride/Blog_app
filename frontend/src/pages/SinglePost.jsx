import React, { useState } from 'react';
import img from '../assets/images/image.png'
import { useEffect } from 'react';
import { get } from '../serverice/Endpoint';
import { useParams } from 'react-router-dom';

export default function SinglePost() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [singloPostdata,Setsinglepost] = useState(null);


  const { id } = useParams();



  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([...comments, commentText]);
    setCommentText('');
  };

  const SinglePost = async () => {
    try {
      const resp = await get(`public/getsingle/${id}`);
      const data = resp.data;
      Setsinglepost(data.Post)
      console.log('singlepostdata',data)
    } catch (error) {
      console.log('error', error)
    }
  };

  useEffect(() => {
    SinglePost()
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
      {/* Post Image */}
   {singloPostdata && (
  <>
    <img
      src={`http://localhost:5000/images/${singloPostdata.image}`}
      alt="Post"
      className="w-full h-[400px] object-cover rounded-xl mb-6"
    />

    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      {singloPostdata.title}
    </h1>

    <p className="text-gray-700 text-lg leading-relaxed mb-8">
      {singloPostdata.des}
    </p>
  </>
)}


      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

        {/* Comment Form */}
        <form onSubmit={handleAddComment} className="mb-6">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Post Comment
          </button>
        </form>

        {/* Render Comments */}
        <div className="space-y-4">
  {singloPostdata?.comments?.length === 0 ? (
    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
  ) : (
    singloPostdata?.comments?.map((comment, idx) => (
      <div
        key={idx}
        className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl text-gray-800 shadow-sm"
      >
        {/* User Image */}
        <img
          src={`http://localhost:5000/images/${comment.UserId.profile}`}
          alt={comment.fullname}
          className="w-12 h-12 rounded-full object-cover border"
        />

        {/* Name and Comment Text */}
        <div>
          <p className="font-semibold">{comment.UserId.fullname}</p>
          <p>{comment.comment}</p>
        </div>
      </div>
    ))
  )}
</div>

      </div>
    </div>
  );
}
