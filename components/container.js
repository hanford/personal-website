import styled from 'react-emotion'

export const Container = ({ children }) => (
  <Component>{children}</Component>
)

export default Container

const Component = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  overflow: hidden !important;
  font-size: 1.6rem;
`
