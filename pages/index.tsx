import Link from "next/link";
import React, { useEffect, useState } from "react";
import Drawer from "react-drag-drawer";
import styled, { css } from "react-emotion";

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
    <Body>
      <Head />

      <Screen>
        <Emoji>👋</Emoji>
        <Intro>
          <div>
            Hi I'm <span style={{ fontWeight: 600 }}>Jack Hanford</span>
          </div>
          <div>
            I'm a software engineer at{" "}
            <Anchor href="https://lattice.com" target="_blank">
              lattice
            </Anchor>
            .
          </div>
        </Intro>

        <Row>
          <Link prefetch={true} href="/projects">
            <Button>Projects</Button>
          </Link>
          <Button onClick={toggle}>Contact me</Button>
        </Row>

        <Title>Projects</Title>

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
        modalElementClass={Card}
      >
        <SocialModal toggle={toggle} />
      </Drawer>
    </Body>
  );
}

export default withSegment(Landing);

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  justify-content: center;
  flex-direction: column;
  font-size: 1.6rem;
`;

const Anchor = styled.a`
  color: #d40052;
  font-weight: 600;
  text-decoration: underline;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const Intro = styled.div`
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: 0.03em;
  margin: 1rem 0 2rem;

  & > div:first-child {
    margin-bottom: 2rem;
  }

  & > div:last-child {
    line-height: 2rem
    font-size: 1.6rem;
  }
`;

const Button = styled.button`
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

  @media (prefers-color-scheme: dark) {
    border: 2px solid rgba(255, 255, 255, 0.9);
    color: rgba(255, 255, 255, 0.9);
  }

  &:first-of-type {
    margin-right: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  margin: 1rem auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  margin: 4rem -1rem 1rem;
  font-size: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
  letter-spacing: 0.03em;
  font-weight: bold;
`;

const Card = css`
  background-color: white;
  border-radius: 0.4rem;
  position: relative;
  padding: 2rem;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-top: 20%;
  }
`;

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
    path: "/uber-chrome",
    name: "Uber chrome",
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
