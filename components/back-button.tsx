import Link from "next/link";

export const BackButton = () => (
  <>
    <Link href="/">
      <a>×</a>
    </Link>

    <style jsx>{`
      a {
        color: #d40052;
        font-weight: 600;
        text-decoration: none;
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 3rem;
        cursor: pointer;
      }
    `}</style>
  </>
);
