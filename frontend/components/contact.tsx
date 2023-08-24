import Image from "next/image";

import * as IO5Icons from "react-icons/io5";
import avatar from "../public/avatar.png";

function Seperator() {
  return <div className="separator"></div>;
}

const CustomIO5Icon = ({ name }: { name: string }) => {
  const FaIcon = IO5Icons[name];
  if (!FaIcon) return <p>Icon not found!</p>;

  return <FaIcon />;
};

function SocialItem({ icon, href }: { icon: string; href: string }) {
  return (
    <li className="social-item">
      <a href={href} className="social-link">
        <CustomIO5Icon name={icon} />
      </a>
    </li>
  );
}

function ContactItem({
  icon,
  title,
  text,
  href,
}: {
  icon: string;
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <li className="contact-item">
      <div className="icon-box">{<CustomIO5Icon name={icon} />}</div>

      <div className="contact-info">
        <p className="contact-title">{title}</p>

        <a href={href} className="contact-link">
          {text}
        </a>
      </div>
    </li>
  );
}

export default function Contact() {
  return (
    <aside className={`sidebar active`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src={avatar}
            alt="Yusuf ŞAL"
            id="avatar-img"
            width={80}
            height={80}
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Yusuf ŞAL">
            Yusuf ŞAL
          </h1>

          <p className="title">Freelance Developer</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <Seperator />
        <ul className="contacts-list">
          <ContactItem
            icon="IoMailOutline"
            title="Email"
            text="me@yusufsal.com"
            href="mailto:me@yusufsal.com"
          />
          <ContactItem
            icon="IoCalendarOutline"
            title="Birthday"
            text="February 16, 1996"
          />
          <ContactItem
            icon="IoLocationOutline"
            title="Location"
            text="Ankara, Turkey"
          />
          <ContactItem
            icon="IoArchive"
            title="Resume"
            text="More Detailed Resume"
            href="https://rxresu.me/tr/yusuf.sal.1996/cv-english"
          />
        </ul>

        <Seperator />

        <ul className="social-list">
          <SocialItem
            href="https://linkedin.com/in/yusufsalxp"
            icon="IoLogoLinkedin"
          />
          <SocialItem
            href="https://github.com/yusufsalxp"
            icon="IoLogoGithub"
          />
          <SocialItem
            href="https://app.codesignal.com/profile/yusufsalxp"
            icon="IoLogoCodepen"
          />
          <SocialItem
            href="https://stackoverflow.com/users/17674760/yusufsalxp"
            icon="IoLogoStackoverflow"
          />
          <SocialItem
            href="https://twitter.com/yusufsalxp"
            icon="IoLogoTwitter"
          />
          <SocialItem
            href="https://instagram.com/yusufsalxp"
            icon="IoLogoInstagram"
          />
        </ul>
      </div>
    </aside>
  );
}
