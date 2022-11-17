import { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout";

const Grammar: NextPage = () => (
  <Layout complete>
    <Head>
      <title>OVA English - Grammar</title>
      <meta name="description" content="" />
    </Head>
    <div className="d-flex">
      <embed
        src="https://www.englishld.com/blog"
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  </Layout>
);

export default Grammar;
