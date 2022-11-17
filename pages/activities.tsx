import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import YouTube from "react-youtube";
import MultipleOptions from "../src/components/forms/MultipleOptions";
import SelectOptions from "../src/components/forms/SelectOptions";
import Layout from "../src/components/Layout";

const options = [
  "She has a shower",
  "She catches the bus to school",
  "She gets dressed",
  "She gets up",
  "She listens to music",
  "She has lunch at the school canteen",
  "She does her homework",
  "She has dinner",
  "She goes to bed at about ten o'clock",
];

const Activities: NextPage = () => {
  const router = useRouter();

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    try {
      const currentActivitie = parseInt(router.asPath.split("#")[1]);

      if (currentActivitie) {
        setSelected(currentActivitie - 1);
      }
    } catch (error) {}
  }, [router.asPath]);

  return (
    <Layout>
      <Head>
        <title>OVA English - activities</title>
        <meta name="description" content="" />
      </Head>
      <div className="d-flex justify-content-around mx-5">
        <ItemStep
          id={0}
          label="1"
          onClick={(id) => setSelected(id)}
          isActive={selected === 0}
        />
        <ItemStep
          id={1}
          label="2"
          onClick={(id) => setSelected(id)}
          isActive={selected === 1}
        />
        <ItemStep
          id={2}
          label="3"
          onClick={(id) => setSelected(id)}
          isActive={selected === 2}
        />
        <ItemStep
          id={3}
          label="4"
          onClick={(id) => setSelected(id)}
          isActive={selected === 3}
        />
        <ItemStep
          id={4}
          label="5"
          onClick={(id) => setSelected(id)}
          isActive={selected === 4}
        />
        <ItemStep
          id={5}
          label="6"
          onClick={(id) => setSelected(id)}
          isActive={selected === 5}
        />
        <ItemStep
          id={6}
          label="7"
          onClick={(id) => setSelected(id)}
          isActive={selected === 6}
        />
        <ItemStep
          id={7}
          label="8"
          onClick={(id) => setSelected(id)}
          isActive={selected === 7}
        />
      </div>
      <div className="mt-4">{activities[selected] ?? <div>No hay</div>}</div>
    </Layout>
  );
};

interface IItemStep {
  id: number;
  label: string;
  onClick: (label: number) => void;
  isActive: boolean;
}

const ItemStep: FC<IItemStep> = ({ id, label, onClick, isActive }) => {
  return (
    <a href={"#" + (id + 1)} key={id}>
      <div
        style={{
          width: 80,
          height: 80,
          cursor: "pointer",
        }}
        className={
          "border rounded-circle border-2 bg-primary d-flex justify-content-center align-items-center shadow " +
          (isActive ? "border-dark border-5" : "border-white")
        }
        onClick={() => onClick(id)}
      >
        <div className="text-white h4">{label}</div>
      </div>
    </a>
  );
};

const Activitie1: FC = () => {
  return (
    <div>
      <div className="card shadow">
        <div className="d-flex justify-content-center">
          <div className="h2">SOPHIES{"'"}S DAILY ROUTINE</div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <div className=" ">
            <Image
              src={require("../src/assets/images/Sophie.svg")}
              alt="Sophie"
            />
          </div>
        </div>
        <div className="col-8">
          <div className="card shadow">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                necessitatibus ad consequuntur ratione ipsam quo voluptatem eum
                ipsa temporibus nostrum ut rerum quod, vel doloribus inventore
                molestias hic possimus dolores harum sint quam fugit. Esse
                eveniet itaque aspernatur ex rerum cum hic possimus repellat!
                Suscipit tenetur ea quis tempora, impedit culpa at delectus
                veniam dolor ducimus veritatis hic dignissimos necessitatibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                necessitatibus ad consequuntur ratione ipsam quo voluptatem eum
                ipsa temporibus nostrum ut rerum quod, vel doloribus inventore
                molestias hic possimus dolores harum sint quam fugit. Esse
                eveniet itaque aspernatur ex rerum cum hic possimus repellat!
                Suscipit tenetur ea quis tempora, impedit culpa at delectus
                veniam dolor ducimus veritatis hic dignissimos necessitatibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                necessitatibus ad consequuntur ratione ipsam quo voluptatem eum
                ipsa temporibus nostrum ut rerum quod, vel doloribus inventore
                molestias hic possimus dolores harum sint quam fugit. Esse
                eveniet itaque aspernatur ex rerum cum hic possimus repellat!
                Suscipit tenetur ea quis tempora, impedit culpa at delectus
                veniam dolor ducimus veritatis hic dignissimos necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow mt-3">
        <div className="d-flex justify-content-center">
          <div className="h3">Order Sophies{"'"}s daily routine</div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <div className="card shadow">
            <div className="card-body">
              <div className="row g-3">
                <label className="col-form-label">A). She has a shower</label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  B). She catches the bus to school
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">C). She gets dressed</label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">D). She gets up</label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  E). She does her homework
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  F). She listens to music
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  G). She has lunch at the school canteen
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  H). She does her homework
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">I). She has dinner</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card shadow">
            <div className="card-body">
              <SelectOptions
                label="1)."
                options={options}
                correctOption={3}
                id="1"
              />
              <SelectOptions
                label="2)."
                options={options}
                correctOption={0}
                id="2"
                customClass="mt-1"
              />
              <SelectOptions
                label="3)."
                options={options}
                correctOption={2}
                id="3"
                customClass="mt-1"
              />
              <SelectOptions
                label="4)."
                options={options}
                correctOption={1}
                id="4"
                customClass="mt-1"
              />
              <SelectOptions
                label="5)."
                options={options}
                correctOption={5}
                id="5"
                customClass="mt-1"
              />
              <SelectOptions
                label="6)."
                options={options}
                correctOption={6}
                id="6"
                customClass="mt-1"
              />
              <SelectOptions
                label="7)."
                options={options}
                correctOption={4}
                id="7"
                customClass="mt-1"
              />
              <SelectOptions
                label="8)."
                options={options}
                correctOption={7}
                id="8"
                customClass="mt-1"
              />
              <SelectOptions
                label="9)."
                options={options}
                correctOption={8}
                id="9"
                customClass="mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activitie2: FC = () => {
  return (
    <div>
      <div className="card shadow">
        <div className="d-flex justify-content-center">
          <div className="h2">EMMA´S DAILY ROUTINE</div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8">
          <div className="card shadow">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                necessitatibus ad consequuntur ratione ipsam quo voluptatem eum
                ipsa temporibus nostrum ut rerum quod, vel doloribus inventore
                molestias hic possimus dolores harum sint quam fugit. Esse
                eveniet itaque aspernatur ex rerum cum hic possimus repellat!
                Suscipit tenetur ea quis tempora, impedit culpa at delectus
                veniam dolor ducimus veritatis hic dignissimos necessitatibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                necessitatibus ad consequuntur ratione ipsam quo voluptatem eum
                ipsa temporibus nostrum ut rerum quod, vel doloribus inventore
                molestias hic possimus dolores harum sint quam fugit. Esse
                eveniet itaque aspernatur ex rerum cum hic possimus repellat!
                Suscipit tenetur ea quis tempora, impedit culpa at delectus
                veniam dolor ducimus veritatis hic dignissimos necessitatibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                necessitatibus ad consequuntur ratione ipsam quo voluptatem eum
                ipsa temporibus nostrum ut rerum quod, vel doloribus inventore
                molestias hic possimus dolores harum sint quam fugit. Esse
                eveniet itaque aspernatur ex rerum cum hic possimus repellat!
                Suscipit tenetur ea quis tempora, impedit culpa at delectus
                veniam dolor ducimus veritatis hic dignissimos necessitatibus?
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Image src={require("../src/assets/images/Emma.svg")} alt="Sophie" />
        </div>
      </div>
      <div className="card mt-3 shadow d-flex flex-column">
        <h3 className="card-title align-self-center">
          Answer the question about Emmma
        </h3>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <MultipleOptions
                id="1"
                label="1) How old is Emma?"
                options={[
                  "She is seven years old",
                  "She is ten years old",
                  "She is five years old",
                ]}
                correctOption={1}
              />
            </div>
            <div className="col">
              <MultipleOptions
                id="2"
                label="2) Where does she live"
                options={[
                  "She lives in street",
                  "She lives whit dog in USA",
                  "She lives whit her family in Brightan in the south of england",
                ]}
                correctOption={2}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="3"
                label="3) How many brothers and sisters has she got?"
                options={[
                  "She has got one Little brother",
                  "She has two sister",
                  "She has one brother and one sister",
                ]}
                correctOption={0}
              />
            </div>
            <div className="col">
              <MultipleOptions
                id="4"
                label="4) What kind of clothes does she like?"
                options={[
                  "Jeans, skirt, t-shirt, trainers",
                  "Jeans, t-shirt, Shorts and trainers",
                  "Jeans, dress, t-shirt, sandal",
                ]}
                correctOption={1}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="5"
                label="5) What does she have for breakfast?"
                options={[
                  "She usually eats soup",
                  "She usually eats bread whit coffee",
                  "She usually has a bowl whit cornflakes with hot milk",
                ]}
                correctOption={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activitie3: FC = () => {
  const [showtext, setShowText] = useState(false);

  return (
    <div>
      <div className="card shadow">
        <div className="d-flex justify-content-center">
          <div className="h2">My Working Day</div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4 d-flex flex-column align-items-center">
          {!showtext ? (
            <Image
              src={require("../src/assets/images/carolina.svg")}
              alt="Sophie"
            />
          ) : (
            <div className="mb-3">
              <div className="card shadow card-body">
                My working day starts very early. From Monday to Friday I get up
                at half past three and I have a shower and a cup of coffee. I
                usually leave the house at ten past four because the car always
                arrives a few minutes early. I get to the studio at about five
                oclock and start work. My programme Good Morning Britain starts
                at seven oclock and finishes at nine oclock. Then I leave the
                studio at a quarter past ten. After that, I go shopping and
                visit some friends. I get home at three oclock. A woman helps me
                with the housework and the ironing. I read a newspaper and do
                some work. Then my husband gets home at half past five in the
                evening and I cook dinner. We stay at home in the evening. We
                dont go out because I go to bed very early. We usually watch
                television and then I go to bed at half past eight, Im usually
                asleep by nine oclock. I think my job is very interesting but I
                dont like getting up very early.
              </div>
            </div>
          )}
          <ReactAudioPlayer
            src={require("../src/assets/audio/activitie3.mp3")}
            controls
          />
          <button className="btn mt-2" onClick={() => setShowText(!showtext)}>
            {!showtext ? "Show" : "Hide"} text{" "}
            <i className="fa-regular fa-circle-question"></i>
          </button>
        </div>
        <div className="col-8">
          <div className="card shadow">
            <div className="card-body">
              <div>
                <MultipleOptions
                  id="1"
                  label="1) The person is a woman"
                  options={["True", "False"]}
                  correctOption={0}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="2"
                  label="2) She is a television journalist"
                  options={["True", "False"]}
                  correctOption={0}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="3"
                  label="3) She drives her car to work"
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="4"
                  label="4) She goes home after the programme finishes"
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="5"
                  label="5) She is in the house alone till her husbnad arrives home"
                  options={["True", "False"]}
                  correctOption={0}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="6"
                  label="6. She goes to bed early during the week."
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="7"
                  label="7. She works with her husband."
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="8"
                  label="8. She likes everything about her job."
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activitie4: FC = () => {
  return (
    <div>
      <div className="card shadow">
        <div className="d-flex lh-1 flex-column justify-content-center align-items-center">
          <p className="h2">Comics Life</p>
          <p className="">
            Use the present simple tense to talk about daily routines and
            different times of the day
          </p>
        </div>
      </div>
      <div className="d-flex shadow mt-4">
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/Bus Escolar.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                Christophe gets the bus into town on Saturday morning.
                <br />
                <br />
                He meets his friends in town
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/Hamburguesa.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                In the morning Christophe and his friends go shopping.
                <br />
                <br />
                At noon, they have lunch together
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/Futbolista.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                After lunch Christophe plays football.
                <br />
                <br />
                At three o{"'"}clock, he does his homework in the library.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/Dardos.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                At a six o{"'"}clock, cooks dinner for his family.
                <br />
                At eight o o{"'"}clock, Christophe plays darts with his friends
                in the pub.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/Television.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                At ten o{"'"}clock,Christophe goes home and watches television.
                <br />
                He goes to bed at midnight
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow d-flex flex-column mt-4">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <MultipleOptions
                id="1"
                label="1) Where does Christophe come from?"
                options={["England", "Spain", "Spanish"]}
                correctOption={0}
              />
            </div>
            <div className="col">
              <MultipleOptions
                id="2"
                label="2) What time does Christophe go to bed?"
                options={[
                  "Twelve o'clock at night",
                  "Eleven o'clock at night",
                  "Ten o'clock at night",
                ]}
                correctOption={0}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="3"
                label="3) When does Christophe play darts?"
                options={["In the evening", "At noon", "In the afternoon"]}
                correctOption={0}
              />
            </div>
            <div className="col">
              <MultipleOptions
                id="4"
                label="4) When does Christophe go shopping?"
                options={["At noon", "In the morning", "In the afternoon"]}
                correctOption={0}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="5"
                label="5) What time does Christophe cook dinner on Saturdays?"
                options={["At noon", "At six o'clock", "At three o'clock"]}
                correctOption={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activitie5: FC = () => {
  return (
    <div>
      <div className="card shadow">
        <div className="d-flex justify-content-center">
          <div className="h4">
            SHORT STORY TO UNDERSTAND TIME-DAILY ROUTINE-ENGLISH
          </div>
        </div>
      </div>
      <div className="card card-body shadow mt-4">
        <YouTube
          title="Short Story to understand time - Daily routine - English"
          videoId="bbVOltiyX20"
          opts={{
            height: "500",
            width: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <MultipleOptions
                id="1"
                label="1) What time does she wake up?"
                options={[
                  <Image
                    key={0}
                    src={require("../src/assets/images/Reloj 2 6-00.svg")}
                    alt="clock"
                    className="card-img-top"
                    width={"150%"}
                    height={"150%"}
                  />,
                  <Image
                    key={1}
                    src={require("../src/assets/images/Reloj 2 7-00.svg")}
                    alt="clock"
                    className="card-img-top"
                    width={"150%"}
                    height={"150%"}
                  />,
                ]}
                correctOption={0}
              />
            </div>
            <div className="col">
              <MultipleOptions
                id="2"
                label="2) What time does she wake up?"
                options={[
                  <Image
                    key={0}
                    src={require("../src/assets/images/Reloj 2 11-00.svg")}
                    alt="clock"
                    className="card-img-top"
                    width={"150%"}
                    height={"150%"}
                  />,
                  <Image
                    key={1}
                    src={require("../src/assets/images/Reloj 2 8-00.svg")}
                    alt="clock"
                    className="card-img-top"
                    width={"150%"}
                    height={"150%"}
                  />,
                ]}
                correctOption={0}
              />
            </div>
            <div className="col">
              <MultipleOptions
                id="3"
                label="3) What time does she drawing class?"
                options={[
                  <Image
                    key={0}
                    src={require("../src/assets/images/Reloj 2 9-00.svg")}
                    alt="clock"
                    className="card-img-top"
                    width={"150%"}
                    height={"150%"}
                  />,
                  <Image
                    key={1}
                    src={require("../src/assets/images/Reloj 2 11-00.svg")}
                    alt="clock"
                    className="card-img-top"
                    width={"150%"}
                    height={"150%"}
                  />,
                ]}
                correctOption={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activitie6: FC = () => {
  return (
    <div>
      <div className="card shadow">
        <div className="d-flex justify-content-center">
          <div className="h5">
            DANIEL TIGER´S DAY AND NIGHT-LEARNING DAILY MORNING AND NIGHT
            ROUTINES
          </div>
        </div>
      </div>
      <div className="card card-body shadow mt-4">
        <YouTube
          title="Daniel Tiger’s Day & Night (Night)"
          videoId="0bCZ71cOlik"
          opts={{
            height: "500",
            width: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
      <div className="card card-body shadow mt-4">
        <div className="row">
          <div className="col">
            <MultipleOptions
              id="1"
              label="6) What is the correct order of the activities that Daniel do to get ready to school? Choose one option:"
              options={[
                "Put on his shoes-clothes on-brush his teeth have breakfast",
                "Clothes on- have breakfast- brush his teeth- put on his shoes",
              ]}
              correctOption={0}
            />
          </div>
          <div className="col">
            <MultipleOptions
              id="2"
              label="7) What does he eat for breakfast?"
              options={[
                "Pancakes whit strawberries",
                "Cereal with milk",
                "option 3",
              ]}
              correctOption={0}
            />
          </div>
          <div className="col">
            <MultipleOptions
              id="3"
              label="8) What's the first activity does Daniel do at night?"
              options={["Play video games", "Take a bath"]}
              correctOption={0}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <MultipleOptions
              id="1"
              label="9) What's the second activity does Daniel do at night?"
              options={["Brush his teeth", "Play outside with friends"]}
              correctOption={0}
            />
          </div>
          <div className="col">
            <MultipleOptions
              id="2"
              label="10) What does Daniel's mother do to make him fall sleep?"
              options={["Watch a movie", "Tell a story"]}
              correctOption={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const activities = [
  <Activitie1 key={0} />,
  <Activitie2 key={1} />,
  <Activitie3 key={2} />,
  <Activitie4 key={3} />,
  <Activitie5 key={4} />,
  <Activitie6 key={5} />,
];

export default Activities;
