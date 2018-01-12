import Drawer from 'react-drag-drawer'
import styled, { css } from 'react-emotion'

export const SocialModal = ({ toggle, open }) => (
  <Drawer
    open={open}
    onRequestClose={toggle}
    modalElementClass={Card}
  >
    <Content>
      <List>
        <Link
          link='https://github.com/hanford'
          text='Github'
          icon='ion-social-github'
        />

        <Link
          link='https://www.twitter.com/jackhanford'
          text='Twitter'
          icon='ion-social-twitter-outline'
        />

        <Link
          link='https://www.instagram.com/jackhanford'
          text='Instagram'
          icon='ion-social-instagram-outline'
        />

        <Link
          link='/snapchat'
          text='Snapchat'
          icon='ion-social-snapchat-outline'
        />

        <Link
          link='https://facebook.com/jackhanford'
          text='Facebook'
          icon='ion-social-facebook-outline'
        />

        <Link
          link='mailto:jackhanford@gmail.com'
          text='Email'
          icon='ion-ios-email-outline'
        />

        <Link
          link='https://www.linkedin.com/in/jack-hanford-98352761/'
          text='Linkedin'
          icon='ion-social-linkedin-outline'
        />

        <Close onClick={toggle}>Close</Close>
      </List>
    </Content>
  </Drawer>
)

const Link = ({ icon, text, link }) => (
  <Item>
    <Anchor href={link} target='_blank'>
      <i style={{fontSize: '2rem', marginRight: '2rem'}} className={`${icon}`} /> {text}
    </Anchor>
  </Item>
)

export default SocialModal

const Card = css`
  background-color: white;
  border-radius: 0.4rem;
  position: relative;

  @media(max-width: 767px) {
    width: 100%;
    height: 100%;
    margin-top: 20%;
  }
`

const Content = styled.div`
  width: 50rem;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`

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
`

const List = styled.ul`
  min-width: 32rem;
  padding-left: 0;
  list-style: none;
`

const Item = styled.li`
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`
