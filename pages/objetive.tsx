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
      <div className="">
        <div className="row">
          <div className="col">
            <MultipleOptions
              id="1"
              label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
        eius praesentium accusamus possimus pariatur facere a veniam molestiae
        eveniet!"
              options={["option 1", "option 2", "option 3"]}
              correctOption={0}
              handlerCorrectOption={(isCorrect, id) => {
                console.log(isCorrect, id);
              }}
              canClean
            />
          </div>
          <div className="col">
            <MultipleOptions
              id="2"
              label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
        eius praesentium accusamus possimus pariatur facere a veniam molestiae
        eveniet!"
              options={["option 1", "option 2", "option 3"]}
              correctOption={0}
              handlerCorrectOption={(isCorrect, id) => {
                console.log(isCorrect, id);
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Objetive;
