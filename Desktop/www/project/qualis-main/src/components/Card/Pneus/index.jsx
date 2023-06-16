import { Container } from './styles'

import { Button } from '../../Button'

import { MdHourglassEmpty } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'

import pneuCard from '../../../assets/pneuCard.png'

export function PneusCard({ title }){
    return(
        <Container className='flex column'>
            <h3>{title}</h3>

            <div className='flex column'>

                <div className='priceGroup  flex'>
                    <img src="" alt="" />

                    <div className='price'>
                        <p>De:</p>
                        <strong>R$599</strong>
                        <p>Por:</p>
                        <strong>R$429</strong>
                    </div>
                </div>

                <div className='time flex'> 
                    <MdHourglassEmpty size={24} color='#E5AA33'/>
                    <p>restam 4 unidades</p>
                </div>

                <button>
                    <a href="#" className='flex'>
                        <FiPhoneCall />
                        Peça já!
                    </a>
                </button>

                <p>Garantia de 5 anos</p>

            </div>
        </Container>
    )
}