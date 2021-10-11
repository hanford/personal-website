import Link from "next/link";

interface Props {
  path: string;
  name: string;
  about: string;
  stars?: string;
  language?: string;
  isExternal: boolean;
}

export const Article = ({
  path,
  name,
  about,
  stars = "",
  language = "",
  isExternal,
}: Props) => {
  const children = (
    <a className="container" href={path} target="_blank">
      <div className="title">{name}</div>
      <p className="about">{about}</p>

      <div className="content" style={{ display: language ? "flex" : "none" }}>
        <div className="outer">⭐️ {stars}</div>
        <div style={{ marginLeft: "1rem" }}>·</div>
        <div className="outer" style={{ marginLeft: "1rem" }}>
          {language}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: block;
          transition: all 0.2s linear;
          border-radius: 0.4rem;
          border: 1px solid transparent;
          padding: 1rem;
          margin-left: -1rem;
          margin-right: -1rem;
          text-decoration: none;
          color: black;
        }

        .container:hover {
          border: 1px solid #d40052;
        }

        .title {
          color: #d40052;
          margin: 0;
          font-size: 1.8rem;
        }

        .about {
          margin: 0;
        }

        .content {
          display: flex;
          align-items: center;
        }

        .outer {
          font-size: 1.2rem;
          font-weight: bold;
          opacity: 0.75;
        }

        @media (prefers-color-scheme: dark) {
          .container {
            color: rgba(255, 255, 255, 0.8);
          }

          .title {
            color: white;
          }

          .outer {
            opacity: 1;
          }
        }
      `}</style>
    </a>
  );

  return isExternal ? children : <Link href={path}>{children}</Link>;
};

export default Article;
