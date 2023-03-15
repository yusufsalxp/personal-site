import Image from "next/image";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoTwitter,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import avatar from "../public/avatar.png";

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
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:contact@yusufsal.com" className="contact-link">
                contact@yusufsal.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+905075971176" className="contact-link">
                +90 (507) 597-1176
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">February 16, 1996</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Ankara, Turkey</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://twitter.com/JosephShalll" className="social-link">
              <IoLogoTwitter />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/JosephShall" className="social-link">
              <IoLogoGithub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
