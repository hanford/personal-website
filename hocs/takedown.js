import hoistStatics from 'hoist-non-react-statics';
import { PureComponent, Fragment } from 'react';
import styled, { css } from 'react-emotion';
import requestCallback from 'request-callback';
import Drawer from 'react-drag-drawer';

export default function withTakedown(Component) {
  class withTakedownComponent extends PureComponent {
    state = {
      open: false,
    };

    toggleDrawer = () => {
      this.setState(() => {
        return {
          open: !this.state.open,
        };
      });
    };

    componentDidMount() {
      requestCallback(this.toggleDrawer);
    }

    render() {
      return (
        <Fragment>
          <Drawer
            onRequestClose={this.toggleDrawer}
            open={this.state.open}
            modalElementClass={TakeDown}
          >
            <Emoji>😥</Emoji>
            <Text>
              On 1/28/17 I received an email informing me that this extension
              was breaking chrome's terms of service around copyright
              infringement. I've since decided to remove Instachrome and
              UberChrome from the chrome web store as a result - however the
              code will continue to live on{' '}
              <a href="https://github.com/hanford">Github</a>.
            </Text>
            <Button onClick={this.toggleDrawer}>Got it</Button>
          </Drawer>

          <Component {...this.props} />
        </Fragment>
      );
    }
  }

  return hoistStatics(withTakedownComponent, Component);
}

const TakeDown = css`
  position: absolute;
  overflow: hidden;
  width: 100%;
  max-width: 767px;
  min-height: 100%;
  position: relative;
  margin-top: 20rem;
  background-color: white;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 1rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Emoji = styled.h1`
  font-size: 6rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
`;

const Button = styled.button`
  padding: 1.6rem;
  border: 2px solid grey;
  background-color: transparent;
  width: 100%;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  margin-top: 2rem;
`;
