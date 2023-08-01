import Container from 'react-bootstrap/Container'

import "../assets/styles/jumbutron.css"

export default function Jumbotron() {
  return (
    <Container
      fluid
      className="p-5 bg-light jumbotron"
    >
      <Container>
        <JumbotronTitle />
        <JumbotronSubTitle />
      </Container>
    </Container>
  )
}


const JumbotronTitle = () => {
  return(
    <h1 id='jumbotron-title'>Dúvida no plantio?</h1>
  )
}

const JumbotronSubTitle = () => {
  return(
    <h2 id='jumbotron-subtitle'>Com poucos cliques aqui você descobre o que precisa.</h2>
  )
}
