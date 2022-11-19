import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { MySwal } from "../src/components/alerts/Swal";
import InputOptions from "../src/components/forms/InputOptions";
import Layout from "../src/components/Layout";

const Evaluation: NextPage = () => {
  const [hasResponse, setHasResponse] = useState(false);

  const showAlert = async () => {
    await MySwal.fire({
      icon: "success",
      title: "Your answer has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setHasResponse(true);
  };

  return (
    <Layout>
      <Head>
        <title>OVA English - Evaluation</title>
        <meta name="description" content="" />
      </Head>
      <div className="card card-body">
        <div className="row">
          <div className="col">
            <InputOptions id="0" label="Insert your name" />
          </div>
          <div className="col">
            <InputOptions id="0" label="Insert your email" />
          </div>
        </div>
        <InputOptions
          id="0"
          label="What do you think of the OVA?"
          isTextarea
          customClass="mt-3"
        />
        <InputOptions
          id="1"
          label="What have you learned during the development of OVA?"
          customClass="mt-3"
        />
        <InputOptions
          id="2"
          label="Have you improved your literal reading comprehension skills with the development of OVA?"
          customClass="mt-3"
        />
        <InputOptions
          id="3"
          label="Have the images, audios, videos, texts, and comics included in the OVA created an atmosphere that reinforces the message of each reading? Explains"
          customClass="mt-3"
          isTextarea
        />
        <InputOptions
          id="4"
          label="What are your strengths and difficulties during the process?"
          customClass="mt-3"
        />
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-primary"
            onClick={showAlert}
            disabled={hasResponse}
          >
            Submit your evaluation
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Evaluation;
