import styled from 'react-emotion';

const FrameComponent = styled.iframe`
  width: 60rem;
  max-width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  border: 0;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Frame = ({ src }) => (
  <FrameComponent
    width="100%"
    height="360"
    src={src}
    frameborder="0"
    allowfullscreen
  />
);

export default Frame;
