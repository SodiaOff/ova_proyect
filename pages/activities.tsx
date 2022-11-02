import { NextPage } from "next";
import Image from "next/image";
import { FC, useState } from "react";
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

const activities = [<Activitie1 key={0} />];

export default Activities;
