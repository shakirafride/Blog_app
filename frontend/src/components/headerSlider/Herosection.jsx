import React from 'react'

export default function Herosection() {
  return (
    <>
      {/* // 405 270 */}
      <section className="hero-section flex mt-20 text-start w-[100%]  ">
        <div className="hero-content">
          <button
            className="ml-[370px]  bg-[#81B29A] text-[#FFFFFF]
   text-sm p-[5] rounded"
          >
            Interior Design
          </button>
          <h1 className="hero-heading ml-[349px] mt-[10px] text-[#FFFFFF] font-bold
        w-[570px] text-[35px]
        ">
            Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.
          </h1>
          {/* <div className="hero-pagination-arrows">
            <button className="arrow-button left-arrow">←</button>
            <button className="arrow-button right-arrow">→</button>
          </div> */}
        </div>
      </section>

    </>
  )
}
