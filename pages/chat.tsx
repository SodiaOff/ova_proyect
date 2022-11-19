import { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout";

const Chat: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OVA English - Chat</title>
        <meta name="description" content="" />
      </Head>
      <div className="d-flex justify-content-center titulitos fs-4 mb-2">
        CHAT OVA-ENGLISH
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{ width: "100%", height: "100vh" }}
      >
        <iframe
          src="https://chat.chatzona.org/index.html#nick=&channel=OVA - ENGLISH"
          width="100%"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Chat;
