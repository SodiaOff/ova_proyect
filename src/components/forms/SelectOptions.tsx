import { FC, useEffect, useState } from "react";

interface Props {
  id: string;
  label: string;
  options: string[];
  correctOption: number;
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

  useEffect(() => {
    [...(document.querySelectorAll('[data-bs-toggle="tooltip"]') as any)].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <>
      <div className={"row g-3 align-items-center " + customClass}>
        <div className="col-1">
          <label htmlFor={"input-" + id} className="col-form-label">
            {label}
          </label>
        </div>
        <div className="col">
          <select
            id={"input-" + id}
            className="form-control w-100"
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
        </div>
        {hasAnswer && (
          <div className="col-1">
            {result === correctOption.toString() ? (
              <i className="fa-solid text-success fa-circle-check"></i>
            ) : (
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-title={
                  "La opción corresta es: " + options[correctOption]
                }
              >
                <i className="fa-solid text-danger fa-circle-xmark"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectOptions;
