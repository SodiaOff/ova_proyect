import { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout";

const Grammar: NextPage = () => (
  <Layout complete>
    <Head>
      <title>OVA English - Grammar</title>
      <meta name="description" content="" />
    </Head>
    <embed
      src="https://www.englishld.com/blog"
      style={{ width: "100%", height: 500 }}
    />
  </Layout>
);

export default Grammar;
