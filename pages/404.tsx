import Lottie from "lottie-react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/Layout";

const FourOFour: NextPage = () => (
  <Layout>
    <Head>
      <title>OVA English - 404 Error</title>
      <meta name="description" content="" />
    </Head>
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Lottie
        style={{ width: 500, height: 500 }}
        animationData={require("../src/assets/animations/error404.json")}
      />
      <Link href={"/"}>
        <button className="btn btn-primary">Volver al inicio</button>
      </Link>
    </div>
  </Layout>
);

export default FourOFour;
