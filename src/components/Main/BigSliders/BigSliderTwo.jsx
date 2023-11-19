import React from "react"
import { BigSliderTwoData } from "../../../Data"
import BothBigSlider from "./BigSlidersTools"

const secondBigSlider = () => {

  return (
    <>
      <section className='bigSliderTwo'>
        <BothBigSlider items={BigSliderTwoData} />
        <div className='margin2'></div>
      </section>
    </>
  )
}

export default secondBigSlider