import Image from "next/image";
import {
  IoArchive,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOutline,
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

              <a href="mailto:me@yusufsal.com" className="contact-link">
                me@yusufsal.com
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
          <li className="contact-item">
            <div className="icon-box">
              <IoArchive />
            </div>

            <div className="contact-info">
              <p className="contact-title">Resume</p>

              <a
                href="https://rxresu.me/tr/yusuf.sal.1996/cv-english"
                className="contact-link"
              >
                Resume
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://linkedin.com/in/yusufsalxp"
              className="social-link"
            >
              <IoLogoLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/yusufsalxp" className="social-link">
              <IoLogoGithub />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://app.codesignal.com/profile/yusufsalxp"
              className="social-link"
            >
              <IoLogoCodepen />
            </a>
          </li>
          <li className="social-item">
            <a href="https://twitter.com/yusufsalxp" className="social-link">
              <IoLogoTwitter />
            </a>
          </li>
          <li className="social-item">
            <a href="https://instagram.com/yusufsalxp" className="social-link">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
