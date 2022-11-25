import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";

const Meeting: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OVA English - Meeting</title>
        <meta name="description" content="" />
      </Head>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center titulitos fs-2 mb-3 ">
          VIRTUAL MEETING
        </div>
        <div className="d-flex align-items-center">
          <div>
            <Image
              key={0}
              src={require("../src/assets/images/Meet.jpeg")}
              alt="clock"
              objectFit="contain"
              className="mt-2"
            />
          </div>
          <div className="w-75 mx-5">
            <div className="card card-body shadow">
              <div
                style={{ fontWeight: "bold", color: "#142e8d", fontSize: 30 }}
              >
                Class schedule:
              </div>
              <div>Wednesday and friday from 8:00 am to 9:30 am.</div>
              <div className="mt-4">
                To join the meeting on Google Meet, click this link:
              </div>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://meet.google.com/bfb-zpnp-kcz"
              >
                https://meet.google.com/bfb-zpnp-kcz
              </a>
              <div
                className="mt-4"
                style={{ color: "#142e8d", fontWeight: "bold" }}
              >
                * Obligatory Attendance
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Meeting;
