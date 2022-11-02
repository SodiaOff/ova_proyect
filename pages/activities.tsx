import { NextPage } from "next";
import Image from "next/image";
import { FC, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import YouTube from "react-youtube";
import MultipleOptions from "../src/components/forms/MultipleOptions";
import Layout from "../src/components/Layout";

const Activities: NextPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Layout>
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
    <div
      key={id}
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
  );
};

const Activitie1: FC = () => {
  return (
    <div>
      <div className="card shadow">
        <div className="d-flex justify-content-center">
          <div className="h2">Lorem ipsum dolor sit amet.</div>
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
      <div className="card shadow">
        <div className="d-flex justify-content-center">
          <div className="h3">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-5">
          <div className="card shadow">
            <div className="card-body">
              <div className="row g-3">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
              <div className="row g-3 mt-1">
                <label className="col-form-label">
                  A). Lorem ipsum, dolor sit amet consectetur adipisicing.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-success">Validate answers</button>
        </div>
        <div className="col-5">
          <div className="card shadow">
            <div className="card-body">
              <div className="row g-3 align-items-center">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-1">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    A).
                  </label>
                </div>
                <div className="col-11">
                  <select id="inputPassword6" className="form-control w-100">
                    <option value="a">1</option>
                  </select>
                </div>
              </div>
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
          <div className="h2">Lorem ipsum dolor sit amet.</div>
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
      <div className="card shadow d-flex flex-column">
        <h3 className="card-title align-self-center">
          Lorem ipsum dolor sit amet.
        </h3>
        <div className="card-body">
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
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="3"
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
            <div className="col">
              <MultipleOptions
                id="4"
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
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="5"
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
            <div className="col d-flex justify-content-center align-items-center">
              <div>
                <button className="btn btn-success">Validate answers</button>
              </div>
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
          <div className="h2">Lorem ipsum dolor sit amet.</div>
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
          <button className="btn btn-success mt-2">Valid answers</button>
        </div>
        <div className="col-8">
          <div className="card shadow">
            <div className="card-body">
              <div>
                <MultipleOptions
                  id="1"
                  label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
        eius praesentium accusamus possimus pariatur facere a veniam molestiae
        eveniet!"
                  options={["option 1", "option 2"]}
                  correctOption={0}
                  handlerCorrectOption={(isCorrect, id) => {
                    console.log(isCorrect, id);
                  }}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="2"
                  label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
        eius praesentium accusamus possimus pariatur facere a veniam molestiae
        eveniet!"
                  options={["option 1", "option 2"]}
                  correctOption={0}
                  handlerCorrectOption={(isCorrect, id) => {
                    console.log(isCorrect, id);
                  }}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="3"
                  label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
        eius praesentium accusamus possimus pariatur facere a veniam molestiae
        eveniet!"
                  options={["option 1", "option 2"]}
                  correctOption={0}
                  handlerCorrectOption={(isCorrect, id) => {
                    console.log(isCorrect, id);
                  }}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="4"
                  label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
        eius praesentium accusamus possimus pariatur facere a veniam molestiae
        eveniet!"
                  options={["option 1", "option 2"]}
                  correctOption={0}
                  handlerCorrectOption={(isCorrect, id) => {
                    console.log(isCorrect, id);
                  }}
                />
              </div>
              <div className="mt-2">
                <MultipleOptions
                  id="5"
                  label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
        eius praesentium accusamus possimus pariatur facere a veniam molestiae
        eveniet!"
                  options={["option 1", "option 2"]}
                  correctOption={0}
                  handlerCorrectOption={(isCorrect, id) => {
                    console.log(isCorrect, id);
                  }}
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
          <p className="h2">Lorem ipsum dolor sit amet.</p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            perferendis!
          </p>
        </div>
      </div>
      <div className="d-flex shadow mt-4">
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/carolina.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/carolina.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/carolina.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/carolina.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Image
              src={require("../src/assets/images/carolina.svg")}
              alt="Sophie"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow d-flex flex-column mt-4">
        <h3 className="card-title align-self-center">
          Lorem ipsum dolor sit amet.
        </h3>
        <div className="card-body">
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
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="3"
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
            <div className="col">
              <MultipleOptions
                id="4"
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
          <div className="row mt-3">
            <div className="col">
              <MultipleOptions
                id="5"
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
            <div className="col d-flex justify-content-center align-items-center">
              <div>
                <button className="btn btn-success">Validate answers</button>
              </div>
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
          <div className="h2">Lorem ipsum dolor sit amet.</div>
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
      </div>
      <div className="card card-body shadow mt-4">
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
          <div className="col">
            <MultipleOptions
              id="3"
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
        <div className="d-flex justify-content-center mt-3 mb-2">
          <button className="btn btn-success">Validate Answers</button>
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
          <div className="h2">Lorem ipsum dolor sit amet.</div>
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
          <div className="col">
            <MultipleOptions
              id="3"
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
        <div className="row mt-2">
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
          <div className="col d-flex justify-content-center align-items-center">
            <div className="">
              <button className="btn btn-success">Validate Answers</button>
            </div>
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
