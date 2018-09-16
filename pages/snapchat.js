import Link from 'next/link';
import styled from 'react-emotion';

import { Head } from '../components';
import withSegment from '../hocs/segment';

const Container = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  margin-top: 16rem;
`;

const Content = styled.div`
  max-width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Back = styled.button`
  background-color: transparent;
  margin-top: 3rem;
  color: white;
  border: 0;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
`;

const Snapcode = styled.img`
  height: 20rem;
`;

function Snapchat() {
  return (
    <Container>
      <Head title="Snapchat | Jack Hanford" />
      <Content>
        <Snapcode src="../static/snapcode.png" />
        <Link href="/">
          <Back>Back</Back>
        </Link>
      </Content>
    </Container>
  );
}

export default withSegment(Snapchat);
