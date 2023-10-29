import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/react";

export default function Blog(props) {
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });
  const postsList = data.postConnection.edges;

  return (
    <>
      <Head>
        <title>Yusuf ŞAL | Blog</title>
      </Head>
      <article className="blog active" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {postsList.map(
              ({
                node: {
                  id,
                  topic,
                  _sys: { filename },
                  title,
                  lastUpdated,
                },
              }) => (
                <li key={id} className="blog-post-item">
                  <Link href={`/blog/${filename}`} passHref legacyBehavior>
                    <a href={"#"}>
                      <div className="blog-content">
                        <h3 className="h3 blog-item-title">{title}</h3>

                        <div className="blog-meta">
                          <p className="blog-category">{topic}</p>

                          <span className="dot"></span>

                          <time dateTime="2022-02-23">
                            {moment(lastUpdated).format("MMMM Do YYYY")}
                          </time>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>
        </section>
      </article>
    </>
  );
}
const query = `{
  postConnection {
    edges {
      node {
        id
        _sys {
          filename
        }
        topic
        title
        lastUpdated
      }
    }
  }
}`;

export const getStaticProps = async () => {
  let data: any = {};
  const variables = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {}

  return {
    props: {
      query,
      variables,
      data,
    },
  };
};
