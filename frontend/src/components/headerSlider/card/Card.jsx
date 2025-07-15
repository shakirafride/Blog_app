import React from 'react'
import CardImg from "../../../assets/images/img.png"


export default function Card() {
  return (
   <>
  <div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-8">
    <div class="relative">
        <img class="w-full h-48 object-cover" src={CardImg} alt="Interior Design"/>
        <span class="absolute top-4 right-4 bg-green-300 text-white text-xs px-3 py-1 rounded-full font-semibold">
            Interior Design
        </span>
    </div>

    <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2 leading-tight">
            Growing a distributed product design team
        </h3>
        <p class="text-gray-600 text-base mb-4">
            At enim sapien erat nullam placerat felis pellentesque nam, orci justo odio...
        </p>
        <div class="border-t border-gray-200 pt-4 text-sm text-gray-500">
            by <span class="font-bold text-gray-700">Sean Anderson</span>, Sep 8 2023
        </div>
    </div>
</div>

   </>
  )
}
