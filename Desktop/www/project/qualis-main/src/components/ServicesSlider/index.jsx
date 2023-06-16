import { Container } from './styles'
import rodas from '../../assets/cardsImg/rodas.svg'

import { ServicesCard } from '../Card/Services'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export function ServicesSlider(){
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        <ServicesCard 
        title="Pneus e Rodas"
        description="Oferecemos promoções imperdíveis de pneus, além de trabalharmos com TODAS as medidas das melhores marcas."
        image={rodas}
        />
        </SwiperSlide>

        <SwiperSlide>
        <ServicesCard 
        title="Pneus e Rodas"
        description="Oferecemos promoções imperdíveis de pneus, além de trabalharmos com TODAS as medidas das melhores marcas."
        image={rodas}
        />
        </SwiperSlide>

        <SwiperSlide>
        <ServicesCard 
        title="Pneus e Rodas"
        description="Oferecemos promoções imperdíveis de pneus, além de trabalharmos com TODAS as medidas das melhores marcas."
        image={rodas}
        />
        </SwiperSlide>

        <SwiperSlide>
        <ServicesCard 
        title="Pneus e Rodas"
        description="Oferecemos promoções imperdíveis de pneus, além de trabalharmos com TODAS as medidas das melhores marcas."
        image={rodas}
        />
        </SwiperSlide>
        
        
      </Swiper>
    </Container>
  )
}