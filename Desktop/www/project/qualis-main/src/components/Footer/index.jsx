import { Container } from './styles'
import { AiFillInstagram } from 'react-icons/ai'
import { SiMinutemailer } from 'react-icons/si'
import { FaMapMarkedAlt } from 'react-icons/fa'

export function Footer(){
  return(
    <Container>
      <div className='contact flex'>
        <div className='flex column'>
          <strong>Qualisdf</strong>

          <ul className="contactList flex column">
            <li>
              <AiFillInstagram color="white" size={20}/>
              <a href="#">qualisdf.ig</a>
            </li>
            <li>
              <SiMinutemailer color="white" size={20}/>
              <a href="#">qualisdfauto@gmail.com</a>
            </li>
            <li>
              <FaMapMarkedAlt color="white" size={20}/>
              SCLRN 705 Bloco D Loja 07 - Asa Norte
            </li>
          </ul>
        </div>
      </div>
      <p>Todos os direitos reservados @2023 - One production for Mks</p>
    </Container>
  )
}