import Head from '../../components/head'

export default () => (
  <div className='container'>
    <Head />
    
    <img src='../static/snapcode.png' className='snapcode' />

    <style jsx>{`
      .container {
        display: flex;
        max-width: 100%;
        height: 100%;
        justify-content: center;
      }

      .snapcode {
        max-width: 100%;
        height: 20rem;
        display: flex;
        align-self: center;
      }
    `}</style>
  </div>
)
