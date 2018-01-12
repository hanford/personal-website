import styled from 'react-emotion'

const TitleComponent = styled.h1`
  letter-spacing: 0.03em;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
`

export const Title = ({ children }) => (
  <TitleComponent>{children}</TitleComponent>
)

export default Title
