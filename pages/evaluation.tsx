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
          label="¿qué te ha parecido el ova?"
          isTextarea
          customClass="mt-3"
        />
        <InputOptions
          id="1"
          label="¿qué has aprendido durante el desarrollo del ova?"
          customClass="mt-3"
        />
        <InputOptions
          id="2"
          label="¿has mejorado tu habilidad de comprensión lectora literal con el desarrollo de la ova?"
          customClass="mt-3"
        />
        <InputOptions
          id="3"
          label="¿las imágenes, los audios, los videos, los textos, e historietas incluidas en el ova han creado una atmosfera que refuerza el mensaje de cada lectura? Explica"
          customClass="mt-3"
          isTextarea
        />
        <InputOptions
          id="4"
          label="¿cuáles son tus fortalezas y dificultades durante el proceso?"
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
