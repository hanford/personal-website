import GitHub from "github-api";
import { Fragment } from "react";
import styled from "react-emotion";
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

function Projects({ repos }: Props) {
  return (
    <Fragment>
      <Head title="Projects | Jack Hanford" />

      <Screen>
        <BackButton />

        <Title>Projects</Title>

        <p>
          Lately I've been obssessed with open source software which I keep on{" "}
          <Anchor href="https://github.com/hanford" target="_blank">
            GitHub
          </Anchor>
          . I've been writing JavaScript professionally for around 4 years, and
          have become an expert with some of the latest and greatest frontend
          frameworks including{" "}
          <Anchor
            href="https://www.npmjs.com/package/virtual-dom"
            target="_blank"
          >
            virtual-dom
          </Anchor>
          ,{" "}
          <Anchor href="https://angular.io" target="_blank">
            AngularJS
          </Anchor>
          ,{" "}
          <Anchor href="https://facebook.github.io/react" target="_blank">
            ReactJS
          </Anchor>{" "}
          and most recently{" "}
          <Anchor href="https://github.com/zeit/next.js" target="_blank">
            Next.js
          </Anchor>
          .
        </p>

        {repos.map(
          ({
            name,
            id,
            description,
            stargazers_count: stars,
            language,
            html_url: html
          }) => (
            <Article
              key={id}
              path={html}
              name={name}
              about={description}
              stars={stars}
              language={language}
            />
          )
        )}
      </Screen>
    </Fragment>
  );
}

Projects.getInitialProps = async () => {
  const { data } = await me.listRepos();

  if (!data) {
    return {
      repos: []
    };
  }

  const myRepos = data.filter(
    ({ fork, owner, stargazers_count: stars }) =>
      owner.login === USER_NAME && !fork && stars > 0
  );

  const repos = sortOn(myRepos, "-stargazers_count");

  return {
    repos
  };
};

export default withSegment(Projects);

const Anchor = styled.a`
  color: #d40052;
  font-weight: 600;
  text-decoration: underline;
`;
