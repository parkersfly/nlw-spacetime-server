import { Container } from './styles'
export function Map(){
  return(
    <Container>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.579782841618!2d-47.89131662389271!3d-15.773353922439227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b5020ef546f%3A0xfc92170cc89fe457!2sQualis%20-%20Seu%20Centro%20Automotivo%20na%20Asa%20Norte!5e0!3m2!1spt-BR!2sbr!4v1686758466621!5m2!1spt-BR!2sbr" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </Container>
  )
}