import { FC } from "react";

interface Props {
  id: string;
  label: string;
  customClass?: string;
  isTextarea?: boolean;
}

const InputOptions: FC<Props> = ({ id, label, customClass, isTextarea }) => {
  return (
    <div className={" g-3 align-items-center " + customClass}>
      <div>
        <label htmlFor={"input-" + id} className="fw-semibold lh-sm">
          {label}
        </label>
      </div>
      <div className="mt-1">
        {isTextarea ? (
          <textarea
            className="form-control"
            id={"input-" + id}
            placeholder="Your response"
          ></textarea>
        ) : (
          <input
            type="text"
            className="form-control"
            id={"input-" + id}
            placeholder="Your response"
          />
        )}
      </div>
    </div>
  );
};

export default InputOptions;
