import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/Layout";

const Games: NextPage = () => (
  <Layout>
    <Head>
      <title>OVA English - Games</title>
      <meta name="description" content="" />
    </Head>
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center titulitos fs-2 mb-3 ">
        GAMES
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image
          key={0}
          src={require("../src/assets/images/Games.jpeg")}
          alt="clock"
          objectFit="contain"
          className="mt-2"
        />
        <div className="d-flex" style={{ fontWeight: "bold", fontSize: 25 }}>
          <div className="me-2" style={{ color: "blue" }}>
            PLAY THE GAMES
          </div>
          REINFORCE YOUR KNOWLEDGE AND ENJOY THE AMAZING <br /> WORLD OF ENGLISH
          LEARNING!!
        </div>
        <ul
          className="align-self-start mt-5"
          style={{ marginLeft: 175, fontSize: 23 }}
        >
          <li>
            DAILY RUTINE
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mes-games.com/dailyroutines.php"
            >
              https://www.mes-games.com/dailyroutines.php
            </a>
          </li>
          <li>
            PRESENT SIMPLE
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gamestolearnenglish.com/present-simple/"
            >
              https://www.gamestolearnenglish.com/present-simple/
            </a>
          </li>
          <li>
            TELLING THE TIME
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gamestolearnenglish.com/telling-the-time/"
            >
              https://www.gamestolearnenglish.com/telling-the-time/
            </a>
          </li>
          <li>
            COMPARATIVE AND SUPERLATIVE ADJECTIVES
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gamestolearnenglish.com/comparatives/"
            >
              https://www.gamestolearnenglish.com/comparatives/
            </a>
          </li>
          <li>
            FUTURE TENSE
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mes-games.com/future1.php"
            >
              https://www.mes-games.com/future1.php
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default Games;
