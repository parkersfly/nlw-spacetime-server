import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tags";
import { Map } from "../../components/Map";
import { PneusCard } from "../../components/Card/Pneus";
import { LogoSlider } from "../../components/LogoSlider";
import { ServicesSlider } from "../../components/ServicesSlider";
import { Footer } from '../../components/Footer'

import { FiDollarSign, FiSend } from "react-icons/fi";
import { TiInputChecked } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";

export function Pneus() {

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

  return (
    <Container>
      <Header />

      {/*Agrupamento de tudo */}

      <div className="groupAll flex column">
        {/*Tags*/}
        <div className="groupTags flex column">
          <Tag title="Brasília - Asa Norte" />
          <Tag title="Brasília - Sudoeste" />
        </div>

        {/* Banner */}
        <div id="banner">
          <h1 className="flex column">
            Pneu <span>mais barato</span> de brasília
          </h1>

          {/* Banner Options */}
          <ul className="flex column">
            <li>
              <FiDollarSign size={24} />
              Parcelamento em até 12x
            </li>
            <li>
              <FiSend size={24} />
              Atendimento imediato
            </li>
            <li>
              <TiInputChecked size={24} />5 anos de garantia
            </li>
            <li>
              <GrPowerReset size={24} />
              Troca gratuita
            </li>
          </ul>

          <div className="flag">
            <div className="flag-time flex column">
              <div className="flagTimer flex">
                <p id="hours">{hours}</p>
                <span>:</span>
                <p id="minutes">{minutes}</p>
                <span>:</span>
                <p id="seconds">{seconds}</p>
              </div>
              <p>Queima de estoque!</p>
            </div>
          </div>

          {/* Cards Slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              769: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PneusCard title="Aro 13" />
            </SwiperSlide>

            <SwiperSlide>
              <PneusCard title="Aro 14" />
            </SwiperSlide>

            <SwiperSlide>
              <PneusCard title="Aro 15" />
            </SwiperSlide>
          </Swiper>

          {/* Logo Sliders */}

          <LogoSlider />

        </div>
          {/* Pneus for sale */}

          <section className="pneusForSale">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                769: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <PneusCard title="Aro 13" />
              </SwiperSlide>

              <SwiperSlide>
                <PneusCard title="Aro 14" />
              </SwiperSlide>

              <SwiperSlide>
                <PneusCard title="Aro 15" />
              </SwiperSlide>
            </Swiper>
          </section>

        {/*Services*/}

        <section className="services">
            <div className="flex column">
              <h3 className="flex">Serviços</h3>
            </div>
          <div className="backgroundServices">
              <ServicesSlider />
          </div>
        </section>

        {/* Map */}

        <section className="locale flex column">
          <h3>Estamos <span>perto</span> de você. Venha nos conhecer!</h3>
          <Map />
        </section>
      </div>

      <Footer />

    </Container>
  );
}
