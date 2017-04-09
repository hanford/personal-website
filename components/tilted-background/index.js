export default () => (
  <div>
    <div className='tiltedBack' />

    <style jsx>{`
      .tiltedBack {
        width: 150%;
        height: 110%;
        background-color: white;
        transform: rotateZ(5deg);
        position: absolute;
        top: -20rem;
        left: -118px;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
      }
    `}</style>
  </div>
)
