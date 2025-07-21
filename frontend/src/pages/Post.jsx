import React from 'react'
import CardImg from '../assets/images/img.png'
export default function Post() {
  return (
    <>
     <div className="grid ml-[7px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="max-w-sm cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden my-8">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={CardImg}
                  alt="Interior Design"
                />
                <span className="absolute top-4 right-4 bg-green-300 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Interior Design
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  Growing a distributed product design team
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  At enim sapien erat nullam placerat felis pellentesque nam, orci justo odio...
                </p>
                <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
                  by <span className="font-bold text-gray-700">Sean Anderson</span>, Sep 8 2023
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
