import Head from "next/head";

import "../styles/globals.scss";
import Layout from "../components/navigation/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Here my chosen roadmap to learn web development and hand-picked resources to design and code your frontend ."
        />
        <title>Virtuoso</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
