import { Container } from './styles'
import { FiPhoneCall } from 'react-icons/fi'

export function ServicesCard({ title, image, imgDescription, description }){
  return(
    <Container className="flex">
        <h1>{title}</h1>
        <img src={image} alt={imgDescription} />
        <p>{description}</p>
        <a href="tel:+5561981586317">
          <FiPhoneCall size={20}/>
          Agendar serviço
        </a>
    </Container>
  )
}