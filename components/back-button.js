import Link from 'next/link'
import styled from 'react-emotion'

const Anchor = styled.a`
  color: #d40052;
  font-weight: 600;
  text-decoration: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 3rem;
`

export const BackButton = () => (
  <Link href='/'>
    <Anchor>×</Anchor>
  </Link>
)
