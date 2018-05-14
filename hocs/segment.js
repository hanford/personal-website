import hoistStatics from 'hoist-non-react-statics'
import { PureComponent } from 'react'
import Segment from 'load-segment'

export default Component => {
  class withSegment extends PureComponent {
    componentDidMount () {
      Segment({key: 'ZxJCBTbXZd76MG9R33zSOb43ULCjknzN'})
    }

    render () {
      return (
        <Component {...this.props} />
      )
    }
  }

  return hoistStatics(withSegment, Component)
}
