import Link from "next/link";

import { Head } from "../components";
import withSegment from "../hocs/segment";

const Snapcode = (props) => {
  return (
    <>
      <img {...props} className="content" />
      <style jsx>{`
        .content {
          height: 20rem;
        }
      `}</style>
    </>
  );
};

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

const Container = (props) => {
  return (
    <>
      <div {...props} className="container" />
      <style jsx>{`
        .container {
          display: flex;
          max-width: 100%;
          justify-content: center;
          margin-top: 16rem;
        }
      `}</style>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <div {...props} className="content" />
      <style jsx>{`
        .content {
          max-width: 100%;
          max-width: 20rem;
          display: flex;
          flex-direction: column;
          align-self: center;
        }
      `}</style>
    </>
  );
};

const Back = (props) => {
  return (
    <>
      <button {...props} className="content" />
      <style jsx>{`
        .content {
          background-color: transparent;
          margin-top: 3rem;
          color: white;
          border: 0;
          font-size: 1.6rem;
          cursor: pointer;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default withSegment(Snapchat);
