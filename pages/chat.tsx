import { NextPage } from "next";
import Head from "next/head";
import MultipleOptions from "../src/components/forms/MultipleOptions";
import Layout from "../src/components/Layout";

const Chat: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OVA English - Chat</title>
        <meta name="description" content="" />
      </Head>
      <div
        className="container d-flex justify-content-center "
        style={{ width: "100%", height: "30%" }}
      >
        <iframe
          src="https://chat.chatzona.org/index.html#nick=&channel=OVA - ENGLISH"
          width="1200"
          height="640"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Chat;
