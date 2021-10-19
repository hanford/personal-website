import Link from "next/link";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <>
    <Link href="/">
      <a>&larr; Back</a>
    </Link>

    <div className="component">{children}</div>

    <style jsx>{`
      a {
        display: block;
        position: fixed;
        z-index: 2;
        top: 1rem;
        left: 1rem;
        padding: 8px;
        text-align: center;
        background-color: white;
        font-size: 16px;
        text-decoration: none;
        box-shadow: 0 0rem 2rem rgba(0, 0, 0, 0.15);
        border-radius: 0.4rem;
        cursor: pointer;
        font-family: apple-system, BlinkMacSystemFont;
      }

      @media (prefers-color-scheme: dark) {
        a {
          background-color: black;
          color: white;
        }
      }

      .component {
        display: flex;
        max-width: 100%;
        justify-content: center;
        text-align: center;
        font-size: 1.6rem;
      }
    `}</style>
  </>
);

export default Container;
