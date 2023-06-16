import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tags'
import { Footer } from '../../components/Footer'
import { LogoSlider } from '../../components/LogoSlider'
import { ServicesSlider } from '../../components/ServicesSlider'
import { Map } from '../../components/Map'

import { FiPhoneCall, FiDollarSign, FiSend } from 'react-icons/fi'
import { LuCalendarCheck } from 'react-icons/lu'
import { AiFillCar, AiFillStar } from 'react-icons/ai'
import { TiInputChecked } from 'react-icons/ti'
import { RiWhatsappFill } from 'react-icons/ri'


import gmail from '../../assets/gmail.svg'
import float from '../../assets/float.svg'
import bannerHome from '../../assets/bannerHome.svg'
import juntosNaOficina from '../../assets/juntosNaOficina.svg'


export function Home() {
  return (
    <Container>
      <Header />

      <button className="callMe flex">
        <a href="#">
          <FiPhoneCall size={20} color="White"/>
        </a>
      </button>

      <button className="whatsappLogo">
        <a href="#">
          <RiWhatsappFill size={24} color="white"/>
        </a>
        </button>

      <Content className='flex column'>
      <main className="flex column">
        <div className="welcome flex column">
          
          <div className="groupTags flex column">
          <Tag title="Brasília - Asa Norte"/>
          <Tag title="Brasília - Sudoeste"/>
          </div>

          <div className="welcomeText flex column">
            <div className="flex">
              <h1>Não deixe seu carro <span>parar</span> por falta de manutenção! Agende agora {<LuCalendarCheck  />} nosso serviço!</h1>
            </div>
            <p>Pneus, rodas, revisões, troca de óleo, alinhamento e mais! Dirija com tranquilidade sabendo que seu carro está em perfeitas condições.</p>
          </div>


          <Button icon={FiPhoneCall} text="Agendar serviços!"/>

        </div>

          <div className='options'>
            <ul className="flex column">
              <li>
                <FiDollarSign size={24}/>
                Parcelamento em até 12x
              </li>
              <li>
                <FiSend size={24}/>
                Atendimento imediato
              </li>
              <li>
                <TiInputChecked size={24}/>
                Garantia completa
              </li>
              <li>
                <AiFillCar size={24}/>
                Transporte gratuito de clientes
              </li>
            </ul>
          </div>


        <img src={juntosNaOficina} alt="" className="desktop"/>

      </main>

      <LogoSlider />

    <section className="services">
      <div className="flex">
        <h2>Serviços</h2>
      </div>

      {/* Cards Slider */}

      <ServicesSlider />

        
    </section>

      {/* Section rating */}

      <section className="rating flex column">
        <div className="rating-content flex column">
          <h3>Estamos entre as oficinas mais <span>bem</span> avaliadas no Google</h3>
          <div className="pointing flex">
            <img src={gmail} alt="" />
            <strong>4.6</strong>
            <div className="starWrapper flex">
              <AiFillStar size={24} color="#FFFD54"/>
              <AiFillStar size={24} color="#FFFD54"/>
              <AiFillStar size={24} color="#FFFD54"/>
              <AiFillStar size={24} color="#FFFD54"/>
              <AiFillStar size={24} color="#FFFD54"/>             
            </div>
          </div>
        </div>
        <div className="ratingUserGroup">
          <img src={float} alt="" />
        </div>
      </section>

      </Content>

      <section className="banner flex column">
        <h3>Somos um <span>novo</span> conceito em oficina automotiva</h3>
        <div className="bannerDetails flex">
          <img src={bannerHome} alt="" />
          <div className="bannerDescription flex column">
            <p className="desktop">Com um time de consultores treinados e especializados e focados em oferecer transparência, praticidade, conforto, custo-benefício e, principalmente, qualidade aos nossos clientes.</p>
            <p className="desktop">Entre os nossos maiores diferenciais, temos a supervisão de um Engenheiro Mecânico, que proporciona diagnósticos assertivos, soluções confiáveis e preços justos. Oficina mecânica de confiança é aqui!</p>
          </div>
        </div>
      </section>

      <section className="depositions">
        <div className="depositionsTitle flex">
          <h3>Depoimentos</h3>
        </div>
        <div className="depositionsVideo flex">
          <div>
            {/* Vídeo */}
          </div>
        </div>
      </section>

      <section className="locale">

        <h3>Estamos <span>perto</span> de você. Venha nos conhecer!</h3>

        <div className="map flex">
          <div className="mapDivisorOne desktop">
            <p>Localização</p>
          </div>
          <div className="mapDivisorTwo">
            <Map />
          </div>
        </div>
      </section>

      <Footer />
    </Container>
  )
}
