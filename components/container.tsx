import Link from 'next/link';
import * as React from 'react';
import styled from 'react-emotion';

export const Container = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    <Link href="/">
      <BackButton>Back</BackButton>
    </Link>

    <Component>{children}</Component>
  </React.Fragment>
);

export default Container;

const BackButton = styled.a`
  display: block;
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 16px;
  text-align: center;
  background-color: white;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 0rem 2rem rgba(0, 0, 0, 0.15);
  border-radius: 0.4rem;
  cursor: pointer;
`;

const Component = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  overflow: hidden !important;
  font-size: 1.6rem;
`;
