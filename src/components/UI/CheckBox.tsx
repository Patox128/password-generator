import { FormState } from "../../types";

interface Props {
  label: string;
  id: string;
  name: string;
  value: boolean;
  setValues: React.Dispatch<React.SetStateAction<FormState>>;
}

export const CheckBox: React.FC<Props> = ({
  label,
  value,
  name,
  id,
  setValues,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <div className="flex gap-5">
      <input
        id={id}
        name={name}
        type="checkbox"
        className="checkbox peer h-5 w-5 checked:bg-center"
        checked={value}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={id} className="w-full cursor-pointer ">
        {label}
      </label>
    </div>
  );
};
