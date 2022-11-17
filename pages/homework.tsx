import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { MySwal } from "../src/components/alerts/Swal";
import Layout from "../src/components/Layout";

const Homework: NextPage = () => {
  const [hasResponse, setHasResponse] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

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
        <title>OVA English - Homework</title>
        <meta name="description" content="" />
      </Head>
      <div className="card card-body shadow">
        <h1>FORUM: AFTER WORKING ON THE VIRTUAL LEARNING OBJECT:</h1>
        <p>
          WHAT´S YOUR DAILY ROUTINE? DESCRIBE THE THINGS THAT YOU DO DURING THE
          DAY.
        </p>
        <p>INSTRUCTIONS OF THE FORUM (INSTRUCCIONES DEL FORO)</p>
        <ul>
          <li>READ THE QUESTION CAREFULLY AND ANSWER</li>
          <li>
            READ THE ANSWERS OF YOUR PARTNERS AND MAKE A COMMENT ON THE ANSWER
            OF ONE OF THEM.
          </li>
          <li>
            USE THE LANGUAGE CORRECTLY AND APPROPRIATELY, AVOIDING SPELLING
            MISTAKES.
          </li>
          <li>ADDRESS YOUR COLLEAGUES WITH RESPECT.</li>
        </ul>
        {hasResponse && (
          <div className="alert alert-success py-1 mt-3" role="alert">
            Your answer has been successfully saved.
          </div>
        )}
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email-floating"
                placeholder="insert your email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                disabled={hasResponse}
              />
              <label htmlFor="email-floating">Email address</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name-floating"
                placeholder="insert your name"
                value={name}
                onChange={({ target }) => setName(target.value)}
                disabled={hasResponse}
              />
              <label htmlFor="name-floating">Complete name</label>
            </div>
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control mt-2"
            placeholder="Write your answer"
            disabled={hasResponse}
            value={value}
            onChange={({ target }) => setValue(target.value)}
            style={{ height: 130 }}
          ></textarea>
          <label htmlFor="floatingTextarea">Your comment</label>
        </div>
        <div className="d-flex justify-content-end">
          <small className="">letters: {value.length}</small>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-primary"
            onClick={showAlert}
            disabled={
              hasResponse ||
              value.length <= 5 ||
              value.length <= 5 ||
              value.length <= 5
            }
          >
            Public your answer
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Homework;
