import styled from 'react-emotion'

const Hero = styled.img`
  width: 60rem;
  max-width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  border: 0;
`

export const HeroImage = ({ src }) => (
  <Hero src={src} />
)

export default HeroImage
