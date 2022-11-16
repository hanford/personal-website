// import GitHub from "github-api";
import sortOn from "sort-on";

import { Article, Head, Card, Title, Container } from "../components";
// import withSegment from "../hocs/segment";

// const USER_NAME = "hanford";
// const gh = new GitHub({ token: process.env.GITHUB_ACCESS_TOKEN });
// tslint:disable-next-line
// const me = gh.getUser(USER_NAME);

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

function Projects(props: Props) {
  return (
    <>
      <Head title="Projects | Jack Hanford" />
      <Container>
        <div className="text-reset">
          <Card>
            <Title styles={{ marginBottom: 24 }}>Projects</Title>

            {/* <p>
              Lately I've been obssessed with open source software which I keep
              on{" "}
              <a
                className="anchor"
                href="https://github.com/hanford"
                target="_blank"
              >
                GitHub
              </a>
              . I've been writing JavaScript professionally for around 4 years,
              and have become an expert with some of the latest and greatest
              frontend frameworks including{" "}
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
            </p> */}

            <div className="col">
              <div className="row">
                <span>{capitalizeFirstLetter(props.runtime)} runtime</span>
                <span>
                  Rendered at{" "}
                  {new Date(props.renderedAt).toLocaleString("en-US", {
                    timeZone: "America/Los_Angeles",
                  })}
                </span>
              </div>

              <div className="row">
                <span>Server Generated UUID</span>
                <span>{props.uuid}</span>
              </div>
              {/* <div className="row">
                <span>Github API</span>
                <span>{props.status}</span>
              </div> */}
            </div>
            {/* {repos.map(
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
            )} */}
          </Card>
        </div>
      </Container>

      <style jsx>{`
        .text-reset {
          text-align: left;
        }
        .anchor {
          color: #d40052;
          font-weight: 600;
          text-decoration: underline;
        }

        .col {
          display: flex;
          flex-direction: column;
        }

        .row {
          display: flex;
          padding-top: 16px;
          padding-bottom: 16px;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .row:last-of-type {
          border-bottom: 0;
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

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.github.com/users/hanford/repos?per_page=100",
    {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.preview",
      },
    }
  );

  // const data = await res.json();
  // const filtered = data
  //   .filter((k) => !k.fork && k.stargazers_count > 0)
  //   .map(({ name, id, description, stargazers_count, language, html_url }) => ({
  //     name,
  //     id,
  //     description,
  //     stargazers_count,
  //     language,
  //     html_url,
  //   }));

  // if (!filtered.length) {
  //   return { props: { repos: [] } };
  // }

  return {
    props: {
      // repos: filtered,
      status: res.status,
      renderedAt: Date.now(),
      runtime: process.env.NEXT_RUNTIME,
      uuid: await fetch("https://uuid.rocks/plain").then((response) =>
        response.text()
      ),
    },
  };

  // return {
  //   props: {
  //     repos: [],
  //   },
  // };
  // const { data } = await me.listRepos();
  // if (!data) {
  //   return {
  //     revalidate: 60,
  //     props: {
  //       repos: [],
  //     },
  //   };
  // }
  // const myRepos = data.filter(
  //   ({ fork, owner, stargazers_count: stars }) =>
  //     owner.login === USER_NAME && !fork && stars > 0
  // );
  // const repos = sortOn(myRepos, "-stargazers_count");
  // return {
  //   revalidate: 60,
  //   props: {
  //     repos,
  //   },
  // };
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Projects;
