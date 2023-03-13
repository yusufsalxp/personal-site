import { IoBookOutline } from "react-icons/io5";

export default function Resume() {
  return (
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
              I developed 3 mobile applications, 2 admin dashboards, 2 web sites
              and worked as outsource for some companies.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Sofware Developer</h4>

            <span>2018 — 2021</span>

            <p className="timeline-text">
              I worked as software developer in a startup called Endeksa for
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
              <h5 className="h5">Web design</h5>
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
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
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
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
