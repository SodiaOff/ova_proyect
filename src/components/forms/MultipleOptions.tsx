import { FC, useState } from "react";

interface Props {
  id: string;
  label: string;
  options: string[];
  correctOption: number;
  handlerCorrectOption: (isCorrect: boolean, selected: number) => void;
  canClean?: boolean;
  nonSelectedValue?: number;
}

const MultipleOptions: FC<Props> = ({
  correctOption,
  label,
  options,
  handlerCorrectOption,
  id,
  nonSelectedValue = -1,
  canClean,
}) => {
  const [localOption, setLocalOptions] = useState(
    options.map((item, i) => ({
      value: item,
      checked: false,
      id: `${i}-${id}`,
    }))
  );

  return (
    <div className="">
      <div className="d-flex align-items-center">
        <div className="fw-semibold lh-sm">{label}</div>
        {canClean && (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              setLocalOptions(
                localOption.map((localItem) => ({
                  ...localItem,
                  checked: false,
                }))
              );
              handlerCorrectOption(false, nonSelectedValue);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
      </div>
      {localOption.map((item, i) => (
        <div key={i} className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name={item.id}
            id={item.id}
            checked={item.checked}
            onChange={() => {
              setLocalOptions(
                localOption.map((localItem, localI) => ({
                  ...localItem,
                  checked: localI === i,
                }))
              );
              handlerCorrectOption(i === correctOption, i);
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
