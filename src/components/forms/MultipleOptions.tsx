import { FC, useState } from "react";

interface Props {
  id: string;
  label: string;
  options: string[];
  correctOption: number;
}

const MultipleOptions: FC<Props> = ({ correctOption, label, options, id }) => {
  const [localOption, setLocalOptions] = useState(
    options.map((item, i) => ({
      value: item,
      checked: false,
      id: `${i}-${id}`,
    }))
  );
  const [hasAnswer, setHasAnswer] = useState(false);

  return (
    <div className="">
      <div className="d-flex align-items-center">
        <div className="fw-semibold lh-sm">{label}</div>
      </div>
      {hasAnswer &&
        (localOption.find(({ checked }) => checked)!.id.split("-")[0] ===
        correctOption.toString() ? (
          <div className="alert alert-success py-1 mt-3" role="alert">
            Respuesta correcta
          </div>
        ) : (
          <div className="alert alert-danger py-1 mt-3 d-flex" role="alert">
            <div className="">Error, la respuesta correcta es:</div>
            <div className="fw-bold ms-1">
              {localOption[correctOption].value}
            </div>
          </div>
        ))}
      {localOption.map((item, i) => (
        <div key={i} className="form-check mt-2">
          <input
            disabled={hasAnswer}
            className="form-check-input"
            type="radio"
            name={item.id}
            id={item.id}
            checked={item.checked}
            onChange={() => {
              setHasAnswer(true);
              setLocalOptions(
                localOption.map((localItem, localI) => ({
                  ...localItem,
                  checked: localI === i,
                }))
              );
            }}
          />
          <label className="form-check-label" htmlFor={item.id}>
            {item.value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleOptions;
