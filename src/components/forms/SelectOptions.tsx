import { FC, useState } from "react";

interface Props {
  id: string;
  options: string[];
  correctOption: number;
  label?: string;
  customClass?: string;
}

const SelectOptions: FC<Props> = ({
  id,
  label,
  options,
  correctOption,
  customClass,
}) => {
  const [result, setResult] = useState("-");
  const [hasAnswer, setHasAnswer] = useState(false);

  return (
    <div className={"row g-3 align-items-center " + customClass}>
      {label && (
        <div className="col-1">
          <label htmlFor={"select-" + id} className="col-form-label">
            {label}
          </label>
        </div>
      )}
      <div className="col">
        <select
          id={"input-" + id}
          className={
            "form-control w-100 " +
            (hasAnswer
              ? result === correctOption.toString()
                ? "is-valid"
                : "is-invalid"
              : "")
          }
          value={result}
          onChange={({ target }) => {
            const val = target.value;

            if (val !== "-") {
              setHasAnswer(true);
              setResult(target.value);
            }
          }}
          disabled={hasAnswer}
        >
          <option value="-">Seleccione una respuesta</option>
          {options.map((value, i) => (
            <option key={i} value={i}>
              {value}
            </option>
          ))}
        </select>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">
          La opción corresta es: {options[correctOption]}
        </div>
      </div>
    </div>
  );
};

export default SelectOptions;
