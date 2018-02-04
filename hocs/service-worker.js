import hoistStatics from 'hoist-non-react-statics'
import { PureComponent } from 'react'

export default function withServiceWorker (Component) {
  class withServiceWorkerComponent extends PureComponent {
    componentDidMount () {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => console.info('service worker registration successful'))
          .catch(err => console.warn('service worker registration failed', err.message))
      }
    }

    render () {
      return (
        <Component {...this.props} />
      )
    }
  }

  return hoistStatics(withServiceWorkerComponent, Component)
}
