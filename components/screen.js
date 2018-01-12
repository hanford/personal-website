import styled from 'react-emotion'

export const Screen = ({ children, scale = 1 }) => (
  <Container scale={scale}>
    <Card>
      {children}
    </Card>
  </Container>
)

const Container = styled.div`
  max-width: 100%;
  padding: 8rem 2rem;
  animation: fadeIn 0.4s linear;
  transform-origin: 50% 50%;
  transform: scale(${({ scale }) => scale});

  @media(max-width: 767px) {
    padding: 2rem;
  }
`

const Card = styled.div`
  width: 76rem;
  max-width: 100%;
  color: #32325d;
  padding: 4rem;
  position: relative;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: 0 1rem 3.5rem rgba(0,0,0,0.2);

  @media(max-width: 767px) {
    padding: 2rem;
  }
`
