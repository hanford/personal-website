interface Props {
  toggle?: () => void;
}

export const SocialModal = ({ toggle }: Props) => (
  <>
    <div className="content">
      <ul>
        <a className="anchor" target="_blank" href="https://github.com/hanford">
          Github
        </a>

        <a
          className="anchor"
          target="_blank"
          href="https://www.npmjs.com/~hanford"
        >
          NPM
        </a>
        <a
          className="anchor"
          target="_blank"
          href="https://www.twitter.com/jackhanford"
        >
          Twitter
        </a>
        <a
          className="anchor"
          target="_blank"
          href="https://www.instagram.com/jackhanford"
        >
          Instagram
        </a>
        <a className="anchor" target="_blank" href="/snapchat">
          Snapchat
        </a>
        <a
          className="anchor"
          target="_blank"
          href="https://facebook.com/jackhanford"
        >
          Facebook
        </a>
        <a
          className="anchor"
          target="_blank"
          href="mailto:jackhanford@gmail.com"
        >
          Email
        </a>

        <a
          className="anchor"
          target="_blank"
          href="https://www.linkedin.com/in/jack-hanford-98352761/"
        >
          Linkedin
        </a>

        <div className="item" onClick={toggle}>
          Close
        </div>
      </ul>
    </div>
    <style jsx>{`
      .content {
        width: 50rem;
        max-width: 100%;
        margin: 0 auto;
        position: relative;
        font-size: 1.6rem;
      }
      ul {
        min-width: 32rem;
        padding-left: 0;
        list-style: none;
      }
      .item {
        padding: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: black;
        border-radius: 1rem;
      }

      @media (prefers-color-scheme: dark) {
        .item {
          color: rgba(255, 255, 255, 0.9);
        }
      }

      .item:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .anchor {
        color: black;
        text-decoration: none;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
      }
      @media (prefers-color-scheme: dark) {
        .anchor {
          color: rgba(255, 255, 255, 0.9);
        }
      }

      .anchor:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    `}</style>
  </>
);

export default SocialModal;
