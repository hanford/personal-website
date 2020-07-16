import styled from "react-emotion";

interface Props {
  toggle?: () => void;
}

export const SocialModal = ({ toggle }: Props) => (
  <Content>
    <List>
      <Link link="https://github.com/hanford" text="Github" />

      <Link link="https://www.npmjs.com/~hanford" text="NPM" />

      <Link link="https://www.twitter.com/jackhanford" text="Twitter" />

      <Link link="https://www.instagram.com/jackhanford" text="Instagram" />

      <Link link="/snapchat" text="Snapchat" />

      <Link link="https://facebook.com/jackhanford" text="Facebook" />

      <Link link="mailto:jackhanford@gmail.com" text="Email" />

      <Link
        link="https://www.linkedin.com/in/jack-hanford-98352761/"
        text="Linkedin"
      />

      <Item onClick={toggle}>Close</Item>
    </List>
  </Content>
);

interface LinkProps {
  text: string;
  link: string;
}

const Link = ({ text, link }: LinkProps) => (
  <Anchor href={link} target="_blank">
    {text}
  </Anchor>
);

export default SocialModal;

const Content = styled.div`
  width: 50rem;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  font-size: 1.6rem;
`;

const List = styled.ul`
  min-width: 32rem;
  padding-left: 0;
  list-style: none;
`;

const Item = styled.li`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: black;
  border-radius: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const Anchor = styled.a`
  color: black;
  text-decoration: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
