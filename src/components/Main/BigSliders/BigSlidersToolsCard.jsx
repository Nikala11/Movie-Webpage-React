import React from "react"

const BigSlidersToolsCard = ({ item: { id, cover, name, rating, time, desc, starring, genres} }) => {
  return (
    <>
      <div className='box' key={id}>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i> PLAY NOW
            </button>
          </div>
          <div className='playButton row'>
            <button>
              <div className='img'>
                <img src='./images/play-button.png' alt='#' />
                <img src='./images/play.png' alt='#' className='change' />
              </div>
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BigSlidersToolsCard