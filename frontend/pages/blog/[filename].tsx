// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import Head from "next/head";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>Yusuf ŞAL | {data.post.title}</title>
      </Head>

      <article className="blog  active" data-page="blog">
        <header>
          <h2 className="h2 article-title"> {data.post.title}</h2>
        </header>

        <section className="about-text">
          <TinaMarkdown components={components} content={data.post.body} />
        </section>
      </article>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.md` };
  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {}

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths:
      postsListData?.data?.postConnection?.edges?.map((post) => ({
        params: { filename: post?.node?._sys.filename },
      })) ?? [],
    fallback: false,
  };
};

const PageSection = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  );
};

const components = {
  PageSection: PageSection,
};

export default BlogPage;
