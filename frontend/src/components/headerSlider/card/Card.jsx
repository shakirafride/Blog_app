import React, { useState } from 'react';
// import CardImg from "../../../assets/images/img.png";
import { useEffect } from 'react';
import { get } from '../../../serverice/Endpoint';
import { useNavigate } from 'react-router-dom';



export default function Card() {
  const [POstdata, Setpostdata] = useState([]);


  const useNagitve = useNavigate()


  const GetPost = async () => {
    try {
      const res = await get('/blog/getpost');
      const data = res.data;
      Setpostdata(data.Getpost)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    GetPost()
  }, [])

  const handleSinglepost = (id) => {
    useNagitve(`/singlepost/${id}`);
 
  }



  return (
    <>
      <div className="grid ml-[7px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        {
          POstdata && POstdata.map((post, id) => {

            return (
              <div key={id} className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden my-8">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={`http://localhost:5000/images/${post.image}`}
                    alt="Post"
                  />
                  <span className="absolute top-4 right-4 bg-green-300 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Interior Design
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4">
                    {post.des}
                  </p>
                  <div className="border-t border-gray-200 pt-4 text-sm text-gray-500 mb-4">
                    by <span className="font-bold text-gray-700">Sean Anderson</span>, Sep 8 2023
                  </div>

                  {/* Read Article Button */}
                  <button
                    onClick={() => handleSinglepost(post._id)}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                  >
                    Read Article
                  </button>
                </div>
              </div>
            );
          })

        }

      </div>
    </>
  );
}
