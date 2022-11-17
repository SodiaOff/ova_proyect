import { NextPage } from "next";
import Head from "next/head";
import MultipleOptions from "../src/components/forms/MultipleOptions";
import Layout from "../src/components/Layout";

const Objetive: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OVA English - Objetive</title>
        <meta name="description" content="" />
      </Head>
      <div className="row">
        <div className="col-xl-7 col-xs-12">
          <div className="card shadow">
            <div className="card-body">
              <h2>GENERAL OBJECTIVE</h2>
              <p>
                To promote the processes of reading and literal comprehension of
                short texts in English in the students of grade 9-1 of the
                educational institution Jorge Isaacs de el placer, making use of
                the virtual learning object "Read, Play and Learn" as a tool
                that intensifies the pedagogical and training processes.
              </p>
              <h2>SPECIFIC OBJECTIVES</h2>
              <ul>
                <li>
                  To Promote the interaction with the Virtual Object “Read, Play
                  and learn” in the students of grade 9-1 of the Jorge Isaacs de
                  el Pleasure educational institution.
                </li>
                <li>
                  To Develop motivating reading practices and literal reading
                  comprehension of short texts in English.
                </li>
              </ul>
              <h2>VLO LEARNING OBJECTIVES:</h2>
              Understand what is the literal comprehension of texts in English
              and the characteristics that compose it.
              <ul>
                <li>
                  Understand what is the literal comprehension of texts in
                  English and the characteristics that compose it.
                </li>
                <li>
                  Identify the skills that develop the literal comprehension of
                  texts in the English language.
                </li>
                <li>
                  Understand the importance of the paratext as a didactic
                  strategy to anticipate the reading and interpretation of a
                  text in English by recognizing its parts.
                </li>
                <li>
                  Understand short texts in English about routines, daily
                  activities and tastes in digital environments that respond to
                  different communicative needs.
                </li>
              </ul>
              <h2>SPECIFIC COMPETENCES TO DEVELOP</h2>
              <ul>
                <li>To interpret what is read</li>
                <li>To Distinguish the central ideas in the texts we read.</li>
                <li>To Summarize the information we read.</li>
                <li>
                  To Consistently make inferences during and after reading.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Objetive;
