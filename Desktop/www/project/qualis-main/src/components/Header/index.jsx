import { Container } from './styles'
import logo from '../../assets/logo.svg'

import { FiMenu } from 'react-icons/fi'

export function Header(){
  return(
    <Container>
      <nav className='flex'>
        
        <button className="mobile">
          <FiMenu size={32}/>
        </button>

        <div className="flex">
          <img src={logo} alt="" />
        </div>


         <ul className="desktop">
          <li><a href="#">Home</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Pneus</a></li>
          <li><a href="#">Óleo</a></li>
          <li><a href="#">Revisão</a></li>
         </ul>

      </nav>
    </Container>
  )
}