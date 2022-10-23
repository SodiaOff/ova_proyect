import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/Layout";
import YouTube from "react-youtube";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>OVA English - Introduction</title>
        <meta name="description" content="" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-xs-12">
            <div className="card shadow">
              <div className="card-body">
                <h1>Introduction</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  necessitatibus ad consequuntur ratione ipsam quo voluptatem
                  eum ipsa temporibus nostrum ut rerum quod, vel doloribus
                  inventore molestias hic possimus dolores harum sint quam
                  fugit. Esse eveniet itaque aspernatur ex rerum cum hic
                  possimus repellat! Suscipit tenetur ea quis tempora, impedit
                  culpa at delectus veniam dolor ducimus veritatis hic
                  dignissimos necessitatibus?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  necessitatibus ad consequuntur ratione ipsam quo voluptatem
                  eum ipsa temporibus nostrum ut rerum quod, vel doloribus
                  inventore molestias hic possimus dolores harum sint quam
                  fugit. Esse eveniet itaque aspernatur ex rerum cum hic
                  possimus repellat! Suscipit tenetur ea quis tempora, impedit
                  culpa at delectus veniam dolor ducimus veritatis hic
                  dignissimos necessitatibus?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  necessitatibus ad consequuntur ratione ipsam quo voluptatem
                  eum ipsa temporibus nostrum ut rerum quod, vel doloribus
                  inventore molestias hic possimus dolores harum sint quam
                  fugit. Esse eveniet itaque aspernatur ex rerum cum hic
                  possimus repellat! Suscipit tenetur ea quis tempora, impedit
                  culpa at delectus veniam dolor ducimus veritatis hic
                  dignissimos necessitatibus?
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xs-12">
            <YouTube
              title="OBJETO VIRTUAL DE APRENDIZAJE: READ, PLAY AND LEAR"
              videoId="NQxlXqB3c1o"
              opts={{
                height: "390",
                width: "100%",
                playerVars: {
                  autoplay: 0,
                },
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
