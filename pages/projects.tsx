import GitHub from "github-api";
import sortOn from "sort-on";

import { Article, BackButton, Head, Screen, Title } from "../components";
import withSegment from "../hocs/segment";

const USER_NAME = "hanford";
const gh = new GitHub({ token: process.env.GITHUB_ACCESS_TOKEN });
// tslint:disable-next-line
const me = gh.getUser(USER_NAME);

interface Repo {
  name: string;
  id: string;
  description: string;
  stargazers_count: string;
  language: string;
  html_url: string;
}

interface Props {
  repos: Array<Repo>;
}

function Projects({ repos = [] }: Props) {
  return (
    <>
      <Head title="Projects | Jack Hanford" />

      <Screen>
        <BackButton />

        <Title>Projects</Title>

        <p>
          Lately I've been obssessed with open source software which I keep on{" "}
          <a
            className="anchor"
            href="https://github.com/hanford"
            target="_blank"
          >
            GitHub
          </a>
          . I've been writing JavaScript professionally for around 4 years, and
          have become an expert with some of the latest and greatest frontend
          frameworks including{" "}
          <a
            className="anchor"
            href="https://www.npmjs.com/package/virtual-dom"
            target="_blank"
          >
            virtual-dom
          </a>
          ,{" "}
          <a className="anchor" href="https://angular.io" target="_blank">
            AngularJS
          </a>
          ,{" "}
          <a
            className="anchor"
            href="https://facebook.github.io/react"
            target="_blank"
          >
            ReactJS
          </a>{" "}
          and most recently{" "}
          <a
            className="anchor"
            href="https://github.com/zeit/next.js"
            target="_blank"
          >
            Next.js
          </a>
          .
        </p>

        {repos.map(
          ({
            name,
            id,
            description,
            stargazers_count: stars,
            language,
            html_url: html,
          }) => (
            <Article
              key={id}
              path={html}
              name={name}
              about={description}
              stars={stars}
              language={language}
              isExternal
            />
          )
        )}
      </Screen>

      <style jsx>{`
        .anchor {
          color: #d40052;
          font-weight: 600;
          text-decoration: underline;
        }
        @media (prefers-color-scheme: dark) {
          .anchor {
            color: white;
          }
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await me.listRepos();

  if (!data) {
    return {
      revalidate: 60,
      props: {
        repos: [],
      },
    };
  }

  const myRepos = data.filter(
    ({ fork, owner, stargazers_count: stars }) =>
      owner.login === USER_NAME && !fork && stars > 0
  );

  const repos = sortOn(myRepos, "-stargazers_count");

  return {
    revalidate: 60,
    props: {
      repos,
    },
  };
};

export default withSegment(Projects);
