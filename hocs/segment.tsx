import hoistStatics from 'hoist-non-react-statics';
import Segment from 'load-segment';
import * as React from 'react';

export default Component => {
  class WithSegment extends React.Component {
    componentDidMount() {
      Segment({ key: 'ZxJCBTbXZd76MG9R33zSOb43ULCjknzN' });
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return hoistStatics(WithSegment, Component);
};
