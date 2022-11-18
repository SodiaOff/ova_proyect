import { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout";

const Icfes: NextPage = () => (
  <Layout>
    <Head>
      <title>OVA English - ICFES</title>
      <meta name="description" content="" />
    </Head>
    <div className="d-flex flex-column">
      <div className="card card-body shadow mb-3">CUADERNILLO ICFES</div>
      <iframe
        src={"https://sodiaoff.github.io/ova_proyect/Guia_PC-Ingles-9-2.pdf"}
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  </Layout>
);

export default Icfes;
