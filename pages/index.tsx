import type { NextPage } from "next";
import Head from "next/head";
import YouTube from "react-youtube";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OVA English - Introduction</title>
        <meta name="description" content="" />
      </Head>
      <div className="row ">
        <div className="col-11 mb-4 fs-5 w-100">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="titulitos">Introduction</h1>
              <p>
                The purpose of this virtual Learning Object focuses on the
                essential influence of reading both in the mother tongue and in
                English on the cultural development of citizens, since it is a
                communicative process that facilitates the human being the
                possibility of interacting with a globalized world (where
                English is the universal language) and its common reality that
                is very permeated by Anglo-Saxon elements, likewise it allows
                him to express what he thinks, feels and wishes, in order to
                reinvent himself and transform his context. It is for this
                reason that, in the first instance, the impact that the media
                and information technologies are having on the training
                processes of the new generations is outlined, since we are today
                concurring in the emergence of a new digital culture, of new
                ways of reading and writing, of different ways of seeing and
                hearing, of feeling and enjoying, of learning and knowing. In
                this way, the design of a Virtual Learning Object becomes a
                contribution to the strengthening of the literal comprehension
                competence of short texts in English, taking into account the
                new forms of reciprocity that students have with technology and
                the Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2 mb-4">
          <div className="row p-2">
            <YouTube
              title="READ, PLAY AND LEARN ENGLISH ONLINE"
              videoId="nCUhYfPRum8"
              opts={{
                height: "400",
                width: "120%",
                playerVars: {
                  autoplay: 0,
                },
              }}
            />
          </div>
        </div>
        <div className="col mb-4 p-2 mx-5">
          <YouTube
            title="READ, PLAY AND LEARN ONLINE"
            videoId="NgBDxpE9Fxg"
            opts={{
              height: "400",
              width: "104%",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
