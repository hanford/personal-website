import { Component, Fragment } from 'react';
import styled from 'react-emotion';
import Observer from 'react-intersection-observer';

if (typeof window !== 'undefined') {
  require('intersection-observer');
}

export class Screen extends Component {
  state = {
    hideNavbar: true,
  };

  backToTop = event => {
    window.scrollTo(0, 0);
  };

  render() {
    const { scale, children } = this.props;

    return (
      <Fragment>
        <Navbar hide={this.state.hideNavbar} onClick={this.backToTop}>
          Back to top
        </Navbar>

        <Observer onChange={hideNavbar => this.setState({ hideNavbar })}>
          <SrollMeasure />
        </Observer>

        <Container scale={scale}>
          <Card>{children}</Card>
        </Container>
      </Fragment>
    );
  }
}

const SrollMeasure = styled.div`
  width: 100%;
  height: 1px;
`;

const Container = styled.div`
  max-width: 100%;
  padding: 8rem 2rem;
  will-change: transform;
  transform: scale(${({ scale }) => scale});

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

const Card = styled.div`
  width: 76rem;
  max-width: 100%;
  color: #32325d;
  padding: 4rem;
  position: relative;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.4rem;
  box-shadow: 0 1rem 3.5rem rgba(0, 0, 0, 0.2);

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

const Navbar = styled.nav`
  width: 100%;
  position: fixed;
  height: 6rem;
  z-index: 100;
  top: 0;
  font-weight: 900;
  color: #d40052;
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.75) !important;

  transform: translateY(${({ hide }) => (hide ? -6 : 0)}rem);
  transition: all 0.4s;
`;
