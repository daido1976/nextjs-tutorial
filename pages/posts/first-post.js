import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
};
