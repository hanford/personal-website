import Link from "next/link";
import React, { useEffect, useState } from "react";
import Drawer from "react-drag-drawer";

import { Article, Emoji, Head, Screen, SocialModal } from "../components";
import withSegment from "../hocs/segment";

function Landing() {
  const [isExpanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(!isExpanded);

  useEffect(() => {
    function beforeInstallPrompt(event: any) {
      event.userChoice.then((choiceResult) => {
        // tslint:disable-next-line
        console.log(choiceResult.outcome);
      });
    }

    window.addEventListener("beforeinstallprompt", beforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallPrompt);
    };
  }, []);

  return (
    <>
      <div className="body">
        <Head />

        <Screen>
          <Emoji>👋</Emoji>
          <div className="intro">
            <div>
              <span style={{ fontWeight: 600 }}>Jack Hanford</span>
            </div>

            <div className="about">
              Staff software engineer at{" "}
              <a className="anchor" href="https://lattice.com" target="_blank">
                Lattice
              </a>
            </div>
          </div>

          <div className="row">
            <Link prefetch href="/projects">
              <button>Projects</button>
            </Link>
            <button onClick={toggle}>Contact me</button>
          </div>

          <div className="title">Projects</div>

          {projects.map((p) => (
            <Article
              key={p.name}
              path={p.path}
              name={p.name}
              about={p.about}
              isExternal={p.isExternal}
            />
          ))}
        </Screen>

        <Drawer
          open={isExpanded}
          onRequestClose={toggle}
          modalElementClass={"card"}
        >
          <SocialModal toggle={toggle} />
        </Drawer>
      </div>
      <style jsx>{`
        .body {
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          justify-content: center;
          flex-direction: column;
          font-size: 1.6rem;
        }

        .anchor {
          color: #d40052;
          font-weight: 600;
          text-decoration: none;
        }

        .intro {
          font-size: 2rem;
          line-height: 2rem;
          letter-spacing: 0.03em;
          margin: 1rem 0 2rem;
        }

        .intro > div:first-child {
          margin-bottom: 2rem;
        }

        .about {
          line-height: 2rem;
          font-size: 1.6rem;
        }

        button {
          display: block;
          line-height: 4rem;
          padding: 0 1.4rem;
          box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.1);
          border-radius: 0.4rem;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
          text-decoration: none;
          border: 0px;
          cursor: pointer;
          outline: none;
          transition: all 0.25s ease-out;
          border: 2px solid #db594b;
          color: #db594b;
          font-weight: bold;
          font-family: Brandon;
          width: 100%;
          background-color: transparent;
        }

        button:first-of-type {
          margin-right: 1rem;
        }

        .row {
          display: flex;
          margin: 1rem auto;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .title {
          margin: 4rem -1rem 1rem;
          font-size: 2rem;
          line-height: 2rem;
          padding: 0 1rem;
          letter-spacing: 0.03em;
          font-weight: bold;
        }

        :global(.card) {
          background-color: white;
          border-radius: 1rem;
          position: relative;
          padding: 2rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 767px) {
          :global(.card) {
            width: 100%;
            height: 100%;
            margin-top: 20%;
          }
        }

        @media (prefers-color-scheme: dark) {
          .anchor {
            color: rgba(255, 255, 255, 0.9);
          }

          button {
            border: 2px solid rgba(255, 255, 255, 0.9);
            color: rgba(255, 255, 255, 0.9);
          }

          :global(.card) {
            background-color: #545454;
            box-shadow: none;
          }
        }
      `}</style>
    </>
  );
}

export default withSegment(Landing);

const projects = [
  {
    path: "https://www.youtube.com/watch?v=JjRV-l9jSYE",
    name: "Rewriting Eaze.com with Next.js",
    isExternal: true,
    about:
      "On 4/28/18 I gave a ~15 minute talk at Zeit Day about my experience rewriting a large consumer facing website with Next.js",
  },
  {
    path: "https://trends.now.sh",
    name: "Trends ⭐️",
    isExternal: true,
    about:
      "Ultra high performance github trending PWA built with Next.js and GraphQL but only ~15 lines of client side Javascript",
  },
  {
    path: "/fast-flix",
    name: "Fast Flix 🍿",
    isExternal: false,
    about: "Change the playback rate of any video on netflix",
  },
  {
    path: "/uberchrome",
    name: "Uberchrome",
    isExternal: false,
    about: "A chrome extension allowing you to order an uber from your desktop",
  },
  {
    path: "/instachrome",
    name: "Instachrome",
    isExternal: false,
    about:
      "A chrome extension for browsing instagram with around 11,000 active users",
  },
  {
    path: "/chirp",
    name: "Chirp 🐦",
    isExternal: false,
    about: "A desktop twitter application built for all platforms",
  },
  {
    path: "https://react-drag-drawer.now.sh",
    name: "React Drag Drawer",
    isExternal: true,
    about:
      "Mobile first ReactJS modal component with native touch gesture support",
  },
  {
    path: "https://react-kanban.now.sh/",
    name: "React Kanban",
    isExternal: true,
    about:
      "Custom react drag and drop interface built trello style but with better animations",
  },
  {
    path: "/youtube-darkmode",
    name: "Youtube darkmode",
    isExternal: false,
    about:
      "Google was redesigning youtube and also adding darkmode, this enables it right now",
  },
];
