import { Container } from './styles'


export function Button({ text, icon:Icon }){
  return(
    <Container 
    type="button"
    className="flex"
    >
      { Icon && <Icon color="#FFFFFF" size={30}/>}
      <p>{text}</p>
    </Container>
  )
}