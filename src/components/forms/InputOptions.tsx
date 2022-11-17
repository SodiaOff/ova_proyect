import { FC } from "react";

interface Props {
  id: string;
  label: string;
  customClass?: string;
}

const InputOptions: FC<Props> = ({ id, label, customClass }) => {
  return (
    <div className={" g-3 align-items-center " + customClass}>
      <div className="">
        <label htmlFor={"input-" + id} className="fw-semibold lh-sm">
          {label}
        </label>
      </div>
      <div className="">
        <input
          type="text"
          className="form-control"
          id={"input-" + id}
          placeholder="Your response"
        />
      </div>
    </div>
  );
};

export default InputOptions;
