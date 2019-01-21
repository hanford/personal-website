import styled, { css } from "react-emotion";

interface Props {
  toggle?: () => void
}

export const SocialModal = ({ toggle }:  Props) => (
  <Content>
    <List>
      <Link
        link="https://github.com/hanford"
        text="Github"
        icon="ion-social-github"
      />

      <Link
        link="https://www.npmjs.com/~hanford"
        text="NPM"
        icon={NPM_ICON}
      />

      <Link
        link="https://www.twitter.com/jackhanford"
        text="Twitter"
        icon="ion-social-twitter-outline"
      />

      <Link
        link="https://www.instagram.com/jackhanford"
        text="Instagram"
        icon="ion-social-instagram-outline"
      />

      <Link
        link="/snapchat"
        text="Snapchat"
        icon="ion-social-snapchat-outline"
      />

      <Link
        link="https://facebook.com/jackhanford"
        text="Facebook"
        icon="ion-social-facebook-outline"
      />

      <Link
        link="mailto:jackhanford@gmail.com"
        text="Email"
        icon="ion-ios-email-outline"
      />

      <Link
        link="https://www.linkedin.com/in/jack-hanford-98352761/"
        text="Linkedin"
        icon="ion-social-linkedin-outline"
      />

      <Item onClick={toggle}>
        <i
          style={{ fontSize: "2rem", marginRight: "2rem" }}
          className="ion-close-round"
        />{" "}
        Close
      </Item>
    </List>
  </Content>
);

interface LinkProps {
  icon: string,
  text: string,
  link: string 
}

const Link = ({ icon, text, link }: LinkProps) => (
  <Item>
    <Anchor href={link} target="_blank">
      <i
        style={{ fontSize: "2rem", marginRight: "2rem" }}
        className={`${icon}`}
      />{" "}
      {text}
    </Anchor>
  </Item>
);

export default SocialModal;

const NPM_ICON = css`
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 18 7"><path fill="#000" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/><polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/><path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/><polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2rem;
  height: 2rem;
  width: 2rem;
`

const Content = styled.div`
  width: 50rem;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  font-size: 1.6rem;
`;

const Close = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  color: red;
  z-index: 5;
  padding: 1rem;
  font-size: 1.4rem;
  padding-left: 3rem;
  width: 100%;
  text-align: left;
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
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`;
