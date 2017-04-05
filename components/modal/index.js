import React, { PureComponent } from 'react'

import Photo from './frame'

export default class extends PureComponent {
  dismiss (e) {
    if (this._shim === e.target ||
       this._photoWrap === e.target) {
      if (this.props.onDismiss) {
        this.props.onDismiss()
      }
    }
  }

  render () {
    return (
      <div ref={el => (this._shim = el)} className='shim' onClick={(e) => this.dismiss(e)}>
        <div ref={el => (this._photoWrap = el)} className='project'>
          <Photo id={this.props.id} />
        </div>
        <style jsx>{`
          .shim {
            position: fixed;
            background: rgba(0,0,0,.65);
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            z-index: 5;
          }

          .project {
            position: absolute;
            top: 50%;
            width: 100%;
            text-align: center;
            margin-top: -25rem;
          }
        `}</style>
      </div>
    )
  }
}
