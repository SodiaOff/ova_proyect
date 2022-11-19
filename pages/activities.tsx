import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import YouTube from "react-youtube";
import InputOptions from "../src/components/forms/InputOptions";
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
      <div className="h2 titulitos d-flex justify-content-center">
        SOPHIES{"'"}S DAILY ROUTINE
      </div>
      <div className="card shadow">
        <div className="d-flex justify-content-center"></div>
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
        <div className="col-8 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <p>
                Sophie is eleven years old and she lives in Brighton, England.
              </p>
              <p>
                She usually gets up at a quarter to eight, she has a shower,
                gets dressed and then she brushes, her teeth. After that, she
                goes downstairs and has breakfast. For breakfast she usually has
                milk, toast and orange juice. Then she brushes her teeth again
                because she likes them white and healty!
              </p>
              <p>
                Then she grabs her school bag and goes to the bus stop to catch
                the school bus. Classes start at half past eight and finish at
                half past four. She usually has lunch at the school canteen whit
                her schoolmates at about 12 o{"'"}clock. Her best friend is Amy
                and Sophie always sits next to her at lunch.
              </p>
              <p>
                After school she returns home and does her homework. She is a
                very hard-working pupil and she listens to music and watches
                television a bit.
              </p>
              <p>
                At half past seven it is time for dinner. Then she usually reads
                a book or chatswhit her parents for a while.
              </p>
              <p>
                Finally, she goes to bed at about ten o{"'"}clock, but before
                that she brushes her teeth. Sophie is a happy little girl!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h3 titulitos d-flex justify-content-center">
        ORDER SOPHIE{"'"}S DAILY ROUTINE
      </div>
      <div className="card shadow mt-3">
        <div className="d-flex justify-content-center"></div>
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
      <div className="h2 titulitos d-flex justify-content-center">
        EMMA´S DAILY ROUTINE
      </div>
      <div className="card shadow">
        <div className="d-flex justify-content-center"></div>
      </div>
      <div className="row mt-3">
        <div className="col-8">
          <div className="card shadow">
            <div className="card-body">
              <p>
                Hi, my name is Emma I{"'"}m ten years old and I{"'"}m English, I
                Live whit family in Bringhton in the south of England.
              </p>
              <p>
                My day <a className="underline">usually</a> starts quite early,
                I always get up at 7:30 on weekdays, but weekends I Sleep an
                hour and a half longer. When I get up, I go to the bathroom
                first, I Wash my face to wake me up, brush my teeth and then I
                have a shower. After that I comb my hair and get dressed, I
                usually wear casualclothes, mainly jeans, shorts, T-shirts and
                trainers.
              </p>
              <p>
                I <a className="underline">always</a> have breakfast whit my mum
                and little brother, Tommy. My dad{" "}
                <a className="underline">never</a> has breakfast whit us because
                he starts work early on weekdays. I usually have a bowl of
                cornflakes whit hot milk and toast whit marmalade. Before I go
                school, I have to walk our dog, Leo.
              </p>
              <p>
                I usually walk to school beacuse I don{"'"}t live my far,
                Classes start at 8:30, I like Maths best but I{"'"}m also good
                at science and English, I have two breaks, at 11 and at 1 o{"'"}
                clock, I eat sandwich and drink orange juice, I also play whit
                my classmates in the playground, School finishes at 3:30 and my
                dad picks me up and we come back home by car. Then we have lunch
                together.
              </p>
              <p>
                After lunch I play whit my brother for a while and then I domy
                homework and study. Twice a week I have a basketball practice, I
                love doing sports.
              </p>
              <p>
                Before dinner I <a className="underline">sometimes</a> meet my
                friends or watch a TV quiz, <a className="underline">seldom</a>
                play computer game, simply find them boring, We have dinner at
                7:30 and I <a className="underline">often</a> set table, After
                dinner I read a book or surf the Internet for a while.
              </p>
              <p>
                At 9:30 I go to the bathroom to hace a shower, brush my teeth
                and put on my nightdress, Before I go to sleep I listen to music
                on my MP3 player because it makes me feel relaxed.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Image src={require("../src/assets/images/Emma.svg")} alt="Sophie" />
        </div>
      </div>
      <div className="card mt-3 shadow d-flex flex-column">
        <h3 className="card-title align-self-center titulitos">
          WHAT HAPPENS AT THE GIVEN TIMES
        </h3>
        <div className="card-body">
          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <Image
                key={0}
                src={require("../src/assets/images/Reloj 8-30.svg")}
                alt="clock"
                className="card-img-top"
                width={"150%"}
                height={"150%"}
              />
              <textarea className="form-control" value={"Emma "}></textarea>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                key={0}
                src={require("../src/assets/images/Reloj 9-00.svg")}
                alt="clock"
                className="card-img-top"
                width={"150%"}
                height={"150%"}
              />
              <textarea className="form-control"></textarea>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                key={0}
                src={require("../src/assets/images/Reloj 11-00.svg")}
                alt="clock"
                className="card-img-top"
                width={"150%"}
                height={"150%"}
              />
              <textarea className="form-control"></textarea>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <Image
                key={0}
                src={require("../src/assets/images/Reloj 4-30.svg")}
                alt="clock"
                className="card-img-top"
                width={"150%"}
                height={"150%"}
              />
              <textarea className="form-control"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-3 shadow d-flex flex-column">
        <h3 className="card-title align-self-center titulitos">
          ANSWER THE QUESTION ABOUT EMMMA
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
      <div className="h2 titulitos d-flex justify-content-center">
        MY WORKING DAY
      </div>
      <div className="card shadow">
        <div className="d-flex justify-content-center"></div>
      </div>
      <div className="row mt-3">
        <div className="col-4 d-flex flex-column align-items-center">
          {!showtext ? (
            <Image
              src={require("../src/assets/images/Carolina.svg")}
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
          <button
            className="btn shadow mt-1 mb-4 titulitos"
            onClick={() => setShowText(!showtext)}
          >
            {!showtext ? "Show" : "Hide"} text{" "}
            <i className="fa-regular fa-circle-question"></i>
          </button>
          <ReactAudioPlayer
            src={require("../src/assets/audio/activitie3.mp3")}
            controls
          />
        </div>
        <div className="col-8">
          <div className="card shadow">
            <div className="card-body row">
              <div className="col-6">
                <MultipleOptions
                  id="1"
                  label="1) The person is a woman"
                  options={["True", "False"]}
                  correctOption={0}
                />
              </div>
              <div className="mt-2 col-6">
                <MultipleOptions
                  id="2"
                  label="2) She is a television journalist"
                  options={["True", "False"]}
                  correctOption={0}
                />
              </div>
              <div className="mt-2 col-6">
                <MultipleOptions
                  id="3"
                  label="3) She drives her car to work"
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2 col-6">
                <MultipleOptions
                  id="4"
                  label="4) She goes home after the programme finishes"
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2 col-6">
                <MultipleOptions
                  id="5"
                  label="5) She is in the house alone till her husbnad arrives home"
                  options={["True", "False"]}
                  correctOption={0}
                />
              </div>
              <div className="mt-2 col-6">
                <MultipleOptions
                  id="6"
                  label="6. She goes to bed early during the week."
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2 col-6">
                <MultipleOptions
                  id="7"
                  label="7. She works with her husband."
                  options={["True", "False"]}
                  correctOption={1}
                />
              </div>
              <div className="mt-2 col-6">
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
      <p className="h2 titulitos d-flex justify-content-center fs-1">
        Comics Life
      </p>
      <p className="d-flex justify-content-center fs-4">
        Use the present simple tense to talk about daily routines and different
        times of the day
      </p>
      <div className="card shadow">
        <div className="d-flex lh-1 flex-column justify-content-center align-items-center"></div>
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
              </p>
              <br />
              <p>He meets his friends in town</p>
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
              </p>
              <br />
              <p>At noon, they have lunch together</p>
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
              </p>
              <p>At three o{"'"}clock, he does his homework in the library.</p>
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
              </p>
              <p>
                At eight o{"'"}clock, Christophe plays darts with his friends in
                the pub.
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
              </p>
              <br />
              <p> He goes to bed at midnight</p>
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
                correctOption={1}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="5"
                label="5) What time does Christophe cook dinner on Saturdays?"
                options={["At noon", "At six o'clock", "At three o'clock"]}
                correctOption={1}
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
      <div className="h4 titulitos d-flex justify-content-center">
        SHORT STORY TO UNDERSTAND TIME-DAILY ROUTINE-ENGLISH
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
                correctOption={1}
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
                correctOption={1}
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
      <div className="h2 titulitos d-flex justify-content-center fs-3">
        DANIEL TIGER´S DAY AND NIGHT-LEARNING DAILY MORNING AND NIGHT ROUTINES
      </div>
      <div className="card shadow">
        <div className="d-flex justify-content-center"></div>
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
              options={["Pancakes whit strawberries", "Cereal with milk"]}
              correctOption={1}
            />
          </div>
          <div className="col">
            <MultipleOptions
              id="3"
              label="8) What's the first activity does Daniel do at night?"
              options={["Play video games", "Take a bath"]}
              correctOption={1}
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
              correctOption={1}
            />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

const Activitie7: FC = () => {
  const downloandImage = async () => {
    const resp = await fetch("../src/assets/images/sopa.png");
    const blobobject = await resp.blob();

    const blob = window.URL.createObjectURL(blobobject);
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = blob;
    anchor.download = "letter_soup.png";
    document.body.appendChild(anchor);
    anchor.click();
    window.URL.revokeObjectURL(blob);
  };

  return (
    <div>
      <div className="h2 titulitos d-flex justify-content-center mt-5">
        THE INCREDIBLE FAMILY
      </div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col d-flex justify-content-center mt--2">
            <Image
              src={require("../src/assets/images/Family Incredibles.png")}
              alt="Sophie"
            />
          </div>
          <div className="col fs-5 card shadow mt--2 p-4">
            <p>
              Hi, My name is Violet Parr, I{"'"}m 14 years old and I live in the
              centre of New York. Let me introduce you to my family, I{"'"}ll
              start talking about my youngest brother (1) Jack Jack. He{"'"}s
              only 1 years old, weights only 13 kilos and his main power is
              shape shifting, it means he can change into different forms. Then,
              I{"'"}ll continue talking about my younger brother (2) Dash. He is
              10 years old but he can run faster than anyone in the family but I
              {"'"}m stronger (3) than him. He also has special powers like me.
              We can become invisible and we have elastic arms (4) but mum says
              that we can{"'"}t use our powers unless we are in danger (5). To
              finish, I{"'"}ll talk about my parents, they are Helen and Bob
              Parr. My mum is 37 years old and she is the most intelligent (6)
              in the family my dad is 39 and can lift (7) very heavy things so
              he{"'"}s the strongest. We are a very special family as you can
              see. Now, tell me about yours, I{"'"}m sure that you have a have a
              very specialfamily too.
            </p>
          </div>
        </div>
      </div>

      <div className="card card-body shadow mt-1">
        <div className="d-flex flex-column">
          <div className="fw-semibold lh-sm">
            1) Select number (1 - 7) in the order they appear in the text:
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="card h-100">
                <Image
                  src={require("../src/assets/images/elastiger.png")}
                  alt="Sophie"
                  className="card-img-top"
                />
                <div className="card-body">
                  <SelectOptions
                    options={Array(7)
                      .fill(0)
                      .map((_, i) => (i + 1).toString())}
                    correctOption={0}
                    id="9"
                    customClass="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src={require("../src/assets/images/Fuerza.png")}
                  alt="Sophie"
                  className="card-img-top"
                />
                <div className="card-body">
                  <SelectOptions
                    options={Array(7)
                      .fill(0)
                      .map((_, i) => (i + 1).toString())}
                    correctOption={4}
                    id="9"
                    customClass="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src={require("../src/assets/images/Precaucion.png")}
                  alt="Sophie"
                  className="card-img-top"
                />
                <div className="card-body">
                  <SelectOptions
                    options={Array(7)
                      .fill(0)
                      .map((_, i) => (i + 1).toString())}
                    correctOption={5}
                    id="9"
                    customClass="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src={require("../src/assets/images/Cerebro.png")}
                  alt="Sophie"
                  className="card-img-top"
                />
                <div className="card-body">
                  <SelectOptions
                    options={Array(7)
                      .fill(0)
                      .map((_, i) => (i + 1).toString())}
                    correctOption={6}
                    id="9"
                    customClass="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src={require("../src/assets/images/Dash.png")}
                  alt="Sophie"
                  className="card-img-top"
                />
                <div className="card-body">
                  <SelectOptions
                    options={Array(7)
                      .fill(0)
                      .map((_, i) => (i + 1).toString())}
                    correctOption={2}
                    id="9"
                    customClass="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src={require("../src/assets/images/Mrbleauto.jpg")}
                  alt="Mr increible levanta auto"
                  className="card-img-top"
                />
                <div className="card-body">
                  <SelectOptions
                    options={Array(7)
                      .fill(0)
                      .map((_, i) => (i + 1).toString())}
                    correctOption={3}
                    id="9"
                    customClass="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src={require("../src/assets/images/Jack Jack.png")}
                  alt="Sophie"
                  className="card-img-top"
                />
                <div className="card-body">
                  <SelectOptions
                    options={Array(7)
                      .fill(0)
                      .map((_, i) => (i + 1).toString())}
                    correctOption={1}
                    id="9"
                    customClass="mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-5">
            <div className="d-flex flex-column">
              <div className="fw-semibold lh-sm">
                2) Answer the questions about the text:
              </div>
              <div className="my-3 mx-4">
                <div className="row">
                  <div className="col">
                    <InputOptions
                      id="1"
                      label="a) Who is the youngest in the family?"
                    />
                  </div>
                  <div className="col">
                    <InputOptions id="2" label="b) How old is dash?" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <InputOptions id="3" label="c) Who is the oldest?" />
                  </div>
                  <div className="col">
                    <InputOptions
                      id="4"
                      label="d) Who is the most intelligent?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <div className="fw-semibold lh-sm">
                3) Write True (T) or False (F):
              </div>
              <div className="my-3 mx-4">
                <div className="row">
                  <div className="col">
                    <MultipleOptions
                      id="1"
                      label="A) Jack Jack hasn't gotany special powers."
                      options={["True", "False"]}
                      correctOption={1}
                    />
                  </div>
                  <div className="col">
                    <MultipleOptions
                      id="2"
                      label="B) Helen is two years younger than Bob."
                      options={["True", "False"]}
                      correctOption={0}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <MultipleOptions
                      id="3"
                      label="C) Jack Jack is four years younger than Violet."
                      options={["True", "False"]}
                      correctOption={1}
                    />
                  </div>
                  <div className="col">
                    <MultipleOptions
                      id="4"
                      label="D) Violet is the fastest in the family."
                      options={["True", "False"]}
                      correctOption={1}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <MultipleOptions
                      id="5"
                      label="E) The strongest in the family is Bob."
                      options={["True", "False"]}
                      correctOption={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="d-flex flex-column">
              <div className="fw-semibold lh-sm">
                4) Find the superlatives of good, bad, big, silly, weak and
                young:
              </div>
              <Image
                key={0}
                src={require("../src/assets/images/sopa.png")}
                alt="clock"
                objectFit="contain"
                className="mt-2"
              />
              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary" onClick={downloandImage}>
                  Download letter soup
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

const Activitie8: FC = () => {
  return (
    <div>
      <div className="h2 titulitos d-flex justify-content-center">
        FUTURE PLANS
      </div>
      <p className="d-flex justify-content-center mt-3 mb-3 fs-3">
        Read what these three people want to do in the future and answer the
        questions in full sentences.
      </p>
      <div className="mt-4 mx-5 ">
        <div className="row d-flex align-items-center">
          <div className="col d-flex justify-content-center">
            <Image
              src={require("../src/assets/images/Lance.svg")}
              alt="Lance"
              width={"300%"}
              height={"300%"}
            />
          </div>
          <div className="col">
            <div className="card card-body shadow fs-4">
              My name is Lance and I am 15 years old. I am not sure what job I
              want when I am older, but I do know that I want to go to
              university. I am going to study English, Italian and Maths in Year
              12 & 13 and then go to a good university to study modern
              languages. Maybe I will become a famous writer or artist.
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row my-3">
          <div className="col d-flex align-items-center">
            <div className="card card-body shadow fs-4">
              Hi, my name is Rosie. I am 17 years old. I am going to be a doctor
              when I am older. I love to study and will go to medical school
              when I am 20. Before this I am going to travel abroad, to Africa
              and India and work in hospitals to get some experience. I know it
              will be difficult, but I will be strong and won{"'"}t get
              frightened or scared even if things get hard. I want to be the
              best!
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <Image
              src={require("../src/assets/images/Rosie.svg")}
              alt="Lance"
              width={"300%"}
              height={"300%"}
            />
          </div>
        </div>
        <hr className="my-4" />
        <div className="row d-flex align-items-center">
          <div className="col d-flex justify-content-center">
            <Image
              src={require("../src/assets/images/Laurent.svg")}
              alt="Lance"
              width={"300%"}
              height={"300%"}
            />
          </div>
          <div className="col">
            <div className="card card-body shadow fs-4">
              When I am older I am going to travel more. I came to the UK from
              Italy when I was five and I will return there one day soon. As I
              am going to travel I will learn as many new languages as I can
              while I am at school. I really want to learn Chinese and Russian,
              but the school doesn{"'"}t teach it at the minute, although the
              teachers say this will change soon! Sorry I forgot to say, my name
              is Laurent and I hope I will meet you on my travels in the future!
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <div className="mt-4 mx-5">
        <div className="row">
          <div className="col">
            <InputOptions id="0" label="Who is going to be a doctor?" />
          </div>
          <div className="col">
            <InputOptions
              id="1"
              label="Which 2 students will learn  new languages in the future?"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 mx-5">
        <div className="row">
          <div className="col">
            <InputOptions
              id="2"
              label="Will Laurent be able to learn Russian at school?"
            />
          </div>
          <div className="col">
            <InputOptions
              id="3"
              label="Does Lance think he will become a dancer when he is older?"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 mx-5">
        <div className="row">
          <div className="col">
            <InputOptions
              id="4"
              label="How many students want to travel in the future?"
            />
          </div>
          <div className="col"></div>
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
  <Activitie7 key={6} />,
  <Activitie8 key={7} />,
];

export default Activities;
