import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

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
      {" "}
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </Layout>
  );
};
