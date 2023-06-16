import { Container } from './styles'
import { FiMapPin } from 'react-icons/fi'

export function Tag({title}){
  return(
    <Container className='flex'>
      <FiMapPin />
      <p>{title}</p>
    </Container>
  )
}