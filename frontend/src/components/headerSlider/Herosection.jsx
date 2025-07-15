import React from 'react'

export default function Herosection() {
  return (
    <>
      {/* // 405 270 */}
      <section className="hero-section ">
        <div className="hero-content">
          <button
            className="w-[100px] h-[25px] ml-[370px] mt-[166px] bg-[#81B29A] text-[#FFFFFF]
   flex items-center justify-center text-sm p-[5] rounded"
          >
            Interior Design
          </button>
          <h1 className="hero-heading ml-[349px] mt-[10px] text-[#FFFFFF] font-bold
        w-[570px] text-[35px]
        ">
            Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.
          </h1>
          <div className="hero-pagination-arrows">
            <button className="arrow-button left-arrow">←</button>
            <button className="arrow-button right-arrow">→</button>
          </div>
        </div>
      </section>

    </>
  )
}
