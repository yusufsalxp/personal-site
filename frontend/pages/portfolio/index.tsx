import Head from "next/head";
import Image from "next/image";
import * as IO5Icons from "react-icons/io5";

const CustomIO5Icon = ({ name }: { name: string }) => {
  const FaIcon = IO5Icons[name];
  if (!FaIcon) return <p>Icon not found!</p>;

  return <FaIcon />;
};

function ProjectItem({
  title,
  category,
  links,
  image,
}: {
  title: string;
  category: string;
  image: any;
  links: { icon: string; href: string }[];
}) {
  return (
    <li
      key={title}
      className="project-item  active"
      data-filter-item
      data-category="application"
    >
      <div>
        <figure className="project-img">
          <div className="project-item-icon-box">
            {links.map(({ icon, href }) => (
              <a key={href} href={href}>
                <CustomIO5Icon name={icon} />
              </a>
            ))}
          </div>

          <Image
            src={image}
            alt={title}
            loading="lazy"
            width={260}
            height={180}
          />
        </figure>

        <h3 className="project-title">{title}</h3>

        <p className="project-category">{category}</p>
      </div>
    </li>
  );
}

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Yusuf ŞAL | Porftolio</title>
      </Head>
      <article className="portfolio active" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="project-list">
            <ProjectItem
              title="Sahaja Meditation & Yoga"
              category="Mobile Application"
              image={"/yoga.png"}
              links={[
                {
                  href: "https://play.google.com/store/apps/details?id=com.sahajayogameditasyon.sahajayoga&hl=en&gl=US",
                  icon: "IoLogoGooglePlaystore",
                },
                {
                  href: "https://apps.apple.com/us/app/sahaja-yoga-meditasyon/id1556526076",
                  icon: "IoLogoAppleAppstore",
                },
                {
                  href: "https://sahajayogameditasyon.com/",
                  icon: "IoLinkOutline",
                },
              ]}
            />
            <ProjectItem
              title="Shri Mataji Nirmala Devi's Recipes"
              category="Mobile Application"
              image={"/recipe.png"}
              links={[
                {
                  href: "https://play.google.com/store/apps/details?id=com.shirimatajinirmaladevi.recipes",
                  icon: "IoLogoGooglePlaystore",
                },
                {
                  href: "https://apps.apple.com/gb/app/shrimatajinirmaladevisrecipes/id6444897780",
                  icon: "IoLogoAppleAppstore",
                },
              ]}
            />
            <ProjectItem
              title="Yusuf ŞAL Personal Site"
              category="Web Page"
              image={"/personal.png"}
              links={[
                {
                  href: "https://github.com/JosephShall/personal-site",
                  icon: "IoLogoGithub",
                },
                {
                  href: "https://yusufsal.com/",
                  icon: "IoLinkOutline",
                },
              ]}
            />
          </ul>
        </section>
      </article>
    </>
  );
}
