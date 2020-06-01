import Link from "next/link";
import styled from "react-emotion";

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
    <Container href={path} target="_blank">
      <Title>{name}</Title>
      <About>{about}</About>

      <Content style={{ display: language ? "flex" : "none" }}>
        <Other>⭐️ {stars}</Other>
        <div style={{ marginLeft: "1rem" }}>·</div>
        <Other style={{ marginLeft: "1rem" }}>{language}</Other>
      </Content>
    </Container>
  );

  return isExternal ? children : <Link href={path}>{children}</Link>;
};

const Container = styled.a`
  display: block;
  transition: all 0.2s linear;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  text-decoration: none;
  color: black;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.8);
  }

  &:hover {
    border: 1px solid #d40052;
  }
`;

const Title = styled.h4`
  color: #d40052;
  margin: 0;
  font-size: 1.8rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Other = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.75;

  @media (prefers-color-scheme: dark) {
    opacity: 1;
  }
`;

const About = styled.p`
  margin: 0;
`;

export default Article;
