import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import './ContactLinks.css';

// Mail, github, linkedin
const links = [
  {
    icon: <TiMail />,
    href: 'mailto:estelle.eliakon@gmail.com'
  },
  {
    icon: <FaGithubAlt />,
    href: 'https://github.com/Eliakon'
  },
  {
    icon: <TiSocialLinkedin />,
    href: 'https://www.linkedin.com/in/estelle-martinez-9772b34a/'
  }
];

const SingleLink = props => (
  <a href={props.href} target="_blank">{props.icon}</a>
);

const ContactLinks = props => (
  <div className="contact-links">
    <span>Get in touch</span>
    <nav>
      {links.map((item, i) => <SingleLink key={`linkitem${i}`} {...item} />)}
    </nav>
  </div>
);

export default ContactLinks;
