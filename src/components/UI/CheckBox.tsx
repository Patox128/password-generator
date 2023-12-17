interface Props {
  label: string;
  id: string;
  name: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox: React.FC<Props> = ({
  label,
  value,
  name,
  id,
  onChange,
}) => {
  return (
    <div className="flex gap-5">
      <input
        id={id}
        name={name}
        type="checkbox"
        className="checkbox peer h-5 w-5 checked:bg-center"
        checked={value}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={id} className="w-full cursor-pointer ">
        {label}
      </label>
    </div>
  );
};
