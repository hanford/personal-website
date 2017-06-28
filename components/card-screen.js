export const Screen = ({ children }) => (
  <div className='card-container'>
    <div className='card'>
      {children}
    </div>

    <style jsx>{`
      .card-container {
        max-width: 100%;
        padding: 8rem 2rem;
        animation: fadeIn 0.4s linear;
      }

      @media(max-width: 767px) {
        .card-container {
          padding: 2rem;
        }
      }

      .card {
        max-width: 55rem;
        color: #32325d;
        padding: 4rem;
        position: relative;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.4rem;
        box-shadow: 0 1rem 3.5rem rgba(0,0,0,0.2);
      }

      @media(max-width: 767px) {
        .card {
          padding: 2rem;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </div>
)

export default Screen
