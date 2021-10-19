import Link from "next/link";

import { Head } from "../components";
import withSegment from "../hocs/segment";

function Snapchat() {
  return (
    <Container>
      <Head title="Snapchat | Jack Hanford" />
      <div className="outer">
        <div className="inner">
          <img src="../static/snapcode.png" className="snapcode" />

          <div>
            <Link href="/">
              <Back>Back</Back>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = (props) => {
  return (
    <>
      <div {...props} className="container" />

      <style jsx>{`
        :global(.snapcode) {
          max-width: 20rem;
          flex-grow: 0;
        }

        .outer {
          max-width: 100%;
          width: 100%;
          background-color: white;
          color: rgba(0, 0, 0, 0.8);
          padding: 2rem 0;
          margin-top: 6rem;
          min-height: 60rem;
        }

        @media (prefers-color-scheme: dark) {
          .outer {
            color: rgba(255, 255, 255, 0.9);
            background-color: transparent;
          }
        }

        .inner {
          display: flex;
          flex-direction: column;
          width: 80%;
          margin: 0 auto;
        }

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

// const Content = (props) => {
//   return (
//     <>
//       <div {...props} className="content" />
//       <style jsx>{`
//         .content {
//           max-width: 100%;
//           max-width: 20rem;
//           display: flex;
//           flex-direction: column;
//           align-self: center;
//         }
//       `}</style>
//     </>
//   );
// };

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
