import Head from "next/head";
import Image from "next/image";
import nestjsIcon from "../public/NestJS.svg";
import flutterIcon from "../public/flutter.png";
import mobileDevIcon from "../public/icon-app.svg";
import webDevIcon from "../public/icon-dev.svg";
import nextjsIcon from "../public/nextjs.svg";
import reactIcon from "../public/react.png";
import typescriptIcon from "../public/typescript.png";

function CardItem({
  image,
  title,
  content,
}: {
  image: any;
  title: string;
  content: string;
}) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image src={image} width={40} alt={title} />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>

        <p className="service-item-text">{content}</p>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Yusuf ŞAL</title>
      </Head>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            A freelance sofware developer from Ankara, Turkey, working on web
            and mobile development. Enjoy solving different problems and trying
            new things.
          </p>
          <p>
            My job is to build your products so that it is easy to use and
            maintainable.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What im doing</h3>

          <ul className="service-list">
            <CardItem
              title="Frontend Web Development"
              content="Building frontend web applications by using React, Nodejs, Typescript,
              Nextjs and modern web development principles."
              image={webDevIcon}
            />
            <CardItem
              title="Backend Web Development"
              content="Building backend web applications by using Nodejs, Typescript
              Nestjs, Mongodb, Postgresql and modern web architecture."
              image={webDevIcon}
            />
            <CardItem
              title="Mobile App Development"
              content="Building mobile applications for IOS and Android by using
              Flutter."
              image={mobileDevIcon}
            />
          </ul>
        </section>

        <section className="service">
          <h3 className="h3 service-title">Tech Stack</h3>

          <ul className="service-list">
            <CardItem
              title="Flutter"
              content="Creating Android and IOS applications with high performance in
              Flutter."
              image={flutterIcon}
            />
            <CardItem
              title="NestJS"
              content="Creating backend application with NestJS and Typescript to
              have a maintainable and scalable backend projects."
              image={nestjsIcon}
            />
            <CardItem
              title="ReactJS"
              content="Creating frontend applications with ReactJS to have
              interactive and data driven applications."
              image={reactIcon}
            />
            <CardItem
              title="NextJS"
              content="Creating react application with NextJS and Typescript to have
              SEO first web pages."
              image={nextjsIcon}
            />
            <CardItem
              title="Typescript"
              content="Creating javascript application with typescript to have more
              maintainable and long term projects."
              image={typescriptIcon}
            />
          </ul>
        </section>
        {/* 
        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <Image
                    src={avatar1}
                    width={60}
                    height={60}
                    data-testimonials-avatar
                    alt="Daniel lewis"
                    className="testimonial-avatar-image"
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Daniel lewis
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <Image
                    src={avatar2}
                    width={60}
                    height={60}
                    data-testimonials-avatar
                    alt="Jessica miller"
                    className="testimonial-avatar-image"
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Jessica miller
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <Image
                    src={avatar3}
                    width={60}
                    height={60}
                    data-testimonials-avatar
                    alt="Emily evans"
                    className="testimonial-avatar-image"
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Emily evans
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <Image
                    src={avatar4}
                    width={60}
                    height={60}
                    data-testimonials-avatar
                    alt="Henry william"
                    className="testimonial-avatar-image"
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Henry william
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <IoCloseOutline />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <Image
                  src={avatar1}
                  width={80}
                  height={80}
                  data-modal-img
                  alt="Daniel lewis"
                  className="testimonial-avatar-image"
                />
              </figure>
              {
                // <img src="./assets/images/icon-quote.svg" alt="quote icon" />
              }
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </section>
        </div>
 */}
        {/*         <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-6-color.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section> */}
      </article>
    </>
  );
}
