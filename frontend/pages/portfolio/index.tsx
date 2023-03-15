import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import personalPreview from "../../public/personal.png";
import recipePreview from "../../public/recipe.png";
import yogaPreview from "../../public/yoga.png";

export default function Portfolio() {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="application"
          >
            <div>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <a href="https://play.google.com/store/apps/details?id=com.sahajayogameditasyon.sahajayoga&hl=en&gl=US">
                    <IoLogoGooglePlaystore />
                  </a>

                  <a href="https://apps.apple.com/us/app/sahaja-yoga-meditasyon/id1556526076">
                    <IoLogoAppleAppstore />
                  </a>
                  <a href="https://sahajayogameditasyon.com/">
                    <FiArrowUpRight />
                  </a>
                </div>

                <Image
                  src={yogaPreview}
                  alt="Meditaion & Yoga"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Sahaja Meditation & Yoga</h3>

              <p className="project-category">Mobile Application</p>
            </div>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="application"
          >
            <div>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <a href="https://play.google.com/store/apps/details?id=com.shirimatajinirmaladevi.recipes">
                    <IoLogoGooglePlaystore />
                  </a>

                  <a href="https://apps.apple.com/gb/app/shrimatajinirmaladevisrecipes/id6444897780">
                    <IoLogoAppleAppstore />
                  </a>
                </div>

                <Image src={recipePreview} alt="Shiri " loading="lazy" />
              </figure>

              <h3 className="project-title">
                Shri Mataji Nirmala Devi&prime;s Recipes
              </h3>

              <p className="project-category">Mobile Application</p>
            </div>
          </li>
          <li
            className="project-item  active"
            data-filter-item
            data-category="application"
          >
            <div>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <a href="https://www.yusufsal.com/">
                    <FiArrowUpRight />
                  </a>
                </div>

                <Image src={personalPreview} alt="Shiri " loading="lazy" />
              </figure>

              <h3 className="project-title">Yusuf ŞAL Personal Site</h3>

              <p className="project-category">Web Page</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
