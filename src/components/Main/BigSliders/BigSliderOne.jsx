import React from "react"
import { BigSliderOneData } from "../../../Data"
import BothBigSlider from "./BigSlidersTools"

const firstBigSlider = () => {

  return (
    <>
      <section className='bigSliderOne'>
        <BothBigSlider items={BigSliderOneData} />
      </section>
      <div className='margin1'></div>
    </>
  )
}

export default firstBigSlider