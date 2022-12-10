import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container">
      <h1 className="title">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
