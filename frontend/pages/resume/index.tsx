import Head from "next/head";
import { IoBookOutline } from "react-icons/io5";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Yusuf ŞAL | Resume</title>
      </Head>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline />
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">University of Karabuk</h4>

              <span>2014 — 2018</span>

              <p className="timeline-text">
                Graduated from Electric and Electronic engineering.
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IoBookOutline />
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Freelance Sofware Developer
              </h4>

              <span>2021 — Present</span>

              <p className="timeline-text">
                Developed 3 mobile applications, 2 admin dashboards, 2 web sites
                and worked as outsource for some companies.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Sofware Developer</h4>

              <span>2018 — 2021</span>

              <p className="timeline-text">
                Worked as software developer in a startup called Endeksa for
                roughly 3 years. We worked on so different projects in this
                period.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Mobile Development</h5>
                <data value="95">95%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Backend Development</h5>
                <data value="80">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Frontend Development</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Javascript</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Dart</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Flutter</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">HTML & CSS</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
