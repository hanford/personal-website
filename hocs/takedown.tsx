import hoistStatics from "hoist-non-react-statics";
import { Component as RC } from "react";
import Drawer from "react-drag-drawer";

import requestCallback from "request-callback";

interface State {
  open: boolean;
}

export default function withTakedown(Component) {
  class WithTakedownComponent extends RC<void, State> {
    state = {
      open: false,
    };

    toggleDrawer = () => {
      this.setState((prevState) => {
        return {
          open: !prevState.open,
        };
      });
    };

    componentDidMount() {
      requestCallback(this.toggleDrawer);
    }

    render() {
      return (
        <>
          <Drawer
            onRequestClose={this.toggleDrawer}
            open={this.state.open}
            modalElementClass={"takedown"}
          >
            <h1 className="emoji">😥</h1>
            <div className="text">
              On 1/28/17 I received an email informing me that this extension
              was breaking chrome's terms of service around copyright
              infringement. I've since decided to remove Instachrome and
              UberChrome from the chrome web store as a result - however the
              code will continue to live on{" "}
              <a href="https://github.com/hanford">Github</a>.
            </div>
            <button onClick={this.toggleDrawer}>Got it</button>
          </Drawer>

          <Component {...this.props} />
          <style jsx>{`
            .emoji {
              font-size: 6rem;
            }

            .text {
              font-size: 1.6rem;
            }

            button {
              padding: 1.6rem;
              border: 2px solid grey;
              background-color: transparent;
              width: 100%;
              border-radius: 0.4rem;
              font-size: 1.6rem;
              cursor: pointer;
              margin-top: 2rem;
            }

            @media (prefers-color-scheme: dark) {
              button,
              a {
                color: white;
              }
            }

            :global(.takedown) {
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
            }
            @media (prefers-color-scheme: dark) {
              :global(.takedown) {
                background-color: #545454;
              }
            }
          `}</style>
        </>
      );
    }
  }

  return hoistStatics(WithTakedownComponent, Component);
}
