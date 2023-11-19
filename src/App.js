import React from "react"
import Header from "./components/Header/Header"
import FirstBigSlider from "./components/Main/BigSliders/BigSliderOne"
import SecondBigSlider from "./components/Main/BigSliders/BigSliderTwo"
import SmallSlidersToolsCard from "./components/Main/SmallSliders/SmallSlidersTools"
import { SmallSliderOneData, SmallSliderTwoData } from "./Data"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import "./app.css"

function App() {

  return (
    <>
      <Router>
        <Header />
        <FirstBigSlider />
        <SmallSlidersToolsCard items={SmallSliderOneData} title='Top Movies' />
        <SecondBigSlider />
        <SmallSlidersToolsCard items={SmallSliderTwoData} title='Trending' />
        <Footer />
      </Router>
    </>
  )
}

export default App