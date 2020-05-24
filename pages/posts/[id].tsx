import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export const getStaticPaths = async (): Promise<{
  paths: {
    params: {
      id: string;
    };
  }[];
  fallback: boolean;
}> => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<{
  props: {
    postData: {
      date: string;
      title: string;
      id: string;
      contentHtml: string;
    };
  };
}> => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default ({
  postData,
}: {
  postData: {
    date: string;
    title: string;
    id: string;
    contentHtml: string;
  };
}): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>{" "}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};
