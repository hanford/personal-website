export const TiltedBack = () => (
  <div>
    <div className='tiltedBack' />

    <style jsx>{`
      .tiltedBack {
        width: 150%;
        height: 110%;
        min-height: 62rem;
        background-color: white;
        transform: rotateZ(5deg);
        position: fixed;
        top: -15rem;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
      }
    `}</style>
  </div>
)

export default TiltedBack
