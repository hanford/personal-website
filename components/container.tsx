import Link from "next/link";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <>
    <Link href="/">
      <a>Back</a>
    </Link>

    <div className="component">{children}</div>
    <style jsx>{`
      a {
        display: block;
        position: fixed;
        top: 1rem;
        left: 1rem;
        padding: 16px;
        text-align: center;
        background-color: white;
        font-size: 16px;
        text-decoration: none;
        box-shadow: 0 0rem 2rem rgba(0, 0, 0, 0.15);
        border-radius: 0.4rem;
        cursor: pointer;
      }

      @media (prefers-color-scheme: dark) {
        a {
          background-color: transparent;
        }
      }

      .component {
        display: flex;
        max-width: 100%;
        height: 100%;
        justify-content: center;
        text-align: center;
        font-size: 1.6rem;
      }
    `}</style>
  </>
);

export default Container;
