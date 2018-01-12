import styled from 'react-emotion'

const Button = styled.a`
  display: block;
  line-height: 4rem;
  padding: 0 1.4rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.11), 0 0.1rem 0.3rem rgba(0,0,0,.08);
  background: #fff;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: #32325d;
  text-decoration: none;
  border: 0px;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease-out;
  border: 2px solid #db594b;
  color: #db594b;
  margin: 4rem auto 0;
  font-weight: bold;
`

export const CtaButton = ({ link, children }) => (
  <Button
    target='_blank'
    href={link}
  >
    {children}
  </Button>
)

export default CtaButton
