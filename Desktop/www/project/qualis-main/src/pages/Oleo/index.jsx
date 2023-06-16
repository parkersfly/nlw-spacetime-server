import { Container } from './styles'
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tags";

import { LogoSlider } from "../../components/LogoSlider";

export function Oleo(){

  let hours = Math.floor(Math.random() * 20) 
  let minutes = Math.floor(Math.random() * 60)
  let seconds = Math.floor(Math.random() * 60)

  if(hours < 10){
    hours = `0${hours}`
  }

  if(minutes < 10){
    minutes = `0${minutes}`
  }

  if(seconds < 10){
    seconds = `0${seconds}`
  }

  return(
    <Container>
      <Header />

      <div>
        {/*Tags*/}
        <div className="groupTags flex column">
          <Tag title="Brasília - Asa Norte" />
          <Tag title="Brasília - Sudoeste" />
        </div>

        {/* Banner */}
        <div id="banner">
          <h1 className="flex column">
            Óleo <span>da melhor</span>qualidade
          </h1>

          <img src="" alt="" />

          <div className="flag">
            <div className="flag-time flex column">
              <div className="flagTimer flex">
                <p id="hours">{hours}</p>
                <span>:</span>
                <p id="minutes">{minutes}</p>
                <span>:</span>
                <p id="seconds">{seconds}</p>
              </div>
              <p>Somente hoje!</p>
            </div>
          </div>

          {/* Logo Sliders */}

          <LogoSlider />

        </div>
      </div>

    </Container>
  )
}