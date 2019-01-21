import { Component, Fragment, SyntheticEvent } from 'react';
import styled from 'react-emotion';
import Observer from 'react-intersection-observer';

if (typeof window !== 'undefined') {
  // tslint:disable-next-line
  require('intersection-observer');
}

interface Props {
  scale: number,
  children: React.ReactNode
}

export class Screen extends Component<Props>{
  state = {
    hideNavbar: true,
  };

  backToTop = (event: SyntheticEvent) => {
    window.scrollTo(0, 0);
  };

  handleVisibilityChange = (hideNavbar: boolean) => {
    this.setState({ hideNavbar })
  }

  render() {
    const { scale, children } = this.props;

    return (
      <Fragment>
        <Navbar hide={this.state.hideNavbar} onClick={this.backToTop}>
          Back to top
        </Navbar>

        <ScrollMeausure onChange={this.handleVisibilityChange} />

        <Container scale={scale}>
          <Card>{children}</Card>
        </Container>
      </Fragment>
    );
  }
}

const ScrollMeausure = styled(Observer)`
  width: 100%;
  height: 1px;
`;

const Container = styled.div`
  max-width: 100%;
  padding: 8rem 2rem;
  will-change: transform;
  transform: scale(${({ scale }: { scale: number }) => scale});

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

  transform: translateY(${({ hide }: { hide: boolean }) => (hide ? -6 : 0)}rem);
  transition: all 0.4s;
`;
