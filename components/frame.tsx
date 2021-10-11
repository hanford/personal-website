export const Frame = ({ src }: { src: string }) => (
  <>
    <iframe
      width="100%"
      height={360}
      src={src}
      frameBorder={0}
      allowFullScreen={true}
      className="frame"
    />

    <style jsx>{`
      .frame {
        width: 60rem;
        max-width: 80%;
        box-sizing: border-box;
        margin: 0 auto;
        box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.35);
        border-radius: 4px;
        border: 0;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    `}</style>
  </>
);

export default Frame;
